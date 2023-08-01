'use client';
import React from 'react'

import axios from 'axios';

import { AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import {useCallback , useState} from 'react';

import {FieldValues,SubmitHandler,useForm} from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModel';
import Models from './Models';
import Heading from '../Heading';
import Input from '../input/Input';
import { toast } from 'react-hot-toast'
import Button from '../Button';
import {signIn} from 'next-auth/react';
import useLoginModel from '@/app/hooks/useLoginModel';

const RegisterModel = () => {

    const [isLoading , setIsLoading] = useState(false);
    const RegisterModel= useRegisterModal();
    const LoginModel= useLoginModel();

    const {
        register,
        handleSubmit,
        formState:{
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:'',
        }
    });

    const onSubmit : SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true);
        axios.post('/api/register',data)
        .then(()=>{
            RegisterModel.onClose()
        })
        .catch((error)=>{
            toast.error('something went wrong');
            
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
          <Heading
                title="Welcome to Airbnb"
                subtitle="Create an account!" 
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
            id="name"
            label="Name"
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
            <p>Already have an account?
              <span 
                onClick={()=>{
                  RegisterModel.onClose();
                  LoginModel.onOpen();
                 }}  
                className="
                  text-neutral-800
                  cursor-pointer 
                  hover:underline
                "
                > Log in</span>
            </p>
          </div>
        </div>
      )


  return (
    <Models 
    disabled={isLoading}
    isOpen={RegisterModel.isOpen}
    actionLabel='Countinue'
    title='Register'
    onClose={RegisterModel.onClose}
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent}
    footer={footerContent} />
  )
}

export default RegisterModel