import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { tr } from 'framer-motion/client'

const MerchentManagement = () => {
    const details=[
        {
            name:'Nagesh Sharma',
            company:'Nagesh Traders',
            email:'Nag@sharma',
            status:'Pending',
            registration:'10-Feb-2025',
            Action1:"Approve",
            Action2:'Reject',
            Action3:"Suspend",
            style:'border rounded-xl p-1 text-xs text-yellow-700 bg-yellow-300'
        },
        {
            name:'Shreya Verma',
            company:'Verma Fashions',
            email:'Shreya@verma.com',
            status:'Approved',
            registration:'05 Jan 2025',
            Action1:"Approve",
            Action2:'Reject',
            Action3:"Suspend",
            style:'border rounded-xl p-1 text-xs text-green-700 bg-green-300'
        },
        {
            name:'Pranav Singh',
            company:'Singh Electronics',
            email:'pranav@singh.com',
            status:'Suspended',
            registration:'18 Dec 2024',
            Action1:"Approve",
            Action2:'Reject',
            Action3:"Suspend",
            style:'border rounded-xl p-1 text-xs text-red-700 bg-red-300'
        },
        {
            name:'Karthik Reddy',
            company:'Reddy Mobiles',
            email:'karthik@reddy.com',
            status:'Suspended',
            registration:'03 Jan 2025',
            Action1:"Approve",
            Action2:'Reject',
            Action3:"Suspend",
            style:'border rounded-xl p-1 text-xs text-red-700 bg-red-300'
        },
        {
            name:'Meera Joshi',
            company:'Joshi Home Decor',
            email:'meera@joshi.com',
            status:'Suspended',
            registration:'27 Nov 2024',
            Action1:"Approve",
            Action2:'Reject',
            Action3:"Suspend",
            style:'border rounded-xl p-1 text-xs text-red-700 bg-red-300'

        }
    ]
  return (
    <div className='bg-gray-100 min-h-screen w-full flex flex-col gap-4 sm:gap-5 md:gap-6 p-3 sm:p-4 md:p-6'>

    <h1 className='font-medium text-lg sm:text-xl md:text-2xl'>
        Merchant Management
    </h1>

    <div className='flex flex-col sm:flex-row gap-3'>
        <input
            placeholder='Search by merchant or email'
            className='border rounded-xl p-2 sm:p-3 text-sm w-full'
            type="text"
        />

        <button className='w-full sm:w-40 md:w-48 lg:w-52 text-center sm:text-left text-sm sm:text-base font-medium p-2 sm:p-3 rounded-xl border bg-gray-200'>
            All Status
        </button>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5'>
        <div className='shadow-md bg-white p-3 sm:p-4 rounded-xl'>
            <h3 className='text-sm sm:text-base'>Pending Merchants</h3>
            <h1 className='font-medium text-lg sm:text-xl'>14</h1>
        </div>

        <div className='shadow-md bg-white p-3 sm:p-4 rounded-xl'>
            <h3 className='text-sm sm:text-base'>Approved Merchants</h3>
            <h1 className='font-medium text-lg sm:text-xl'>96</h1>
        </div>

        <div className='shadow-md bg-white p-3 sm:p-4 rounded-xl'>
            <h3 className='text-sm sm:text-base'>Suspended Merchants</h3>
            <h1 className='font-medium text-lg sm:text-xl'>8</h1>
        </div>
    </div>

    {/* Desktop Table */}
    <div className='hidden md:block overflow-x-auto'>
        <table className='shadow-md bg-white w-full rounded-lg'>
            <thead>
                <tr className='bg-gray-200 text-sm'>
                    <th className="p-2 text-left">Merchant Name</th>
                    <th className="p-2 text-left">Company Name</th>
                    <th className="p-2 text-left">Email</th>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-left">Registration Date</th>
                    <th className="p-2 text-left">Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    details.map(({name,company,email,status,registration,Action1,Action2,Action3,style}) => (
                        <tr key={name} className='border-t text-sm'>
                            <td className="p-2">{name}</td>
                            <td className="p-2">{company}</td>
                            <td className="p-2">{email}</td>
                            <td className="p-2">
                                <button className={style}>{status}</button>
                            </td>
                            <td className="p-2">{registration}</td>
                            <td className="p-2">
                                <div className="flex gap-2 flex-wrap">
                                    <button className="px-2 py-1 bg-green-800 text-white rounded hover:bg-green-900">
                                        {Action1}
                                    </button>
                                    <button className="px-2 py-1 bg-red-700 text-white rounded hover:bg-red-800">
                                        {Action2}
                                    </button>
                                    <button className="px-2 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700">
                                        {Action3}
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>

    {/* Mobile Cards */}
    <div className='md:hidden flex flex-col gap-4'>
        {
            details.map(({name,company,email,status,registration,Action1,Action2,Action3,style}) => (
                <div key={name} className='bg-white shadow-md rounded-xl p-3 flex flex-col gap-2'>

                    <h2 className='font-medium text-sm'>{name}</h2>

                    <p className='text-xs text-gray-600'>{company}</p>

                    <p className='text-xs'>{email}</p>

                    <div>
                        <button className={style}>{status}</button>
                    </div>

                    <p className='text-xs text-gray-500'>{registration}</p>

                    <div className="flex flex-wrap gap-2 mt-2">
                        <button className="text-xs px-2 py-1 bg-green-800 text-white rounded hover:bg-green-900">
                            {Action1}
                        </button>
                        <button className="text-xs px-2 py-1 bg-red-700 text-white rounded hover:bg-red-800">
                            {Action2}
                        </button>
                        <button className="text-xs px-2 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700">
                            {Action3}
                        </button>
                    </div>

                </div>
            ))
        }
    </div>

    <div className='flex flex-wrap justify-center sm:justify-end gap-2'>
        <button className="border p-1 rounded w-12 sm:w-16 md:w-20">Prev</button>
        <button className="border p-1 rounded w-12 sm:w-16 md:w-20 bg-black text-white">1</button>
        <button className="border p-1 rounded w-12 sm:w-16 md:w-20">2</button>
        <button className="border p-1 rounded w-12 sm:w-16 md:w-20">3</button>
        <button className="border p-1 rounded w-12 sm:w-16 md:w-20">Next</button>
    </div>

</div>
    
  )
}

export default MerchentManagement
