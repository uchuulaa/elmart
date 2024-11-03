import { products } from "@/lib/data";
import { ProductCard } from "@/components/ui/product-card";
import { Star, Truck, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/ui/add-to-cart-button";
import { Button } from "@/components/ui/button";
import { showErrorToast } from "@/components/ui/error-toast";

// Generate static paths for each product
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    showErrorToast("Product not found. Redirecting to products page...");
    return notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-8">
        <Button
          variant="ghost"
          asChild
          className="mb-8 inline-flex items-center gap-2"
        >
          <Link href="/products">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid gap-8 rounded-lg bg-white p-8 shadow-sm lg:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {product.category}
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
            </div>

            <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
            <p className="mb-6 text-lg text-muted-foreground">
              {product.description}
            </p>

            <div className="mb-6">
              <span className="text-3xl font-bold">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <div className="mb-8 space-y-4 border-y py-6">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-sm text-muted-foreground">
                    Free shipping on orders over $100
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Secure Payment</p>
                  <p className="text-sm text-muted-foreground">
                    100% secure payment
                  </p>
                </div>
              </div>
            </div>

            <AddToCartButton product={product} />
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-bold">Related Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
