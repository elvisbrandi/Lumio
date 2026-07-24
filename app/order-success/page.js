"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function OrderSuccess() {
  const params = useSearchParams();
  const reference = params.get("reference");
  const { clearCart } = useCart();
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    if (!reference) return;
    fetch(`/api/paystack/verify?reference=${reference}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.status && data.data?.status === "success") {
          setStatus("success");
          clearCart();
        } else {
          setStatus("failed");
        }
      })
      .catch(() => setStatus("failed"));
  }, [reference]);

  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      {status === "checking" && <p>Confirming your payment...</p>}
      {status === "success" && (
        <>
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-gray-500 mb-6">
            Thank you for shopping with Lumio. A confirmation has been sent to your email.
          </p>
          <Link href="/shop" className="bg-brand-600 text-white px-6 py-3 rounded-full font-semibold">
            Continue Shopping
          </Link>
        </>
      )}
      {status === "failed" && (
        <>
          <h1 className="text-2xl font-bold mb-2">Payment Not Confirmed</h1>
          <p className="text-gray-500 mb-6">
            We couldn't confirm this payment. If money was deducted, contact support.
          </p>
          <Link href="/cart" className="bg-brand-600 text-white px-6 py-3 rounded-full font-semibold">
            Back to Cart
          </Link>
        </>
      )}
    </div>
  );
}
