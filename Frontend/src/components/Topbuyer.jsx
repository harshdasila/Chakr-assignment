import React from 'react'
import {userData} from '../assets/data'
const DateCard = () => {
    
  return (
    <div className='w-[175px] h-[130px] rounded-[16px] p-[16px] gap-[16px] bg-[#FFFFFF] mt-3'>
      <div className='font-[600] h-[19px] text-[16px] leading-[19.36px] text-[#7D7D7D]'>
        Top buyer
      </div>
      <div className='h-[61px] w-[140px] float-end mt-[10px] gap-[8px]'>
      <div className='w-[30px] h-[28px] flex justify-center '>
        <img className='rounded-full' src={userData[1].imageUrl}></img>
      </div>
      <div className='h-[31px] gap-[4px] mt-4'>
        <div className={`font-[500] h-[15px] text-[12px] leading-[14.52px] text-[#131313]`}>
              {userData[1].userName}
          </div>
          <div className={`font-[400] h-[12px] text-[10px] leading-[12.1px] text-[#454545]`}>
              {userData[1].company}
        </div>
      </div>
        
      </div>

    </div>
  )
}

export default DateCard
