import React from 'react'
import { Link } from 'react-router-dom';

const CouponManagement = () => {
    const coupons = [
  {
    couponCode: "DIWALI25",
    couponTitle: "Diwali Special",
    category: "GENERAL",
    discount: 250,
    minOrderValue: 2000,
    validityPeriod: "15 Oct 2025 - 05 Nov 2025",
    totalUsages: 210,
    status: "Active",
    statusBool:true,
  },
  {
    couponCode: "FIRST100",
    couponTitle: "First Order Offer",
    category: "FIRST_ORDER",
    discount: 100,
    minOrderValue: 999,
    validityPeriod: "01 Jan 2025 - 31 Dec 2025",
    totalUsages: 1340,
    status: "Active",
    statusBool:true,
  },
  {
    couponCode: "NEWYEAR500",
    couponTitle: "New Year Sale",
    category: "GENERAL",
    discount: 500,
    minOrderValue: 5000,
    validityPeriod: "25 Dec 2024 - 05 Jan 2025",
    totalUsages: 890,
    status: "Expired",
    statusBool:false,
  },
  {
    couponCode: "LOYAL200",
    couponTitle: "Loyal Customer Reward",
    category: "LOYALTY",
    discount: 200,
    minOrderValue: 3000,
    validityPeriod: "01 Apr 2025 - 30 Sep 2025",
    totalUsages: 456,
    status: "Active",
    statusBool:true,
  },
  {
    couponCode: "INDEPENDENCE150",
    couponTitle: "Independence Day Offer",
    category: "GENERAL",
    discount: 150,
    minOrderValue: 1500,
    validityPeriod: "10 Aug 2025 - 20 Aug 2025",
    totalUsages: 312,
    status: "Active",
    statusBool:true,
  },
  {
    couponCode: "FESTIVE400",
    couponTitle: "Festive Season Sale",
    category: "GENERAL",
    discount: 400,
    minOrderValue: 4000,
    validityPeriod: "01 Sep 2025 - 31 Oct 2025",
    totalUsages: 742,
    status: "Active",
    statusBool:true,
  },
  {
    couponCode: "LOYAL500",
    couponTitle: "Premium Loyalty Offer",
    category: "LOYALTY",
    discount: 500,
    minOrderValue: 6000,
    validityPeriod: "01 Jan 2025 - 31 Mar 2025",
    totalUsages: 128,
    status: "Expired",
    statusBool:false,
  },
];
  return (
    <div className='bg-gray-100 min-h-screen w-full flex flex-col gap-4 sm:gap-5 md:gap-6 p-3 sm:p-4 md:p-6'>

    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3'>
        <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>
            Coupon Management
        </h1>

        <Link to='/landingpage/addcoupon'>
        <button className='border px-3 py-2 rounded-xl bg-black text-white font-medium w-full sm:w-auto'>
            Add Coupon
        </button></Link>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5'>
        <div className='shadow-md bg-white p-3 sm:p-4 rounded-xl'>
            <h3 className='text-sm sm:text-base'>Total Coupons</h3>
            <h1 className='font-medium text-lg sm:text-xl'>18</h1>
        </div>

        <div className='shadow-md bg-white p-3 sm:p-4 rounded-xl'>
            <h3 className='text-sm sm:text-base'>Active Coupons</h3>
            <h1 className='font-medium text-lg sm:text-xl'>11</h1>
        </div>

        <div className='shadow-md bg-white p-3 sm:p-4 rounded-xl'>
            <h3 className='text-sm sm:text-base'>Expired Coupons</h3>
            <h1 className='font-medium text-lg sm:text-xl'>7</h1>
        </div>
    </div>

    <input
        placeholder='Search by Coupon code or Title'
        className='border rounded-xl p-2 sm:p-3 text-sm w-full sm:w-80'
        type="text"
    />

    {/* Desktop Table */}
    <div className='hidden md:block overflow-x-auto'>
        <table className='shadow-md bg-white w-full rounded-lg'>
            <thead>
                <tr className='font-light text-sm text-gray-400'>
                    <th className="p-2 text-left">Coupon Code</th>
                    <th className="p-2 text-left">Coupon Title</th>
                    <th className="p-2 text-left">Category</th>
                    <th className="p-2 text-left">Discount</th>
                    <th className="p-2 text-left">Min Order Value</th>
                    <th className="p-2 text-left">Validity Period</th>
                    <th className="p-2 text-left">Total Usages</th>
                    <th className="p-2 text-left">Status</th>
                </tr>
            </thead>

            <tbody>
                {
                    coupons.map(({couponCode,couponTitle,category,discount,minOrderValue,validityPeriod,totalUsages,status,statusBool}) => (
                        <tr key={couponCode} className='border-t border-gray-200 text-sm text-gray-700'>
                            <td className="p-2">{couponCode}</td>
                            <td className="p-2">{couponTitle}</td>
                            <td className="p-2">{category}</td>
                            <td className="p-2">{discount}</td>
                            <td className="p-2">{minOrderValue}</td>
                            <td className="p-2">{validityPeriod}</td>
                            <td className="p-2">{totalUsages}</td>
                            <td>
                                <button className={`p-1 text-xs ${statusBool ? 'text-green-600 bg-gray-200 font-bold rounded-xl' : 'text-red-500  bg-gray-200 font-bold rounded-xl'}`}>{status}</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>

    {/* Mobile Cards */}
    <div className='md:hidden flex flex-col gap-4 text-gray-700'>
        {
            coupons.map(({couponCode,couponTitle,category,discount,minOrderValue,validityPeriod,totalUsages,status,statusBool}) => (
                <div key={couponCode} className='bg-white shadow-md rounded-xl p-3 flex flex-col gap-2'>

                    <h2 className='font-medium text-sm'>{couponCode}</h2>

                    <p className='text-xs text-gray-600'>{couponTitle}</p>

                    <p className='text-xs'>{category}</p>

                    <p className='text-xs font-medium'>{discount}</p>

                    <p className='text-xs text-gray-500'>Min: {minOrderValue}</p>

                    <p className='text-xs text-gray-500'>{validityPeriod}</p>

                    <p className='text-xs text-gray-500'>Used: {totalUsages}</p>

                    <p className={`p-1 text-xs ${statusBool ? 'text-green-600 bg-gray-200 font-bold rounded-xl w-12' : 'text-red-500  bg-gray-200 font-bold rounded-xl w-13'}`}>
                        {status}
                    </p>

                </div>
            ))
        }
    </div>

</div>
  )
}

export default CouponManagement
