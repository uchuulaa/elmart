"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { toast } from "sonner";

export function CartSheet() {
  const { items, removeItem, updateQuantity, clearCart, total } = useCartStore();

  const handleCheckout = () => {
    clearCart();
    toast.success("Order placed successfully!", {
      description: "Thank you for your purchase!",
    });
  };

  if (items.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <p className="mb-4 text-center text-muted-foreground">
          Your cart is empty
        </p>
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <ScrollArea className="flex-1">
        <div className="space-y-4 p-1">
          {items.map((item) => (
            <div key={item.id} className="space-y-3">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div className="flex-1 space-y-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    updateQuantity(item.id, Math.max(0, item.quantity - 1))
                  }
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    updateQuantity(item.id, Math.min(item.stock, item.quantity + 1))
                  }
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Separator />
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-lg font-medium">Total</span>
          <span className="text-lg font-bold">${total.toFixed(2)}</span>
        </div>
        <Button className="w-full" size="lg" onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    </div>
  );
}