import React from 'react'
import CustomerCard from './CustomerCard'

const Customers = () => {
  return (
    <div className='w-[556px] h-[400px] rounded-[16px] mt-4 pt-[24px] pr-[0px] pb-[24px] pl-[0px] gap=[16px] bg-[#FFFFFF]'>
        <div className='topbar flex w-full mb-3 h-[24px] justify-between pt-[0px] pr-[24px] pb-[0px] pl-[24px]'>
            <span className='font-[600] text-[20px] leading-[24.2px]'>CUSTOMERS</span>
            <div className='flex'>
                <span className='h-[17px] flex  gap-[4px] font-[500] text-[14px] leading-[16.94px] text-[#454545]'>Sort by Newest </span>
                <svg className='gap-[4px]' width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 5.86163L7 9.36163L10.5 5.86163" stroke="#7D7D7D" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div className='h-[279px] pt-[5px] pr-[8px] pb-[5px] pl-[8px]'>
            <CustomerCard />
        </div>
    </div>
  )
}

export default Customers
