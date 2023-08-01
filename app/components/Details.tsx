import React from 'react'
import {BsDot} from 'react-icons/bs'

interface DetailsProps{
    text:string,
    count:number
}


const Details:React.FC<DetailsProps> = ({text , count}) => {
  return (
    <div className='flex w-32 h-10 border-[1px] border-black rounded-full text-center justify-center mt-2'>
        <div className='mt-[6px]'>{count} {text}</div>
    </div>
  )
}

export default Details