import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product);
    toast.success(`R{product.name} added to cart`);
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
  <span className="...">
    {product.badge}
  </span>
)}

<a
  href={`https://wa.me/27635401316?text=Hi, I'm interested in R{product.name} Price: R{product.price}`}
  target="_blank"
  className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center"
>
  💬
</a>
          
        
      </div>
      <div className="p-4">
        <p className="text-xs text-muted-foreground tracking-wider uppercase mb-1">{product.category}</p>
        <
</a> className="font-display text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
        <p className="mt-3 font-medium text-accent">R{product.price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
