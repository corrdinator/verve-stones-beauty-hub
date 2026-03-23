import { motion } from "framer-motion";
import { Heart, Users, Award } from "lucide-react";

const About = () => (
  <div className="min-h-screen pt-24">
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-2">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-8">About Verve Stones</h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Born from a passion for natural beauty and self-care, Verve Stones was founded with one mission:
            to empower every individual to feel confident, fresh, and radiant — every single day.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Heart,
            title: "Our Mission",
            text: "We believe beauty is about confidence and self-expression. Every product is designed to enhance your natural radiance, not mask it.",
          },
          {
            icon: Users,
            title: "For Everyone",
            text: "Verve Stones is for men, women, and families. Our inclusive range caters to all skin types and preferences.",
          },
          {
            icon: Award,
            title: "Quality First",
            text: "We source only the finest natural ingredients and rigorously test every formula for safety and effectiveness.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-8 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="section-padding text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">The Verve Philosophy</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We see hygiene and beauty as daily rituals of self-love. From the moment you start your day with our
          toothpaste and soap, to the confidence boost from our perfumes and body sprays — every Verve Stones
          product is crafted to make the ordinary feel extraordinary.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Our commitment to sustainability means we use eco-friendly packaging and cruelty-free formulations,
          because caring for yourself should never come at the expense of our planet.
        </p>
      </div>
    </section>
  </div>
);

export default About;
