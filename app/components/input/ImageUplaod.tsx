import React, { useCallback } from 'react'
import {CldUploadWidget} from 'next-cloudinary' 
import Image from 'next/image'
import { TbPhotoPlus } from 'react-icons/tb'


declare global {
    var cloudinary:any
}

interface ImageUploadProps{
    onChange:(value:string) => void,
    value:string

}


const ImageUpload:React.FC<ImageUploadProps> = ({onChange , value}) => {

    const handleUpload = useCallback((result:any) =>{
        onChange(result.info.secure_url);
    },[onChange])


  return (
    <CldUploadWidget
    onUpload={handleUpload}
    uploadPreset='fmctpa8t'  // ceate this in cloudinary setting and set to unsigned
    options={{
        maxFiles:1
    }}>
        {({open})=>{
            return(
                <div
                onClick={()=>{open?.()}}
                className='relative cursor-pointer hover:opacity-70 transition border-dashed p-20 border-2 flex flex-col justify-center items-center gap-4 text-neutral-600 border-neutral-300'>
                    <TbPhotoPlus size={50}/>
                    <div className='text-lg font-semibold'>Click to Uplaod</div>
                    {value && (
                        <div>
                            <Image
                            fill
                            style={{objectFit:'cover'}}
                            src={value} alt={'upload'}/>
                        </div>
                    )}
                </div>
                
            )
        }}
    </CldUploadWidget>
  )
}

export default ImageUpload