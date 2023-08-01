"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { GrShare } from "react-icons/gr";
import useLoginModal from "@/app/hooks/useLoginModel";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import Avatar from "react-avatar";
import { categories } from "@/app/components/Navbar/Categories";
import Details from "@/app/components/Details";
import useCountries from "@/app/hooks/useCountries";
import HeartButton from "@/app/components/HeartButton";
import dynamic from "next/dynamic";
import Features from "@/app/components/Features";
import {
  MdOutlineCellWifi,
  MdVerified,
  MdWorkspacePremium,
} from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Booking from "@/app/components/Booking";
import Share from "@/app/components/Share";

interface ListingClientProps {
  reservations?: SafeReservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const Map = dynamic(() => import("@/app/components/Map"), {
  ssr: false,
});

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  reservations = [],
  currentUser,
}) => {
  const { getByValue } = useCountries();
  const location = getByValue(listing.locationValue);
  const coordinates = getByValue(listing.locationValue)?.latlng;
  const [height, setHeight] = useState(true);
  const [value, setValue] = useState(new Date());
  const [show, setShow] = useState(true);

  const HandleHeight = () => {
    setHeight(!height);
  };

  const category = useMemo(() => {
    return categories.find((items) => items.label === listing.category);
  }, [listing.category]);

  console.log(value);

  const HandleChange = () => {
    setValue(value);
  };

  return (
    <div>
      <div>
        <div className="mx-16  flex justify-between ">
          <div className="">
            <div className="w-80 text-2xl font-semibold sm:w-full">
              {listing.title}
            </div>
            <div>
              {location?.label} , {location?.region}
            </div>
            <div className="flex text-center">
              <div>5.0</div>
              <div>
                <Image src={"/5star.png"} width={70} height={70} alt="star" />
              </div>
            </div>
          </div>
          <div className="mr-28 flex gap-3">
            <HeartButton listingId={listing.id} currentUser={currentUser} />
            <div>
              <GrShare
                size={20}
                className="cursor-pointer"
                onClick={() => {
                  setShow(!show);
                }}
              />
            </div>
            {show && (
              // <FacebookShareButton
              //   url={`https://chat.openai.com/`}
              //   quote={'share on facebook'}
              // >
              //   Share on Facebook
              // </FacebookShareButton>

              <Share />
            )}
          </div>
        </div>
        <div className="flex flex-col sm:ml-16 lg:flex-row">
          <div className="mt-12">
            <Image
              src={listing.imageSrc}
              width={500}
              height={500}
              alt=""
              className="rounded-3xl"
            />
          </div>
          <div className=" hidden  sm:ml-4 lg:flex lg:flex-col">
            <Image
              src={listing.imageSrc}
              width={300}
              height={200}
              alt=""
              className="rounded-lg"
            />
            <Image
              src={listing.imageSrc}
              width={300}
              height={200}
              alt=""
              className="mt-4 rounded-xl"
            />
          </div>
          <div>
            <Image
              src={listing.imageSrc}
              width={500}
              height={500}
              alt=""
              className=" mt-12 rounded-3xl sm:ml-4"
            />
          </div>
        </div>
        <hr className="mt-2" />
      </div>

      <div className="flex">
        <div>
          <div className="flex">
            <div className=" sm:px-16 lg:px-36 ">
              <div>
                <h1 className="mt-4 w-[450px] text-xl font-bold tracking-wider sm:w-full ">
                  {listing.title}
                </h1>
                <p className="text-xs font-light">Entire Home</p>
              </div>
              <div className="gird-cols-2 mt-6 grid gap-1 sm:grid-cols-3">
                <Details text="Guest Count" count={listing.guestCount} />
                <Details text="Bedroom" count={listing.roomCount} />
                <Details text="Bathroom" count={listing.bathroomCount} />
              </div>
            </div>
            <div></div>
          </div>
          <hr className="mb-4 mt-4 w-[400px] sm:w-[700px]" />

          <div>{/* <h1>Category : {listing.category}</h1> */}</div>
          <div className=" text-xl font-semibold  sm:ml-16  lg:ml-36">
            Description :
          </div>
          <div
            className={
              height
                ? "h-72 w-[600px] overflow-hidden text-start transition sm:mx-16 lg:mx-36 "
                : "h-full w-[600px] overflow-hidden text-start transition sm:mx-16 lg:mx-36"
            }
          >
            <div className="w-[470px] tracking-wider transition sm:w-full">
              {listing.description}
            </div>
          </div>
          <div
            onClick={HandleHeight}
            className="mt-1 cursor-pointer text-rose-500 underline transition sm:ml-16 lg:ml-36"
          >
            {height ? <h1>See more ..</h1> : <h1>See less ...</h1>}
          </div>
          <hr className="mb-4 mt-4 w-[400px] sm:w-[700px]" />

          <div className="w-[600px] sm:ml-16 lg:ml-36">
            <div>
              <h1 className="text-xl  font-semibold ">Features :</h1>
            </div>
            <div className="mt-4 grid  grid-cols-3 sm:grid-cols-4  sm:gap-4 ">
              <Features
                Icons={MdOutlineCellWifi}
                Name="Signals"
                Outline={true}
                Underline={false}
              />
              <Features
                Icons={MdOutlineCellWifi}
                Name="Signals"
                Outline={true}
                Underline={false}
              />
              <Features
                Icons={MdOutlineCellWifi}
                Name="Signals"
                Outline={true}
                Underline={false}
              />
              <Features
                Icons={MdOutlineCellWifi}
                Name="Signals"
                Outline={true}
                Underline={false}
              />
              <Features
                Icons={MdOutlineCellWifi}
                Name="Signals"
                Outline={true}
                Underline={false}
              />
            </div>
            <div>
              <div className="mt-10 text-xl font-semibold">Category:</div>
              <div className="mt-4 flex w-[400px] gap-4">
                <div>
                  <BiCategoryAlt size={20} />
                </div>
                <div>{listing.category}</div>
              </div>
            </div>
          </div>
          <hr className="mb-4 mt-4 w-[400px] sm:w-[700px]" />

          <div className="mt-4 sm:ml-16 lg:ml-32">
            <h1 className="text-xl font-semibold">
              Choose Date For booking :{" "}
            </h1>
            <div className="ml-10 mt-10 ">
              <Calendar
                onChange={() => {
                  HandleChange();
                }}
                value={value}
              />
            </div>
          </div>
          <hr className="mb-4 mt-4 w-[400px] sm:w-[700px]" />

          <div className="mb-4 text-xl font-semibold sm:ml-16 lg:ml-36">
            Hosted By :
          </div>
          <div className="sm:ml-16 lg:ml-36">
            <div className="flex gap-4">
              <div>
                {/* <Avatar
                  size="40"
                  name={listing.user.name}
                  className="rounded-full text-xl"
                /> */}
              </div>
              <div>
                <div className="mt-1">{listing.user.name}</div>
                <div className="-mt-[3px] h-4 w-20 overflow-hidden text-xs font-light">
                  {listing.user.createdAt}
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <Features
                Name="Verified"
                Icons={MdVerified}
                Outline={false}
                Underline={false}
              />
              <Features
                Name="Top Rated"
                Icons={MdWorkspacePremium}
                Outline={false}
                Underline={false}
              />
              <Features
                Name="Verified"
                Icons={MdVerified}
                Outline={false}
                Underline={false}
              />
            </div>

            <div className="mt-4">
              <h1 className="mb-4 text-xl font-semibold">Contact : </h1>
              <Features
                Name={listing.user.email}
                Icons={FiMail}
                Outline={false}
                Underline={true}
              />
              <Features
                Name="+923120202881"
                Icons={AiFillPhone}
                Outline={false}
                Underline={true}
              />
            </div>
          </div>
          <hr className="mb-4 mt-4 w-[400px] sm:w-[700px]" />

          <div>
            <h1 className="sm:ml-26 mb-10 mt-8 text-xl font-semibold lg:ml-36">
              Location :
            </h1>
          </div>
          <div className="h-44 w-full lg:ml-36 lg:w-96">
            <Map center={location?.latlng} />
          </div>
          <hr className="mb-4 mt-14 w-[400px] sm:w-[700px]" />

          <div>
            <div className="text-xl font-semibold"></div>
            {/* <RelatedProducts text='Related Product By This Host :'/> */}
          </div>
        </div>

        <div>
          <div className="fixed overflow-y-visible">
            <Booking Value={value} listing={listing} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingClient;
