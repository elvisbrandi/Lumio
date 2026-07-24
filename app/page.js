import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              Products you'll love,<br /> delivered to your door.
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Curated electronics, fashion, beauty and home essentials —
              picked for quality, priced for you.
            </p>
            <Link
              href="/shop"
              className="inline-block mt-6 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-full transition"
            >
              Shop Now
            </Link>
          </div>
          <div className="flex-1">
            <Image
              src="https://picsum.photos/seed/hero/700/500"
              alt="Featured products"
              width={700}
              height={500}
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          ["🚚", "Fast Delivery"],
          ["🔒", "Secure Payment"],
          ["↩️", "Easy Returns"],
          ["💬", "24/7 Support"],
        ].map(([icon, label]) => (
          <div key={label} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-3xl">{icon}</div>
            <p className="font-medium mt-2 text-sm">{label}</p>
          </div>
        ))}
      </section>

      {/* Featured products */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link href="/shop" className="text-brand-600 font-medium">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-ink text-white py-14 mt-10">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold">Get 10% off your first order</h2>
          <p className="text-gray-300 mt-2">
            Join our mailing list for deals, new arrivals, and updates.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-full text-ink w-full sm:w-80"
            />
            <button className="bg-brand-600 hover:bg-brand-700 px-6 py-3 rounded-full font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
