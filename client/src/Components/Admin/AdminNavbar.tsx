
const navItems = [
  {
    title: "Admin",
    link: "/admin"
  },
  {
    title: "Articles",
    link: "/admin/articles"
  },
  {
    title: "Pending",
    link: "/admin/pending"
  },
]
function AdminNavbar() {
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


    </nav>
  )
}

export default AdminNavbar