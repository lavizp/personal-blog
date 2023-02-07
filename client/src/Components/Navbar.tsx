import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {AiOutlineSearch} from "react-icons/ai"
const navItems = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "Blogs",
    link: "/articles"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Write",
    link: "/submit"
  },
]
export default function Navbar() {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState("")

  const searchHandler = (e: any) =>{
    e.preventDefault();
    if(searchText.length <=0 )
    {
      return;
    }
    navigate("/search/"+ searchText)
  }
  return (
    <nav className="min-w-full h-20 flex justify-between items-center pl-12 pr-12 " >
      <div className="flex items-center">
        <span className="mr-2">L</span>
        <h3 className="font-bold">Laviz</h3>
      </div>
      <div>
        <ul className="flex gap-8">
          {navItems.map(item=><li className="font-bold" key={item.title}><a href={item.link}>{item.title}</a></li>)}


        </ul>
      </div>
      <div className="flex">
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-white rounded-lg focus:ring-offset-bubble-gum focus:border-b-secondary " placeholder="Search Articles" required onChange={(e)=>setSearchText(e.target.value)}/>
        <div className=" inset-y-0 left-0 flex items-center pl-3 ">
            <button onClick={(e)=>searchHandler(e)}><AiOutlineSearch/></button>
        </div>
    </div>

    </nav>
  )
}
