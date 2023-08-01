'use client';

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

import Button from "../Button";
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, InstapaperShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

const ShareModal = () => {
  const [showModal, setShowModal] = useState(true);
  

  const bodyContent = (
    <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-8 gap-4 justify-center ">
      <FacebookShareButton
         url={`https://chat.openai.com/`}
         quote={'share on facebook'}
         className="rounded-full"

       >
         <FacebookIcon round={true}/>
       </FacebookShareButton>

       <EmailShareButton
         url={`https://chat.openai.com/`}
         className="rounded-full"
       >
         <EmailIcon round={true}/>
       </EmailShareButton>

       <TelegramShareButton
         url={`https://chat.openai.com/`}
         className="rounded-full"
       >
         <TelegramIcon round={true}/>
       </TelegramShareButton>

       <RedditShareButton
         url={`https://chat.openai.com/`}
         className="rounded-full"
       >
         <RedditIcon round={true}/>
       </RedditShareButton>

       <LinkedinShareButton
         url={`https://chat.openai.com/`}
         className="rounded-full"
       >
         <LinkedinIcon round={true}/>
       </LinkedinShareButton>

       <TwitterShareButton
         url={`https://chat.openai.com/`}
         className="rounded-full"
       >
         <TwitterIcon round={true}/>
       </TwitterShareButton>

       <WhatsappShareButton
         url={`https://chat.openai.com/`}
         className="rounded-full"
       >
         <WhatsappIcon round={true}/>
       </WhatsappShareButton>

      



    </div>
  )

  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        "
      >
        <div className="
          relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto
          "
        >
          {/*content*/}
          <div className={`
            translate
            duration-300
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}>
            <div className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
            >
              {/*header*/}
              <div className="
                flex 
                items-center 
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
              >
                <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                  "
                  onClick={()=>{}}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">
                  {'Share with your friends'}
                </div>
              </div>
              {/*body*/}
              <div className="relative p-6 flex gap-4">
                {bodyContent}
              </div>
              {/*footer*/}
              <div className="flex flex-col gap-2 p-6">
                <div 
                  className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                >
                  
                </div>
                <div className="text-xs font-bold flex justify-center">
                {'*** Sharing with yur friends can earn you a discount of $10 ***'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShareModal;