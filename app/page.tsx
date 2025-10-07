<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
=======
"use client"
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";

export default function Home() {

  const {user}=useKindeBrowserClient();
  
  return (
    <div>
      <Header/>
      <Hero/>
>>>>>>> 06aa319 (added editor and canvas functionalities)
    </div>
  );
}
