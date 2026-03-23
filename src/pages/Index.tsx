import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles, Shield, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-beauty.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const featured = products.filter((p) => p.badge);

const testimonials = [
  { name: "Amina K.", text: "Verve Stones completely transformed my self-care routine. The body scrub leaves my skin glowing!", stars: 5 },
  { name: "David R.", text: "The Noir perfume is my signature scent now. Sophisticated and long-lasting.", stars: 5 },
  { name: "Sophia L.", text: "Love the facial masks — my skin has never looked better. Premium quality at great prices.", stars: 5 },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Verve Stones Beauty Products" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4 font-medium">Premium Beauty & Self-Care</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-background leading-tight mb-6">
            Feel Fresh. Feel Confident. <span className="italic">Feel Verve.</span>
          </h1>
          <p className="text-background/80 text-lg mb-8 leading-relaxed">
            Discover luxurious beauty products crafted for your daily self-care ritual. Natural ingredients, premium quality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="btn-gold inline-flex items-center gap-2">
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/deals" className="btn-outline-dark border-background/50 text-background hover:bg-background hover:text-foreground">
              View Deals
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Leaf, title: "Natural Ingredients", desc: "Carefully sourced, gentle on your skin" },
          { icon: Shield, title: "Dermatologist Tested", desc: "Safe for all skin types" },
          { icon: Sparkles, title: "Premium Quality", desc: "Luxurious formulas that deliver results" },
        ].map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex items-start gap-4 p-6"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <v.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold mb-1">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Featured Products */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-2">Curated For You</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">Featured Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/shop" className="btn-gold inline-flex items-center gap-2">
            Browse All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-nude/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-2">What People Say</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">Customer Love</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
              <p className="font-display font-semibold text-lg">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-primary text-primary-foreground text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">Ready to Glow?</h2>
        <p className="text-primary-foreground/70 mb-8 text-lg">
          Join thousands who trust Verve Stones for their daily self-care ritual.
        </p>
        <Link to="/shop" className="btn-gold inline-flex items-center gap-2">
          Start Shopping <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
