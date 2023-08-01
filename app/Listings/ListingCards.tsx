'use client'

import { Listing, Reservation } from "@prisma/client";
import React, { useCallback, useMemo } from "react";
import { SafeListing, SafeUser } from "../types";
import { useRouter } from "next/navigation";
import useCountries from "../hooks/useCountries";
import {format} from 'date-fns'
import Image from "next/image";
import HeartButton from "../components/HeartButton";
import Button from "../components/Button";
import Info from "./Info";
import {MdOutlineBedroomChild , MdOutlineFamilyRestroom , MdOutlineBathroom} from 'react-icons/md'

interface ListingProps {
  listing: SafeListing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCards: React.FC<ListingProps> = ({
  
  listing,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {


const router = useRouter();
 const {getByValue} = useCountries();

 const location = getByValue(listing.locationValue);

  return (
  <div className="col-span-1 cursor-pointer group" onClick={()=> router.push(`/listing/${listing.id}`)}>
    <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
            <Image 
            alt="Listing"
            src={listing?.imageSrc}
            fill
            className="object-cover h-full w-full group-hover:scale-110 transition"/>
            <div className="absolute top-3 right-3">
                <HeartButton 
                listingId = {listing.id}
                currentUser = {currentUser}/>
            </div>
        </div>
        <div className="font-semibold text-lg">
            {location?.region},{location?.label}
        </div>
        <div className="font-light text-neutral-500">
            {listing.category}
        </div>
        <div className="flex gap-10">

            <div className="flex gap-1 items-center">
            <div>
            ${listing.price}
            </div>
            <div>
            {!reservation && (
            <div className="font-light">night</div>)}
            </div>
            </div>
        <div className="flex flex-row ">
            <Info 
            count={listing?.roomCount}
            label="Bedroom"
            icon={MdOutlineBedroomChild}
            />
            <Info 
            count={listing?.bathroomCount}
            label="Bathroom"
            icon={MdOutlineBathroom}
            />
            <Info 
            count={listing?.guestCount}
            label="Guest"
            icon={MdOutlineFamilyRestroom}
            />
        </div>
        
        </div>
        
    </div>
    {/* {onAction && actionLabel && (
        <Button 
        disabled = {disabled}
        small
        label={actionLabel}
        onClick={handleCancel}/>
    )} */}
  </div> 
)};

export default ListingCards;
