import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar"
import MainArticle from "../Components/MainArticle"
import RecentBlogs from "../Components/RecentBlogs"
import Footer from "../Components/Footer"

export default function HomePage() {


  return (
    <>
    <Navbar/>
      <MainArticle/>
      <RecentBlogs/>
      <Footer/>
    </>
  )
}
