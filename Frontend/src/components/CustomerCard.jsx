import React from 'react'
import {userData} from '../assets/data.js'

const CustomerCard = () => {
  return (
    <>
    <div className='flex w-[540px] h-[66px] rounded-[16px] gap-[12px] p-[16px]'>
      <div className='w-[32px] h-[32px] flex  justify-center '>
        <img className='flex justify-center items-center  rounded-full' src={userData[0].imageUrl}></img>
      </div>

      <div className='h-[34px] w-[464px] gap-[2px]'>
        <div className='h-[17px] font-[500] text-[14px] leading-[16.94px]'>{userData[0].userName}</div>
        <div className='h-[15px] font-[400] text-[12px] leading-[14.52px] text-[#454545]'>{userData[0].company}</div>
      </div>
    </div>

    <div className='flex w-[540px] h-[66px] rounded-[16px] gap-[12px] p-[16px] bg-[#FFF7E8]'>
      <div className='w-[32px] h-[32px] flex justify-center '>
        <img className='rounded-full' src={userData[1].imageUrl}></img>
      </div>
    <div className='flex'>
        <div className='h-[34px] w-[276px] gap-[2px]'>
            <div className='h-[17px] font-[500] text-[14px] leading-[16.94px]'>{userData[1].userName}</div>
            <div className='h-[15px] font-[400] text-[12px] leading-[14.52px] text-[#454545]'>{userData[1].company}</div>
        </div>
        <svg width="176" height="37" viewBox="0 0 176 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 23.945L12.8667 21.345C11.3173 19.0536 11.916 16.097 14.2667 14.429C16.6173 12.7616 19.9933 12.8983 22.1633 14.749C24.3333 16.6003 24.6267 19.593 22.8493 21.7496C21.072 23.9063 17.7727 24.5596 15.1333 23.2783L12 23.945Z" stroke="#734A00" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M58 22.445L53.8853 24.6083L54.6713 20.0263L51.338 16.7816L55.938 16.115L57.9953 11.9463L60.0526 16.115L64.6526 16.7816L61.3193 20.0263L62.1053 24.6083L58 22.445Z" stroke="#734A00" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M99 14.945L101.667 17.6116M92.6667 23.945H95.3333L102.333 16.945C102.508 16.7699 102.647 16.562 102.742 16.3332C102.837 16.1045 102.886 15.8593 102.886 15.6116C102.886 15.364 102.837 15.1188 102.742 14.89C102.647 14.6613 102.508 14.4534 102.333 14.2783C102.158 14.1032 101.95 13.9643 101.722 13.8695C101.493 13.7748 101.248 13.726 101 13.726C100.752 13.726 100.507 13.7748 100.278 13.8695C100.05 13.9643 99.8418 14.1032 99.6667 14.2783L92.6667 21.2783V23.945Z" stroke="#734A00" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    <line opacity="0.2" x1="128.5" y1="6.61163" x2="128.5" y2="30.6116" stroke="#734A00"/>
    <path d="M157.333 18.6116C157.333 18.7884 157.404 18.958 157.529 19.083C157.654 19.2081 157.823 19.2783 158 19.2783C158.177 19.2783 158.346 19.2081 158.471 19.083C158.596 18.958 158.667 18.7884 158.667 18.6116C158.667 18.4348 158.596 18.2653 158.471 18.1402C158.346 18.0152 158.177 17.945 158 17.945C157.823 17.945 157.654 18.0152 157.529 18.1402C157.404 18.2653 157.333 18.4348 157.333 18.6116Z" fill="#131313"/>
    <path d="M157.333 23.2783C157.333 23.4551 157.404 23.6247 157.529 23.7497C157.654 23.8747 157.823 23.945 158 23.945C158.177 23.945 158.346 23.8747 158.471 23.7497C158.596 23.6247 158.667 23.4551 158.667 23.2783C158.667 23.1015 158.596 22.9319 158.471 22.8069C158.346 22.6819 158.177 22.6116 158 22.6116C157.823 22.6116 157.654 22.6819 157.529 22.8069C157.404 22.9319 157.333 23.1015 157.333 23.2783Z" fill="#131313"/>
    <path d="M157.333 13.945C157.333 14.1218 157.404 14.2913 157.529 14.4164C157.654 14.5414 157.823 14.6116 158 14.6116C158.177 14.6116 158.346 14.5414 158.471 14.4164C158.596 14.2913 158.667 14.1218 158.667 13.945C158.667 13.7682 158.596 13.5986 158.471 13.4736C158.346 13.3485 158.177 13.2783 158 13.2783C157.823 13.2783 157.654 13.3485 157.529 13.4736C157.404 13.5986 157.333 13.7682 157.333 13.945Z" fill="#131313"/>
    <path d="M157.333 18.6116C157.333 18.7884 157.404 18.958 157.529 19.083C157.654 19.2081 157.823 19.2783 158 19.2783C158.177 19.2783 158.346 19.2081 158.471 19.083C158.596 18.958 158.667 18.7884 158.667 18.6116C158.667 18.4348 158.596 18.2653 158.471 18.1402C158.346 18.0152 158.177 17.945 158 17.945C157.823 17.945 157.654 18.0152 157.529 18.1402C157.404 18.2653 157.333 18.4348 157.333 18.6116Z" stroke="#734A00" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M157.333 23.2783C157.333 23.4551 157.404 23.6247 157.529 23.7497C157.654 23.8747 157.823 23.945 158 23.945C158.177 23.945 158.346 23.8747 158.471 23.7497C158.596 23.6247 158.667 23.4551 158.667 23.2783C158.667 23.1015 158.596 22.9319 158.471 22.8069C158.346 22.6819 158.177 22.6116 158 22.6116C157.823 22.6116 157.654 22.6819 157.529 22.8069C157.404 22.9319 157.333 23.1015 157.333 23.2783Z" stroke="#734A00" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M157.333 13.945C157.333 14.1218 157.404 14.2913 157.529 14.4164C157.654 14.5414 157.823 14.6116 158 14.6116C158.177 14.6116 158.346 14.5414 158.471 14.4164C158.596 14.2913 158.667 14.1218 158.667 13.945C158.667 13.7682 158.596 13.5986 158.471 13.4736C158.346 13.3485 158.177 13.2783 158 13.2783C157.823 13.2783 157.654 13.3485 157.529 13.4736C157.404 13.5986 157.333 13.7682 157.333 13.945Z" stroke="#734A00" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
    </div>
     
    </div>

    <div className='flex w-[540px] h-[66px] rounded-[16px] gap-[12px] p-[16px]'>
      <div className='w-[32px] h-[32px] flex justify-center '>
        <img className='rounded-full' src={userData[2].imageUrl}></img>
      </div>

      <div className='h-[34px] w-[464px] gap-[2px] '>
        <div className='h-[17px] font-[500] text-[14px] leading-[16.94px]'>{userData[2].userName}</div>
        <div className='h-[15px] font-[400] text-[12px] leading-[14.52px] text-[#454545]'>{userData[2].company}</div>
      </div>
    </div>

    <div className='flex w-[540px] h-[66px] rounded-[16px] gap-[12px] p-[16px]'>
      <div className='w-[32px] h-[32px] flex justify-center '>
        <img className='rounded-full' src={userData[3].imageUrl}></img>
      </div>

      <div className='h-[34px] w-[464px] gap-[2px]'>
        <div className='h-[17px] font-[500] text-[14px] leading-[16.94px]'>{userData[3].userName}</div>
        <div className='h-[15px] font-[400] text-[12px] leading-[14.52px] text-[#454545]'>{userData[3].company}</div>
      </div>
    </div>
    <div className='flex pt-[0px] pr-[24px] pb-[0px] pl-[24px] gap-[8px] h-[17px] mt-5'>
        <button className='h-[17px] font-[400] text-[14px] leading-[16.94px] text-[#734A00]'>All Customers</button>
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829" stroke="#734A00" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </>
  )
}

export default CustomerCard
