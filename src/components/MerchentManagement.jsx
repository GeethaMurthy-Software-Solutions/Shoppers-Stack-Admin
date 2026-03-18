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
    <div className='bg-gray-100 min-h-screen w-full flex flex-col gap-4 sm:gap-5 md:gap-6'>
        <h1 className='font-medium'>Merchent Management</h1>
       <div className='flex gap-3'>
        <input placeholder='search by merchent or email' className='border rounded-xl p-2 sm:p-3 placeholder:text-sm' type="text" name="" id="" /> 
        <button className='w-full sm:w-40 md:w-48 lg:w-52 text-left text-sm sm:text-base font-medium p-2 sm:p-3 rounded-xl border bg-gray-200'>All status</button>
        </div> 
        <div className='grid grid-cols-1 gap-5 sm:grid-col-1 lg:grid-cols-3  '>
            <div className='shadow-md bg-white p-2 sm:p-3 md:p-4 rounded-xl'>
                <h3>Pending Merchents</h3>
                <h1 className='font-medium'>14</h1>
            </div>
            <div className='shadow-md bg-white p-2 sm:p-3 md:p-4 rounded-xl'>
                <h3>Approved Merchents</h3>
                <h1 className='font-medium'>96</h1>
            </div>
            <div className='shadow-md bg-white p-2 sm:p-3 md:p-4 rounded-xl'>
                <h3>Suspended Merchents</h3>
                <h1 className='font-medium'>8</h1>
            </div>
        </div>
        <table className='shadow-md bg-white w-full p-3 sm:p-4 rounded-lg'>
            <thead className=''>
                <tr className='shadow'>
                    <th className="p-2 text-left sm:p-1">Merchent Name</th>
                    <th className="p-2 text-left sm:p-1">Company Name</th>
                    <th className="p-2 text-left sm:p-1">Email</th>
                    <th className="p-2 text-left sm:p-1">Status</th>
                    <th className="p-2 text-left sm:p-1">Registration Date</th>
                    <th className="p-2 text-left sm:p-1">Action</th>
                </tr>
            </thead>
            <tbody className="">
                {
                    details.map(({name,company,email,status,registration,Action1,Action2,Action3,style})=>{
                        return(
                            <tr key={name} className='shadow'>
                                <td className="p-2 text-left sm:p-1">{name}</td>
                                <td className="p-2 text-left sm:p-1">{company}</td>
                                <td className="p-2 text-left sm:p-1">{email}</td>
                                <td className="p-2 text-left sm:p-1"><button className={style}>{status}</button></td>
                                <td className="p-2 text-left sm:p-1">{registration}</td>
                                <td className="p-2 text-left sm:p-1">
                                    <div className="flex flex-wrap gap-2">
                                        <button className="border text-xs sm:text-sm rounded px-2 py-1 bg-green-800 text-white font-medium hover:bg-green-900 transition">
                                            {Action1}
                                        </button>

                                        <button className="border text-xs sm:text-sm rounded px-2 py-1 bg-red-700 text-white font-medium hover:bg-red-800 transition">
                                            {Action2}
                                        </button>

                                        <button className="border text-xs sm:text-sm rounded px-2 py-1 bg-yellow-600 text-white font-medium hover:bg-yellow-700 transition">
                                            {Action3}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
        <div className='flex justify-end gap-2 sm:gap-1'>
                        <button className="border p-1 rounded w-12 sm:w-16 md:w-20 lg:w-24">Prev</button>
                        <button className="border p-1 rounded w-12 sm:w-16 md:w-20 lg:w-24 bg-black text-white">1</button>
                        <button className="border p-1 rounded w-12 sm:w-16 md:w-20 lg:w-24">2</button>
                        <button className="border p-1 rounded w-12 sm:w-16 md:w-20 lg:w-24">3</button>
                        <button className="border p-1 rounded w-12 sm:w-16 md:w-20 lg:w-24">Next</button>
                </div>
    </div>
    
  )
}

export default MerchentManagement
