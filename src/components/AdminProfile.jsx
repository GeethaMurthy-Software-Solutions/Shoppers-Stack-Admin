import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";


const AdminProfile = () => {
  return (
    <>
      <div className=' text-center'>
        <div className='mx-auto flex items-center justify-center rounded-full h-14 w-14 bg-gray-200'> 
          <FaUser className='h-5 w-5' />
        </div>
      </div>
      
      <div className='pt-2 text-center'>
        <h4>Admin Profile</h4>
        <p className='font-stretch-5% pb-7 text-gray-500 text-[0.4rem]'>Account Overview</p>
      </div>

      <hr  className='h-0.5rem text-0.4rem text-gray-200 pb-1 '/>

      <div className='p-6 '>
          <div className='flex bg-gray-100 h-13 rounded-[0.55rem] border p-2 space-x-35 items-center border-gray-200'>
              <div>
                <p className=' text-gray-500 text-[0.5rem]'>FULL NAME</p>
                <p className='text-[0.6rem] font-semibold'>John Administrator</p>
              </div>
              <FaCircleUser />
          </div>

          <div className='flex bg-gray-100 h-13 rounded-[0.55rem] p-2 items-center space-x-30.5 border border-gray-200'>
             <div>
               <p className=' text-gray-500 text-[0.5rem]'>EMAIL ADDRESS</p>
                <p className=' text-[0.6rem] font-semibold'>admin@overmode.com</p>
             </div>
                <TbMailFilled />

          </div>

          <div className='flex justify-center space-x-28 items-center bg-gray-100 h-13 rounded-[0.55rem] border border-gray-200'>
              <p className=' text-gray-500  text-[0.5rem]'>ACCOUNT ROLE</p>
              <button className='border  border-gray-300 bg-gray-50 h-6 w-16 rounded-full text-[0.6rem]'>ADMIN</button>
          </div>
      </div>


    </>
  )
}

export default AdminProfile
