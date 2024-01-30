import React from 'react'

const Revenue = () => {
  return (
    <div className='w-[410px] h-[261.61px] rounded-[16px] p-[24px] gap-[8px] bg-[#FFFFFF] '>
        <div className='pt-[0px] pr-[0px] pb-[16px] pl-[0px] gap-[8px] w-[362px] h-[40px]'>
          <span className='font-[600] text-xl leading-[24.2px]'>Revenues</span>
        </div>
        <div className='flex w-[129px] h-[58px] gap-[8px]'>
          <div className='text-[48px] font-[500] leading-[58.09px]'>
            15%
          </div>
          <div className='relative  left-[9.33px] flex justify-center items-center'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.6667 9.33334L9.33334 22.6667M22.6667 9.33334H10.6667M22.6667 9.33334V21.3333" stroke="#25CD25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div className='text-[14px] font-[400] leading-[16.94px] text-[#454545] h-[17px] w-[222px] mt-2'>
          Increase compared to last week
        </div>
        <div className='flex pt-[16px] pr-[0px] pb-[0px] pl-[0px] gap-[8px] h-[90px] w-[143px] items-end'>
          <button className='font-[400] text-[14px] leading-[16.94px] text-[#734A00]'>Revenue Reports</button>
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829" stroke="#734A00" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
    </div>
  )
}

export default Revenue
