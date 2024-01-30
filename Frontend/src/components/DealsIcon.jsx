import React from 'react'
// import plusIMG from '../../images/plus-icon.png'

const DealsIcon = ({name}) => {
  return (
    <div className='flex items-center w-auto h-[48px] rounded-[16px] p-[12px] gap-[8px] bg-[#FFF7E8]'>
    <div className='flex justify-center items-center w-[18px] h-[18px] border-[#FFA500]'>
      <svg className='relative' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z" stroke="#FFA500" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div className='flex items-center flex-1'>
      <div className='w-auto h-[17px] font-[400] text-[14px] leading-[16.94px] text-[#734A00]'>
       {name}
      </div>
    </div>
  </div>
  
  )
}

export default DealsIcon
