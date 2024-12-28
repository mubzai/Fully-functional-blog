'Use client'
import { Header } from "@/Components/Header";
import { Bloglist } from "@/Components/Bloglist";
import { Footer } from "@/Components/Footer";
import React from "react";

export default function Home() {
  return (
    <>
    <Header/>
    <Bloglist/>
    <Footer/>
    </>
  );
}
