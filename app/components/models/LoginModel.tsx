'use client';
import React from 'react'
import {signIn} from 'next-auth/react';
import axios from 'axios';

import { AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import {useCallback , useState} from 'react';
import { useRouter } from 'next/navigation';
import {FieldValues,SubmitHandler,useForm} from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModel';
import Models from './Models';
import Heading from '../Heading';
import Input from '../input/Input';
import { toast } from 'react-hot-toast'
import Button from '../Button';
import useLoginModel from '@/app/hooks/useLoginModel';
const LoginModel = () => {

    const [isLoading , setIsLoading] = useState(false);
    const RegisterModel= useRegisterModal();
    const LoginModel= useLoginModel();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState:{
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues:{
            email:'',
            password:'',
        }
    });

    const onSubmit : SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true);
       
        signIn('credentials',{...data , redirect:false})
        .then((callback)=>{
          setIsLoading(false);

          if(callback?.ok){
            toast.success('Logged In');
            router.refresh();
            LoginModel.onClose();
          }

          if(callback?.error){
            toast.error('Error !');
          }
        })
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
          <Heading
                title="Welcome to Airbnb"
                subtitle="Login To Your Account!!" 
                center={true}          />
          <Input
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="password"
            label="Password"
            type='password'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
        </div>
      )

      const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
          <hr />
          <Button 
            outline 
            label="Continue with Google"
            icon={FcGoogle}
            onClick={() => {signIn('google')}} 
          />
          <Button 
            outline 
            label="Continue with Github"
            icon={AiFillGithub}
            onClick={() => {signIn('github')}}
          />
          <div 
            className="
              text-neutral-500 
              text-center 
              mt-4 
              font-light
            "
          >
            <p>First TIme using Airbnb?
              <span 
                 onClick={()=>{
                  LoginModel.onClose();
                  RegisterModel.onOpen();
                 }} 
                className="
                  text-neutral-800
                  cursor-pointer 
                  hover:underline
                "
                > Create an account</span>
            </p>
          </div>
        </div>
      )


      


  return (
    <Models 
    disabled={isLoading}
    isOpen={LoginModel.isOpen}
    actionLabel='Countinue'
    title='Login'
    onClose={LoginModel.onClose}
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent}
    footer={footerContent} />
  )
}

export default LoginModel