import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useCallback , useMemo } from 'react'
import { toast } from 'react-hot-toast'
import { SafeUser } from '../types'
import useLoginModel from './useLoginModel'


interface FavouriteProps {
    listingId:string,
    currentUser? : SafeUser | null
}

const useFavourite = ({listingId , currentUser} : FavouriteProps) => {
    const router = useRouter();
    const loginModel = useLoginModel();

    const hasFavourite = useMemo(()=>{
        const list = currentUser?.favoriteIds || [];
        
        return list.includes(listingId);
    },[currentUser , listingId])

    const toggleFavourite = useCallback(async (e:React.MouseEvent<HTMLDivElement>)=>{
        e.stopPropagation();

        if(!currentUser)
        {
            return loginModel.onOpen();
        }

        try {
            let request;

            if(hasFavourite) {
                request = () => axios.delete(`/api/Favourite/${listingId}`);
            }
            else{
                request = () => axios.post(`/api/Favourite/${listingId}`)
            }

            await request();
            router.refresh();
            toast.success('Success');

        } catch (error) {
            toast.error('Something went wrong.')
        }


    },[currentUser , listingId , loginModel , hasFavourite , router]);

    return { hasFavourite , toggleFavourite}; 
}

export default useFavourite;