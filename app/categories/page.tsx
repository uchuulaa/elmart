"use client";

import { categories } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-white py-24">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <h1 className="mb-4 text-4xl font-bold">Shop by Category</h1>
          <p className="text-lg text-muted-foreground">
            Explore our wide range of product categories
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/categories/${category.id}`}
                className="group relative block overflow-hidden rounded-lg transition-transform hover:-translate-y-1"
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}