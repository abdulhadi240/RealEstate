import React from 'react'
import { IconType } from 'react-icons'
import {MdOutlineCellWifi} from 'react-icons/md'


interface FeaturesProps{
    Name : string | null,
    Icons: IconType
    Outline :boolean,
    Underline:boolean
}
const Features:React.FC<FeaturesProps> = ({Name , Icons , Outline , Underline}) => {
  return (
    <div className={`${Outline? 'border-[1px]' :'border-[0px]'} ${Underline ? 'underline' : ''} flex gap-1 w-32 h-8 p-1 rounded-3xl border-black`}>
        <div>
            <Icons size={20}/>
        </div> 
        <div className='-mt-[3px]'>
            {Name}
        </div>
        
    </div>
  )
}

export default Features