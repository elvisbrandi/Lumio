"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Shop() {
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Shop All Products</h1>
      <p className="text-gray-500 mb-6">
        {filtered.length} product{filtered.length !== 1 && "s"} available
      </p>

      <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
              active === c
                ? "bg-brand-600 text-white"
                : "bg-white border border-gray-200 text-gray-600"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
