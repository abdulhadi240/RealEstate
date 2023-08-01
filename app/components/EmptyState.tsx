'use client';

import { useRouter } from 'next/navigation';
import React from 'react'
import Heading from './Heading';
import Button from './Button';

interface EmptyStateProps {
    title?: string,
    substitle?: string,
    showReset?: boolean
}


const EmptyState:React.FC<EmptyStateProps> = ({
    title = "No Exact matches",
    substitle="Try changing or removing some of your filters",
    showReset
}) => {
    const router = useRouter();
  return (
    <div className='h-[60vh] flex flex-col gap-2 justify-center items-center '>
        <Heading
        title={title}
        subtitle={substitle}
        center/>

        <div>
            {showReset && (
                <button onClick={()=> router.push('/')}
                 className='border-2 border-black p-3 rounded-lg hover:bg-black active:bg-black/80 hover:text-white transition'>
                    Clear all Filters
                </button>
            )}
        </div>

    </div>
  )
}

export default EmptyState