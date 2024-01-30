import React from 'react'
import '../App.css'
const States = () => {
  return (
    <div className='w-[320px] h-[256px] rounded-[16px] p-[24px] gap-[8px] bg-[#FFFFFF]'>
      <div className='w-[272px] h-[40px] pt-[0px] pr-[0px] pb-[16px] pl-[0px] mb-[8px]'>
        <span className='font-[600] text-[20px] leading-[24.2px]'>Top states</span>
      </div>

      <div className='flex justify-between w-[272px] h-[29px] rounded-[4px]  pt-[6px] pr-[8px] pb-[6px] pl-[8px] gap-[8px] gradient-color'>
        <span className='flex top-1/2 w-[21px] h-[17px] font-[600] text-[14px] leading-[16.9px]'>NY</span>
        <span className='flex relative  w-[24px] h-[12px] font-[600] text-[10px] leading-[-5.1px] '>120k</span>
      </div>

      <div className='flex justify-between w-[229px] h-[29px] rounded-[4px]  pt-[6px] pr-[8px] pb-[6px] pl-[8px] gap-[8px] gradient-color mt-[8px]'>
        <span className='flex top-1/2 w-[21px] h-[17px] font-[600] text-[14px] leading-[16.9px]'>MA</span>
        <span className='flex relative  w-[24px] h-[12px] font-[600] text-[10px] leading-[-5.1px] '>80k</span>
      </div>

      <div className='flex justify-between w-[207px] h-[29px] rounded-[4px]  pt-[6px] pr-[8px] pb-[6px] pl-[8px] gap-[8px] gradient-color mt-[8px]'>
        <span className='flex top-1/2 w-[21px] h-[17px] font-[600] text-[14px] leading-[16.9px]'>NH</span>
        <span className='flex relative  w-[24px] h-[12px] font-[600] text-[10px] leading-[-5.1px] '>70k</span>
      </div>

      <div className='flex justify-between w-[150px] h-[29px] rounded-[4px]  pt-[6px] pr-[8px] pb-[6px] pl-[8px] gap-[8px] gradient-color mt-[8px]'>
        <span className='flex top-1/2 w-[21px] h-[17px] font-[600] text-[14px] leading-[16.9px]'>OR</span>
        <span className='flex relative  w-[24px] h-[12px] font-[600] text-[10px] leading-[-5.1px] '>50k</span>
      </div>

    </div>
  )
}

export default States
