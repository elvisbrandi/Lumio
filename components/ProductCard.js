import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden border border-gray-100"
    >
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
        {product.oldPrice && (
          <span className="absolute top-3 left-3 bg-brand-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            SALE
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-400 uppercase">{product.category}</p>
        <h3 className="font-semibold text-ink mt-1 line-clamp-1">{product.name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-bold text-brand-600">
            ₦{product.price.toLocaleString()}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₦{product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
