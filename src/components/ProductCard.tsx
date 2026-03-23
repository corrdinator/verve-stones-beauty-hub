import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group glass-card overflow-hidden"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleAdd}
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>
      <div className="p-4">
        <p className="text-xs text-muted-foreground tracking-wider uppercase mb-1">{product.category}</p>
        <h3 className="font-display text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
        <p className="mt-3 font-medium text-accent">${product.price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
