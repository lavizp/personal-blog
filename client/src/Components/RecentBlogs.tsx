import Article from "./Article"

export default function RecentBlogs() {
  return (
    <div className='w-full h-auto p-24 pt-10'>
        <h3 className="text-xl font-bold">Recent Blog Posts</h3>
        <div className="flex justify-between flex-wrap items-center">
            <Article/>
            <Article/>
            <Article/>

        </div>
    </div>
  )
}
