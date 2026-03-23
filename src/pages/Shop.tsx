import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Shop = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-2">Our Collection</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold">Shop All Products</h1>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
