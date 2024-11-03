import { products } from "@/lib/data";
import { ProductCard } from "@/components/ui/product-card";
import { ProductSearch } from "@/components/ui/product-search";
import { useState } from "react";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-white py-24">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="mb-4 text-4xl font-bold">Our Products</h1>
          <p className="text-lg text-muted-foreground">
            Discover our curated collection of premium products
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-8">
        <ProductSearch products={products} />
      </div>
    </div>
  );
}