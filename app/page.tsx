import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import { categories, products } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-black">
        <div
          className="absolute inset-0 z-0 opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Discover Premium Products
          </h1>
          <p className="mb-8 text-xl">
            Explore our curated collection of high-quality items
          </p>
          <Button asChild size="lg" className="font-semibold">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Button variant="ghost" asChild>
            <Link href="/products" className="group flex items-center gap-2">
              View All
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl font-bold">Shop by Category</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-4 text-center text-white transition-opacity group-hover:bg-black/50">
                  <div>
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                    <p className="mt-2">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}