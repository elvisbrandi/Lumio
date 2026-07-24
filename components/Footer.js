import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-3">Lumio</h3>
          <p className="text-sm">
            Thoughtfully picked products, delivered to your door. Quality you
            can trust, prices you'll love.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Customer Care</h4>
          <p className="text-sm">📧 support@lumiostore.com</p>
          <p className="text-sm">📞 +234 800 000 0000</p>
        </div>
      </div>
      <div className="text-center text-xs py-4 border-t border-gray-700">
        © {new Date().getFullYear()} Lumio. All rights reserved.
      </div>
    </footer>
  );
}
