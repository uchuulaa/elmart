import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/ui/product-card";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { showErrorToast } from "@/components/ui/error-toast";

// Generate static paths for each category
export async function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find((c) => c.id === params.id);
  const categoryProducts = products.filter((p) => p.category === params.id);

  if (!category) {
    showErrorToast("Category not found. Redirecting to categories page...");
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative bg-black py-24 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${category.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Button
            variant="ghost"
            asChild
            className="mb-8 text-white hover:text-white/80"
          >
            <Link href="/categories">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Categories
            </Link>
          </Button>
          <h1 className="mb-4 text-4xl font-bold">{category.name}</h1>
          <p className="text-lg opacity-90">{category.description}</p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {categoryProducts.length === 0 && (
          <div className="flex min-h-[400px] items-center justify-center">
            <p className="text-center text-lg text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
