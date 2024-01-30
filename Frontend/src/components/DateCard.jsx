import React from 'react'

const DateCard = ({heading,time,subHeading,subHeadingColor}) => {
    console.log(heading,time)
    
  return (
    <div className='w-[175px] h-[130px] rounded-[16px] p-[16px] gap-[16px] bg-[#FFFFFF] mt-3'>
      <div className='font-[600] text-[16px] leading-[19px] text-[#7D7D7D]'>
        {heading}
      </div>
      <div className='h-[61px] w-[140px]'>
        <div className='font-[600] text-[24px] text-[#734A00] leading-[29.05px] pt-[27px] pb-[3px]'>
            {time}
        </div>
        <div className={`font-[500] text-[16px] leading-[19.36px] text-[${subHeadingColor}]`}>
            {subHeading}
        </div>
      </div>

    </div>
  )
}

export default DateCard
