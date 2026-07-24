"use client";

import { useState } from "react";

export default function Admin() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    oldPrice: "",
    image: "",
    category: "",
    rating: "4.5",
    description: "",
  });
  const [snippet, setSnippet] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const generate = (e) => {
    e.preventDefault();
    const id = Date.now().toString();
    const code = `  {
    id: "${id}",
    name: "${form.name}",
    price: ${Number(form.price) || 0},
    oldPrice: ${form.oldPrice ? Number(form.oldPrice) : "null"},
    image: "${form.image || "https://picsum.photos/seed/" + id + "/600/600"}",
    category: "${form.category}",
    rating: ${form.rating},
    description: "${form.description}",
  },`;
    setSnippet(code);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Add a Product</h1>
      <p className="text-gray-500 mb-6">
        Fill this out, then copy the generated code into <code>data/products.js</code>.
      </p>
      <form onSubmit={generate} className="space-y-4 bg-white p-6 rounded-2xl shadow-sm">
        <input name="name" placeholder="Product Name" onChange={handleChange} className="w-full border rounded-xl px-4 py-3" />
        <input name="price" type="number" placeholder="Price (₦)" onChange={handleChange} className="w-full border rounded-xl px-4 py-3" />
        <input name="oldPrice" type="number" placeholder="Old Price (optional)" onChange={handleChange} className="w-full border rounded-xl px-4 py-3" />
        <input name="image" placeholder="Image URL" onChange={handleChange} className="w-full border rounded-xl px-4 py-3" />
        <input name="category" placeholder="Category" onChange={handleChange} className="w-full border rounded-xl px-4 py-3" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full border rounded-xl px-4 py-3" rows={3} />
        <button className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-full transition">
          Generate Code
        </button>
      </form>

      {snippet && (
        <div className="mt-6">
          <h2 className="font-semibold mb-2">Copy this into data/products.js:</h2>
          <pre className="bg-ink text-green-300 text-sm p-4 rounded-xl overflow-x-auto whitespace-pre-wrap">
            {snippet}
          </pre>
        </div>
      )}
    </div>
  );
}
