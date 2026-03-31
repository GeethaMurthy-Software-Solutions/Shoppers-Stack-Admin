import { div } from 'framer-motion/client'
import React from 'react'

const AddCoupon = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='bg-gray-100 min-h-screen flex justify-center items-start p-3 sm:p-5 md:p-8'>
    <div className='w-full max-w-2xl flex flex-col gap-4'>
        <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>Add Coupon</h1>
        <form className='bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
                <label className='text-sm'>Coupon Title</label>
                <input className='border border-gray-300 w-full rounded-lg p-2 sm:p-3 mt-1 text-sm' type="text"/>
            </div>
            <div>
                <label className='text-sm'>Coupon Description</label>
                <textarea className='border border-gray-300 w-full rounded-lg p-2 sm:p-3 mt-1 text-sm'ws={3}/>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                    <label className='text-sm'>Coupon Category</label>
                    <input placeholder='Select Category'className='border border-gray-300 w-full rounded-lg p-2 sm:p-3 mt-1 text-sm'type="text"/>
                </div>

                <div>
                    <label className='text-sm'>Discount Amount (₹)</label>
                    <input className='border border-gray-300 w-full rounded-lg p-2 sm:p-3 mt-1 text-sm'type="text"/>
                </div>
                <div>
                    <label className='text-sm'>Minimum Order Amount (₹)</label>
                    <input className='border border-gray-300 w-full rounded-lg p-2 sm:p-3 mt-1 text-sm'type="text"/>
                </div>
                <div>
                    <label className='text-sm'>Max Uses Per User</label>
                    <input defaultValue={1} className='border border-gray-300 w-full rounded-lg p-2 sm:p-3 mt-1 text-sm'type="number"/>
                </div>
                <div>
                    <label className='text-sm'>Start Date</label>
                    <input className='border border-gray-300 w-full rounded-lg p-2 sm:p-3 mt-1 text-sm'type="date"/>
                </div>
                <div>
                    <label className='text-sm'>End Date</label>
                    <input className='border border-gray-300 w-full rounded-lg p-2 sm:p-3 mt-1 text-sm'type="date"/>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-end gap-3 pt-2'>
                <button type="button"className='px-4 py-2 rounded-lg bg-gray-200 text-sm font-medium w-full sm:w-auto'>Cancel</button>
                <button type="submit"className='px-4 py-2 rounded-lg bg-black text-white text-sm font-medium w-full sm:w-auto'>Create Coupon</button>
            </div>
        </form>
    </div>
</div>
  )
} 

export default AddCoupon
