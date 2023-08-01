'use client';

import React from 'react'
import Image from 'next/image'
import { SafeUser } from '../types';

interface AvatarProps{
  src: string | null | undefined 
};

const Avatar:React.FC<AvatarProps> = ({src}) => {
  return (
    <div>
        <Image
        width={40}
        height={40}
        src={src || '/placeholder.png'}
        alt='Placeholder'
        className='rounded-full'
        />
    </div>
  )
}

export default Avatar