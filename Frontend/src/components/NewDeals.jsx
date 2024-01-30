import React from 'react'
import DealsIcon from './DealsIcon'

const NewDeals = () => {
  return (
    <div className='w-[456px] h-[256px] gap-[8px] rounded-[16px] p-[24px]  bg-[#FFFFFF]'>
      <div className='flex w-[392px] h-[40px] pt-[0px] pr-[0px] pb-[16px] pl-[0px] gap-[8px]'>
        <span className='w-[99px] h-[24px] font-[600] text-[20px] leading-[24.2px]'>New Deals</span>
      </div>
      <div className='flex flex-wrap w-[392px] h-[160px] gap-[8px]'>
        <DealsIcon name="Fruit2Go"/>
        <DealsIcon name="Marshall's MKT"/>
        <DealsIcon name="CCNT"/>
        <DealsIcon name="Joana Mini-market"/>
        <DealsIcon name="Little Brazil Vegan"/>
        <DealsIcon name="Target"/>
        <DealsIcon name="Organic Place"/>
        <DealsIcon name="Morello's"/>
      </div>
    </div>
  )
}

export default NewDeals
