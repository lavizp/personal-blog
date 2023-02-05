import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar"
import MainArticle from '../Widgets/MainArticle'
import RecentBlogs from "../Widgets/RecentBlogs"
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
