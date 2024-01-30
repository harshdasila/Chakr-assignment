import React from 'react'
import { userData } from '../assets/data'

const Chats = () => {
  return (
    <div className='w-[320px] h-[256px] rounded-[16px] p-[24px] gap-[8px] bg-[#FFFFFF]'>
        <div className='h-[65px] pt-[0px] pr-[0px] pb-[16px] pl-[0px] gap-[8px]'>
            <div className='font-[600] text-[20px] leading-[24.2px] h-[24px]'>
                Chats
            </div>
            <div className='h-[17px] font-[400] text-[14px] leading-[16.94px] text-[#454545] mt-4'>
                2 unread messages
            </div>
        </div>
        <div className='flex relative h-[56px] gap-[8px] w-[272px]  top-7'>
            <div className='flex relative w-[56px] h-[56px] rounded-[16px] p-[12px] gap-[8px] bg-[#FFF7E8]'>
                <img className='flex justify-center items-center rounded-full' src={userData[2].imageUrl}></img>
                <div className='absolute w-[5px] h-[5px] border-[1px] border-[#FFF7E8] bg-[#EB5050] rounded-full top-[15px] right-[13px]'></div>
            </div>
            <div className='flex relative w-[56px] h-[56px] rounded-[16px] p-[12px] gap-[8px] bg-[#FFF7E8]'>
                <img className='flex justify-center items-center rounded-full' src={userData[3].imageUrl}></img>
                <div className='absolute w-[5px] h-[5px] border-[1px] border-[#FFF7E8] bg-[#EB5050] rounded-full top-[15px] right-[13px]'></div>
            </div>
            <div className='flex relative w-[56px] h-[56px] rounded-[16px] p-[12px] gap-[8px]'>
                <img className='flex justify-center items-center rounded-full' src={userData[0].imageUrl}></img>
                
            </div>
            <div className='flex relative w-[56px] h-[56px] rounded-[16px] p-[12px] gap-[8px]'>
                <img className='flex justify-center items-center rounded-full' src={userData[1].imageUrl}></img>
                
            </div>
        </div>
    </div>
  )
}

export default Chats
