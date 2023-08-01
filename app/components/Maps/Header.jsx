"use client";

import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import Input from "../input/Input";
import { BsFillMicMuteFill, BsFillMicFill } from "react-icons/bs";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";



const Header = () => {
  const [speech, setSpeech] = useState(true);

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Sorry, your browser doesn't support speech recognition.</span>;
  }



  
  
  return (
    <>
      <div className="flex justify-end items-center relative">
        <input
          className={`
          peer
          w-[30%]
          flex 
          justify-end
          mx-4
          text-start
          p-3
          pt-4 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          
        `}
          placeholder="Enter Location"
          value={transcript}
          
        />
        {speech && (
         <BsFillMicMuteFill className="absolute right-8 " size={20} onClick={SpeechRecognition.startListening}/>

        )}


          
        
      </div>
        <button onClick={SpeechRecognition.stopListening}>Close</button>
        

      
      
        
      
      
    </>
  );
};

export default Header;


