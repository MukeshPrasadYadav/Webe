// client/src/components/normal_components/ProductCard.tsx

import { Heart } from "lucide-react";
import { Button } from "../ui/button";

interface ProductCardProps {
  name?: string;
  price?: number;
  image?: string;
}

const ProductCard = ({
  name = "Spider-Man Mask",
  price = 4999,
  image = "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&auto=format&fit=crop",
}: ProductCardProps) => {
  return (
    <article
      className="
        group
        w-full
        max-w-[280px]
        overflow-hidden
        rounded-lg
        border
        border-border
        bg-card
        text-card-foreground
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/50
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-105
          "
        />

        {/* Image overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/30
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        {/* Wishlist */}
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Add ${name} to wishlist`}
          className="
            absolute
            right-2
            top-2
            h-8
            w-8
            rounded-full
            border
            border-white/10
            bg-black/45
            text-white
            backdrop-blur-md
            transition-all
            duration-200
            hover:border-primary/40
            hover:bg-primary
            hover:text-primary-foreground
          "
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* ================= PRODUCT INFO ================= */}
      <div className="flex flex-col gap-1.5 p-3">
        <h3
          className="
            truncate
            text-sm
            font-medium
            leading-tight
            text-card-foreground
          "
        >
          {name}
        </h3>

        <p className="text-sm font-semibold text-primary">
          ₹{price.toLocaleString("en-IN")}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;