'use client';

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback } from 'react'
import { IconType } from 'react-icons'
import qs from 'query-string'



interface CategoryProps {
    label : string,
    description : string,
    icon:IconType
    selected? : boolean

}


const CategoryBox: React.FC<CategoryProps> = ({label , description , icon:Icons , selected}) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(()=>{
        let currentQuery = {};

        if(params){
            currentQuery = qs.parse(params.toString());
        }

            const updatedQuery: any = {
                ...currentQuery,
                category:label
            }

        

        if(params?.get('category')=== label)
        {
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl({
            url:'/',
            query : updatedQuery
        }, {skipNull: true});

        router.push(url);
    },[label , params , router])


  return (
    <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3   hover:text-neutral-800 transition cursor-pointer  ${selected? 'text-neutral-800' :  'text-neutral-500'}`}>
        <Icons size={26}/>
        <div className='font-medium text-sm'>
            {label}
        </div>
    </div>
  )
}

export default CategoryBox