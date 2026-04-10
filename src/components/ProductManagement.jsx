import React, { useState } from "react";

const ProductManagement = () => {

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: "Men Solid Cotton T-Shirt",
      merchant: "Fashion Store",
      brand: "URBAN WEAR",
      category: "Clothing",
      subCategory: "T-shirts",
      gender: "Men",
      price: "₹999",
      discount: "20%",
      quantity: 120,
      size: ["S", "M", "L", "XL"],
      description: "Premium quality cotton T-shirt with breathable fabric. Ideal for casual wear and daily use.",
      status: "Pending",
      mainImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=100&q=80"
      ]
    },
    {
      name: "Bluetooth Headphones",
      merchant: "SoundX",
      brand: "SONIC",
      category: "Electronics",
      price: "₹2,499",
      discount: "15%",
      status: "Approved",
      mainImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=100&q=80"
      ]
    },
    {
      name: "Sports Shoes",
      merchant: "Footwear Hub",
      brand: "RUNNER",
      category: "Footwear",
      price: "₹1,899",
      discount: "10%",
      status: "Rejected",
      mainImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=100&q=80"
      ]
    },
    {
      name: "Smart Watch",
      merchant: "TechZone",
      category: "Electronics",
      price: "₹5,999",
      discount: "5%",
      status: "Pending",
      mainImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=100&q=80"
      ]
    },
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
              <tr key={i} className="border-t cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => setSelectedProduct(p)}>

                <td className="p-3">{p.name}</td>
                <td className="p-3">{p.merchant}</td>
                <td className="p-3">{p.category}</td>
                <td className="p-3">{p.price}</td>

                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-xs ${statusStyle(p.status)}`}>
                    {p.status}
                  </span>
                </td>

                <td className="p-3" onClick={(e) => e.stopPropagation()}>
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
          <div key={i} className="bg-white shadow-md rounded-xl p-3 flex flex-col gap-2 cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => setSelectedProduct(p)}>

            <h2 className="font-medium text-sm">{p.name}</h2>

            <p className="text-xs text-gray-600">{p.merchant}</p>

            <p className="text-xs text-gray-500">{p.category}</p>

            <p className="text-sm font-medium">{p.price}</p>

            <span className={`w-fit px-2 py-1 rounded-full text-xs ${statusStyle(p.status)}`}>
              {p.status}
            </span>

            <div className="flex flex-wrap gap-2 mt-2" onClick={(e) => e.stopPropagation()}>
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

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>

            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b">
              <h2 className="font-bold text-lg text-gray-900">Product Review</h2>
              <button onClick={() => setSelectedProduct(null)} className="text-gray-400 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 overflow-y-auto">

              {/* Image Section */}
              <div className="flex-shrink-0 w-full md:w-72 flex flex-col gap-4">
                <div className="w-full h-72 rounded-xl overflow-hidden border border-gray-200">
                  <img src={selectedProduct.mainImage} alt={selectedProduct.name} className="w-full h-full object-cover rounded-xl" />
                </div>
                {selectedProduct.thumbnails && (
                  <div className="flex gap-3">
                    {selectedProduct.thumbnails.map((thumb, idx) => (
                      <div key={idx} className="w-16 h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-gray-900 cursor-pointer bg-gray-100 transition-colors">
                        <img src={thumb} alt={`thumbnail ${idx}`} className="w-full h-full object-cover rounded-lg" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="flex-1 flex flex-col text-sm">
                <div className="mb-6">
                  <h3 className="font-bold text-2xl text-gray-900">{selectedProduct.name}</h3>
                  {selectedProduct.brand && <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">{selectedProduct.brand}</p>}
                </div>

                <div className="grid grid-cols-2 gap-y-5 gap-x-6 mb-6">
                  <div>
                    <p className="font-bold text-xs text-gray-900 mb-1">Merchant:</p>
                    <p className="text-gray-600 font-medium">{selectedProduct.merchant}</p>
                  </div>
                  <div>
                    <p className="font-bold text-xs text-gray-900 mb-1">Category:</p>
                    <p className="text-gray-600 font-medium">{selectedProduct.category}</p>
                  </div>
                  {selectedProduct.subCategory && (
                    <div>
                      <p className="font-bold text-xs text-gray-900 mb-1">Sub-Category:</p>
                      <p className="text-gray-600 font-medium">{selectedProduct.subCategory}</p>
                    </div>
                  )}
                  {selectedProduct.gender && (
                    <div>
                      <p className="font-bold text-xs text-gray-900 mb-1">Gender:</p>
                      <p className="text-gray-600 font-medium">{selectedProduct.gender}</p>
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-xs text-gray-900 mb-1">Price:</p>
                    <p className="text-gray-600 font-medium">{selectedProduct.price}</p>
                  </div>
                  {selectedProduct.discount && (
                    <div>
                      <p className="font-bold text-xs text-gray-900 mb-1">Discount:</p>
                      <p className="text-gray-600 font-medium">{selectedProduct.discount}</p>
                    </div>
                  )}
                  {selectedProduct.quantity !== undefined && (
                    <div>
                      <p className="font-bold text-xs text-gray-900 mb-1">Quantity:</p>
                      <p className="text-gray-600 font-medium">{selectedProduct.quantity}</p>
                    </div>
                  )}
                  {selectedProduct.size && (
                    <div>
                      <p className="font-bold text-xs text-gray-900 mb-1">Size:</p>
                      <p className="text-gray-600 font-medium">{Array.isArray(selectedProduct.size) ? selectedProduct.size.join(", ") : selectedProduct.size}</p>
                    </div>
                  )}
                </div>

                {selectedProduct.description && (
                  <p className="text-xs text-gray-500 leading-relaxed mb-6 font-medium">{selectedProduct.description}</p>
                )}

                <div className="mt-auto">
                  <span className="inline-block text-[10px] font-bold px-3 py-1.5 bg-gray-50 text-gray-600 border border-gray-200 rounded uppercase tracking-wider">
                    {selectedProduct.status === 'Pending' ? 'PENDING REVIEW' : selectedProduct.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions / Footer */}
            <div className="flex justify-end gap-3 p-5 md:px-8 bg-white" style={{ boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
              <button onClick={() => setSelectedProduct(null)} className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                Reject
              </button>
              <button onClick={() => setSelectedProduct(null)} className="px-6 py-2 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
                Approve
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ProductManagement;