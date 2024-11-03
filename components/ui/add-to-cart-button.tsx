"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";
import { Product } from "@/lib/types";
import { toast } from "sonner";

export function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Button
      size="lg"
      className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
      onClick={handleAddToCart}
      disabled={product.stock === 0}
    >
      {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
    </Button>
  );
}