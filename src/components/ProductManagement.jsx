import React, { useState } from "react";

const ProductManagement = () => {

  const [search, setSearch] = useState("");

  const products = [
    { name: "Men T-Shirt", merchant: "Ravi Traders", category: "Clothing", price: "₹799", status: "Pending" },
    { name: "Bluetooth Headphones", merchant: "SoundX", category: "Electronics", price: "₹2,499", status: "Approved" },
    { name: "Sports Shoes", merchant: "Footwear Hub", category: "Footwear", price: "₹1,899", status: "Rejected" },
    { name: "Smart Watch", merchant: "TechZone", category: "Electronics", price: "₹5,999", status: "Pending" },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const statusStyle = (status) => {
    if (status === "Approved") return "bg-green-200 text-green-700";
    if (status === "Rejected") return "bg-red-200 text-red-700";
    return "bg-yellow-200 text-yellow-700";
  };

  return (
    <div className="flex-1 p-4 md:p-8 bg-gray-100 min-h-screen">

      <div className="flex items-center gap-3 mb-6">
        <button className="text-xl">←</button>
        <h1 className="bg-white px-4 py-2 rounded-lg shadow font-semibold">
          Product Management
        </h1>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold">127</h2>
          <p className="text-gray-500">Pending</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold">1,247</h2>
          <p className="text-gray-500">Approved</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold">23</h2>
          <p className="text-gray-500">Rejected</p>
        </div>

      </div>

      <div className="bg-white rounded-xl shadow p-4 md:p-6">

        <div className="flex flex-col sm:flex-row gap-3 mb-6">

          <input
            type="text"
            placeholder="Search products..."
            className="border px-3 py-2 rounded w-full sm:w-72"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select className="border rounded px-3 py-2">
            <option>All Status</option>
          </select>

          <select className="border rounded px-3 py-2">
            <option>All Categories</option>
          </select>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="border-b border-gray-200 text-gray-600">
              <tr>
                <th className="py-3 text-left">PRODUCT</th>
                <th className="text-left">MERCHANT</th>
                <th className="text-left">CATEGORY</th>
                <th className="text-left">PRICE</th>
                <th className="text-left">STATUS</th>
                <th className="text-left">ACTIONS</th>
              </tr>
            </thead>

            <tbody>

              {filteredProducts.map((p, i) => (
                <tr key={i} className="border-b border-gray-200">

                  <td className="py-3">{p.name}</td>
                  <td>{p.merchant}</td>
                  <td>{p.category}</td>
                  <td>{p.price}</td>

                  <td>
                    <span className={`px-3 py-1 rounded-full text-xs ${statusStyle(p.status)}`}>
                      {p.status}
                    </span>
                  </td>

                  <td className="flex gap-2 py-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs">
                      Approve
                    </button>

                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs">
                      Reject
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default ProductManagement;