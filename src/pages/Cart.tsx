import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center gap-6">
        <ShoppingBag className="w-16 h-16 text-muted-foreground/30" />
        <h2 className="font-display text-3xl font-semibold">Your cart is empty</h2>
        <Link to="/shop" className="btn-gold">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-semibold mb-8">Your Cart</h1>
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass-card p-4 flex gap-4 items-center"
              >
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">R{item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <p className="font-medium w-20 text-right">R{(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="font-display text-3xl font-bold">R{totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => { clearCart(); toast.info("Cart cleared"); }} className="btn-outline-dark text-sm px-6">
                Clear Cart
              </button>
              <button onClick={() => toast.success("Checkout coming soon!")} className="btn-gold text-sm">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
