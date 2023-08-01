import React, { useState } from 'react'
import { IconType } from 'react-icons';
import getListings from '@/app/actions/getListings'


interface InfoProps{
    icon: IconType;
    label:string,
    count:number
    
}

const Info:React.FC<InfoProps> = ({
    icon: Icon,
     label,
     count
     
    }) => {

        const [trigger , setTrigger] = useState(true);        
  return (
    <div className='relative border-[1px] flex justify-center  rounded-full transition text-center hover:bg-rose-600 hover:text-white hover:border-rose-600 w-8 h-8 ' onMouseEnter={()=>{setTrigger(false) }} onMouseLeave={()=>{setTrigger(true)}}>
        {trigger ? (
            <Icon size={24} className='pt-1'/>
        ) : (
            <>
            <div className='flex justify-center mx-auto pt-1 text-center transition'>
                {count}
            </div>
            <div className='absolute text-xs -top-5 text-black text-center transition'>
                {label}
            </div>
            </>
        )}
    </div>
  )
}

export default Info