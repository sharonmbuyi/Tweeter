import { Link, NavLink } from "react-router-dom"
import Trends from "./Trends"
NavLink
export default function SideBars() {
  return (
    <div className='w-1/5  h-auto'>
      <div className=" fixed w-1/5  h-auto ">
        <div className=' flex  flex-col gap-10 pl-20'>
          <div className=''>
            <Trends src="src/assets/Twitter.svg" />
          </div>
          <Link to= "/home/"className='flex flex-row gap-4 hover:bg-gray-600 w-36  rounded-full'>
            <Trends src="src/assets/Home-Fill.png" />
            <h2 className='text-white font-bold'>HOME</h2>
          </Link>
          <div className='flex flex-row gap-4 hover:bg-gray-600 w-32 rounded-full'>
            <Trends src="src/assets/Fill.png" />
            <h2 className='text-white font-bold'>Explore</h2>
          </div>
          <div className='flex flex-row gap-4 hover:bg-gray-600 w-36 rounded-full'>
            <img src="src/assets/Notifications.png" />
            <h2 className='text-white font-bold'>Notifications</h2>
          </div>
          <div className='flex flex-row gap-4 hover:bg-gray-600 w-32 rounded-full'>
            <img src=" src/assets/Messages.png" />
            <h2 className='text-white font-bold'>Messages</h2>
          </div>
          <div className='flex flex-row gap-4 hover:bg-gray-600 w-32 rounded-full'>
            <Trends src=" src/assets/Bookmarks.png" />
            <h2 className='text-white font-bold'>Bookmarks</h2>
          </div>
          <div className='flex flex-row gap-4 hover:bg-gray-600 w-32 rounded-full'>
            <Trends src="src/assets/Lists.png" />
            <h2 className='text-white font-bold'>LIsts</h2>
          </div>
          <Link to="/home/profil" className='flex flex-row gap-4 hover:bg-gray-600 w-32 rounded-full'>
            <Trends src="src/assets/Profile.png" />
            <h2 className='text-white font-bold'>Profile</h2>
          </Link>
          <div className='flex flex-row gap-4 hover:bg-gray-600 w-32 rounded-full'>
            <Trends src="src/assets/More.png" />
            <h2 className='text-white font-bold'>More</h2>
          </div>
          <div className="">
            <button className=" bg-blue-500  text-white font-bold py-3 px-20 rounded-full">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}