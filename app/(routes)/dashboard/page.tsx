"use client"
<<<<<<< HEAD
import Header from '@/app/_components/Header'
=======
>>>>>>> 06aa319 (added editor and canvas functionalities)
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useConvex, useMutation, useQuery } from 'convex/react'
import React, { useEffect } from 'react'
<<<<<<< HEAD
import FileList from './_components/FileList'
// import Header from './_components/Header'
// import FileList from './_components/FileList'
// import AdBanner from './../../_components/AdBanner'
=======
import Header from './_components/Header'
import FileList from './_components/FileList'
import AdBanner from './../../_components/AdBanner'
>>>>>>> 06aa319 (added editor and canvas functionalities)
function Dashboard() {

  const convex=useConvex();
  const {user}:any=useKindeBrowserClient();
  //const getUser=useQuery(api.user.getUser,{email:user?.email});

  const createUser=useMutation(api.user.createUser);
  useEffect(()=>{
<<<<<<< HEAD
      if(user)
      {
        checkUser()
      }
=======
      user&&checkUser();
>>>>>>> 06aa319 (added editor and canvas functionalities)
  },[user])
  

  const checkUser=async()=>{
    const result=await convex.query(api.user.getUser,{email:user?.email});
    if(!result?.length)
    {
        createUser({
          name:user.given_name,
          email:user.email,
          image:user.picture
        }).then((resp)=>{
          console.log(resp)
        })
    }

  }
  return (
    <div className='p-8'>
<<<<<<< HEAD
      

       <FileList/>
      {/*<AdBanner
          data-ad-slot="4796371341"
          data-ad-format="auto"
          data-full-width-responsive="true"
        /> */}
=======
      <Header/>

      <FileList/>
      <AdBanner
          data-ad-slot="4796371341"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
>>>>>>> 06aa319 (added editor and canvas functionalities)
    </div>

  )
}

export default Dashboard