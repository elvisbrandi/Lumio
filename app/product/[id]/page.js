"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return <div className="max-w-3xl mx-auto px-4 py-20 text-center">Product not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>

      <div>
        <p className="text-sm text-brand-600 font-medium uppercase">{product.category}</p>
        <h1 className="text-3xl font-bold mt-1">{product.name}</h1>
        <div className="flex items-center gap-3 mt-3">
          <span className="text-2xl font-bold text-ink">
            ₦{product.price.toLocaleString()}
          </span>
          {product.oldPrice && (
            <span className="text-lg text-gray-400 line-through">
              ₦{product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>
        <p className="text-yellow-500 mt-2">⭐ {product.rating} / 5</p>
        <p className="text-gray-600 mt-4 leading-relaxed">{product.description}</p>

        <div className="flex items-center gap-4 mt-6">
          <div className="flex items-center border rounded-full overflow-hidden">
            <button className="px-4 py-2" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
            <span className="px-4">{qty}</span>
            <button className="px-4 py-2" onClick={() => setQty(qty + 1)}>+</button>
          </div>
          <button
            onClick={() => {
              addToCart(product, qty);
              setAdded(true);
            }}
            className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-full transition"
          >
            Add to Cart
          </button>
        </div>

        {added && (
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => router.push("/cart")}
              className="text-brand-600 font-medium underline"
            >
              Go to Cart →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
