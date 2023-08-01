"use client";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useCallback, useState } from "react";
import Avatar from "../Avatar";
import useRegisterModel from "@/app/hooks/useRegisterModel";
import useLoginModel from "@/app/hooks/useLoginModel";
import { User } from "@prisma/client";
import {signOut} from 'next-auth/react'; 
import { SafeUser } from "@/app/types";
import useRentModel from "@/app/hooks/useRentModel";
import Link from "next/link";
interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [Menu, setMenu] = useState(false);
  const registerModel = useRegisterModel();
  const LoginModel = useLoginModel();
  const rentModel = useRentModel();

const onRent = useCallback(()=>{
  if(!currentUser)
  {
    return LoginModel.onOpen();
  }
  else{
    rentModel.onOpen();
  }
},[currentUser , LoginModel ,rentModel])

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm w-full font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer "
          onClick={onRent}
        >
          <div className="text-center">Airbnb your home</div>
        </div>
        <Link href={'/GoogleMaps'}><div className="w-40 mr-10 hidden lg:block text-sm  font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">Nearby Resturants</div></Link>
        <div
          className=" p-4 md:py-1 md:px-2 border-[1px] border-neutral-100 flex flex-row item-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          onClick={() => {
            setMenu(!Menu);
          }}
        >
          <AiOutlineMenu className=" text-2xl" />
          <div className="hidden md:block">
            <Avatar src = {currentUser?.image}/>
          </div>
        </div>
      </div>
      {Menu && (
        <div className="absolute rounded-xl  w-[40vw] md:w-3/4 overflow-hidden right-0 top-12 text-sm bg-white  h-auto shadow-md border-[1px] ">
          {currentUser ? (
            <>
            <div
              className="mt-2 ml-1   cursor-pointer hover:shadow-sm hover:bg-neutral-50"
              onClick={() => {}}>
              My trips
            </div>
            <div
              className="mt-2 ml-1   cursor-pointer hover:shadow-sm hover:bg-neutral-50"
              onClick={() => {}}>
              My favourites
            </div>
            <div
              className="mt-2 ml-1   cursor-pointer hover:shadow-sm hover:bg-neutral-50"
              onClick={() => {}}>
              My reservations
            </div>
            <div
              className="mt-2 ml-1   cursor-pointer hover:shadow-sm hover:bg-neutral-50"
              onClick={() => {}}>
              My properties
            </div>
            <div
              className="mt-2 ml-1   cursor-pointer hover:shadow-sm hover:bg-neutral-50"
              onClick={() => {rentModel.onOpen()}}>
              Airbnb my home
            </div>
            <div
              className="mt-2 ml-1   cursor-pointer hover:shadow-sm hover:bg-neutral-50"
              onClick={() => {}}>
              Nearby Resturants
            </div>
            <div
              className="mt-2 ml-1   cursor-pointer hover:shadow-sm hover:bg-neutral-50"
              onClick={() => {signOut()}}>
              Logout
            </div>



            </>
            
          ) : (
            <div>
              <div
                className="mt-2 ml-1   cursor-pointer hover:shadow-sm hover:bg-neutral-50"
                onClick={() => {
                  LoginModel.onOpen();
                }}
              >
                Login
              </div>
              <div
                onClick={() => {
                  registerModel.onOpen();
                }}
                className="mt-2 ml-1   cursor-pointer hover:shadow-sm hover:bg-neutral-50"
              >
                Sign Up
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
