import React, { useState } from "react";

const ProductManagement = () => {

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const products = [
    { name: "Men T-Shirt", merchant: "Ravi Traders", category: "Clothing", price: "₹799", status: "Pending" },
    { name: "Bluetooth Headphones", merchant: "SoundX", category: "Electronics", price: "₹2,499", status: "Approved" },
    { name: "Sports Shoes", merchant: "Footwear Hub", category: "Footwear", price: "₹1,899", status: "Rejected" },
    { name: "Smart Watch", merchant: "TechZone", category: "Electronics", price: "₹5,999", status: "Pending" },
  ];

  
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (statusFilter === "All" || p.status === statusFilter) &&
    (categoryFilter === "All" || p.category === categoryFilter)
  );

  
  const statusStyle = (status) => {
    if (status === "Approved") return "bg-green-200 text-green-700";
    if (status === "Rejected") return "bg-red-200 text-red-700";
    return "bg-yellow-200 text-yellow-700";
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full flex flex-col gap-4 sm:gap-5 md:gap-6 p-3 sm:p-4 md:p-6">

    
      <h1 className="font-medium text-lg sm:text-xl md:text-2xl">
        Product Management
      </h1>

    
      <div className="flex flex-col sm:flex-row gap-3">

        <input
          type="text"
          placeholder="Search by product name"
          className="border rounded-xl p-2 sm:p-3 text-sm w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-xl p-2 sm:p-3 text-sm w-full sm:w-auto"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>

        <select
          className="border rounded-xl p-2 sm:p-3 text-sm w-full sm:w-auto"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option>All</option>
          <option>Clothing</option>
          <option>Electronics</option>
          <option>Footwear</option>
        </select>

      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

        <div className="shadow-md bg-white p-3 sm:p-4 rounded-xl text-center">
          <h1 className="font-medium text-lg sm:text-xl">127</h1>
          <p className="text-sm text-gray-500">Pending</p>
        </div>

        <div className="shadow-md bg-white p-3 sm:p-4 rounded-xl text-center">
          <h1 className="font-medium text-lg sm:text-xl">1,247</h1>
          <p className="text-sm text-gray-500">Approved</p>
        </div>

        <div className="shadow-md bg-white p-3 sm:p-4 rounded-xl text-center">
          <h1 className="font-medium text-lg sm:text-xl">23</h1>
          <p className="text-sm text-gray-500">Rejected</p>
        </div>

      </div>

    
      <div className="hidden md:block overflow-x-auto">
        <table className="shadow-md bg-white w-full rounded-lg text-sm">

          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Merchant</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((p, i) => (
              <tr key={i} className="border-t">

                <td className="p-3">{p.name}</td>
                <td className="p-3">{p.merchant}</td>
                <td className="p-3">{p.category}</td>
                <td className="p-3">{p.price}</td>

                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-xs ${statusStyle(p.status)}`}>
                    {p.status}
                  </span>
                </td>

                <td className="p-3">
                  <div className="flex gap-2 flex-wrap">
                    <button className="px-2 py-1 bg-green-700 text-white rounded hover:bg-green-800 text-xs">
                      Approve
                    </button>
                    <button className="px-2 py-1 bg-red-700 text-white rounded hover:bg-red-800 text-xs">
                      Reject
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

     
      <div className="md:hidden flex flex-col gap-4">
        {filteredProducts.map((p, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl p-3 flex flex-col gap-2">

            <h2 className="font-medium text-sm">{p.name}</h2>

            <p className="text-xs text-gray-600">{p.merchant}</p>

            <p className="text-xs text-gray-500">{p.category}</p>

            <p className="text-sm font-medium">{p.price}</p>

            <span className={`w-fit px-2 py-1 rounded-full text-xs ${statusStyle(p.status)}`}>
              {p.status}
            </span>

            <div className="flex flex-wrap gap-2 mt-2">
              <button className="text-xs px-2 py-1 bg-green-700 text-white rounded">
                Approve
              </button>
              <button className="text-xs px-2 py-1 bg-red-700 text-white rounded">
                Reject
              </button>
            </div>

          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center sm:justify-end gap-2">
        <button className="border p-1 rounded w-16">Prev</button>
        <button className="border p-1 rounded w-16 bg-black text-white">1</button>
        <button className="border p-1 rounded w-16">2</button>
        <button className="border p-1 rounded w-16">3</button>
        <button className="border p-1 rounded w-16">Next</button>
      </div>

    </div>
  );
};

export default ProductManagement;