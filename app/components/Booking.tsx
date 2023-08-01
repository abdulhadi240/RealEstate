import { Listing } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { SafeListing } from "../types";

interface BookingProps {
  Value: Date;
  listing: SafeListing;
}

const Booking: React.FC<BookingProps> = ({ Value, listing }) => {
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(true);

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (email.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
    console.log(email);
  }, [email]);
  return (
    <form
      action="https://formspree.io/f/xyyqgavw"
      method="post"
      target="_blank"
    >
      <div className="flex justify-center text-center">
        <div className="h-[500px] w-80 rounded-lg border-[2px] shadow-2xl  ">
          <div>Date Selected : {Value?.toDateString()}</div>
          <div className="flex justify-center gap-2">
            <h1>Email :</h1>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="ah912425@gmail.com"
              value={email}
              onChange={handleChange}
              className={`h-auto w-auto  rounded-lg border-2  ${active? 'border-black' : 'border-rose-500'} `}
            />
          </div>
          <div className="flex justify-center gap-2">
            <h1>Phone :</h1>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="+923120202881"
              className="placeholder:text- h-auto w-auto  rounded-lg hover:border-rose-500 active:border-rose-500"
            />
          </div>
          <div className="flex justify-center gap-2 text-xs">
            <input type="checkbox" />
            <h1>Anytime on this date</h1>
          </div>

          <div className="mt-1 flex justify-center gap-4">
            <BiPhoneCall size={20} color="red" />
            <AiOutlineMail size={20} color="red" />
            <MdOutlineTextsms size={20} color="red" />
          </div>

          <textarea
            id="message"
            name="message"
            value={`Congrats someone has booked a meeting with you . Meeting Date/Time is ${Value?.toDateString()} . Listing Information is ID : ${
              listing.id
            } and listing name is ${listing.title} . Image : ${listing.imageSrc}`}
            className="hidden"
          />

          {active ? (
            <button
              className="mt-2 w-full cursor-pointer rounded-lg bg-rose-500 p-2 text-white hover:bg-rose-900"
              type="submit"
            >
              Book now
            </button>
          ) : (
            <button
              className="mt-2 w-full cursor-not-allowed rounded-lg bg-rose-500 p-2 text-white hover:bg-rose-900"
              disabled
              type="submit"
            >
              Book now
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Booking;
