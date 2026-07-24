"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
        <Link href="/shop" className="bg-brand-600 text-white px-6 py-3 rounded-full font-semibold">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
              <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-brand-600 font-bold">₦{item.price.toLocaleString()}</p>
            </div>
            <div className="flex items-center border rounded-full overflow-hidden">
              <button className="px-3 py-1" onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
              <span className="px-3">{item.qty}</span>
              <button className="px-3 py-1" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm ml-2">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center">
        <span className="text-lg font-semibold">Total: ₦{totalPrice.toLocaleString()}</span>
        <Link
          href="/checkout"
          className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-full transition"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
