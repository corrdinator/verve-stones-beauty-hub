import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-2">Get In Touch</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold">Contact Us</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="font-display text-2xl font-semibold mb-6">We'd Love to Hear From You</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have questions about our products or need help with an order? Reach out and our team will assist you promptly.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { icon: Mail, label: "Email", value: "vervestonesb@mail.com" },
                  { icon: Phone, label: "Phone", value: "+27 63 540 1316" },
                  { icon: MessageCircle, label: "WhatsApp", value: "+27 63 540 1316" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</p>
                      <p className="font-medium">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="glass-card p-8 flex flex-col gap-5"
            >
              <div>
                <label className="text-sm font-medium mb-1 block">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button type="submit" className="btn-gold inline-flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
