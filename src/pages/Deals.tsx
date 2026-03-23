import { motion } from "framer-motion";
import { Tag, ArrowRight } from "lucide-react";
import { comboOffers } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { toast } from "sonner";

const Deals = () => {
  const { addItem } = useCart();

  const handleAddCombo = (combo: typeof comboOffers[0]) => {
    // Add first matching product for each combo item
    combo.products.forEach((name) => {
      const product = products.find((p) => p.name === name);
      if (product) addItem(product);
    });
    toast.success(`${combo.name} added to cart!`);
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-2">Special Offers</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold">Combo Deals</h1>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Save more when you bundle your favorite Verve Stones products together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comboOffers.map((combo, i) => (
              <motion.div
                key={combo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 glow-gold relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  Save ${(combo.originalPrice - combo.comboPrice).toFixed(2)}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">{combo.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{combo.description}</p>
                <ul className="mb-6 space-y-1">
                  {combo.products.map((p, j) => (
                    <li key={j} className="text-sm text-muted-foreground">• {p}</li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-muted-foreground line-through text-sm mr-2">${combo.originalPrice.toFixed(2)}</span>
                    <span className="text-2xl font-display font-bold text-accent">${combo.comboPrice.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => handleAddCombo(combo)}
                    className="btn-gold text-sm px-6 py-2 inline-flex items-center gap-2"
                  >
                    Add Bundle <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deals;
