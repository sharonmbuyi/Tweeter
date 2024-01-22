
import './App.css'
import React from 'react';
import ImageAvatar from './composant/ImageAvatar';
import Avatar from './composant/avatar';
import Verified from './composant/verified';
import Tittle from './composant/tittle';
import Tweet from './composant/tweet';
import Icon from './composant/icon';
import ImageTweet from './composant/imgTweet';
import Full from './composant/Full';
import IconReaction from './composant/IconReaction';
import SideBar from './composant/sideBar';
import Trends from './composant/Trends';
import SideBars from './composant/sideBars';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './composant/home';
import Profil from './Profil';
// import Home from './composant/home';
// import Profil from './Profil';


function App() {
  // 

  return (
    <>
      <Router>
        <div className=" h-screen flex  justify-center">
          <SideBars />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/profil' element={<Profil />} />
          </Routes>
          <div className=" w-1/5  h-auto ">
            <div className=" flex w-5/5 h-12 p-4 bg-gray-900  rounded-full overflow-hidden m-4 p-2 gap-2" >
              <div className=''>
                <img src="src/assets/Search.png" alt="" />
              </div>
              <input type="text" className="w-full bg-gray-900  text-white rounded-md overflow-hidden p-2 outline-none   rounded-full" placeholder="serach Twitter" />
            </div>
            <div className='flex flex-col gap-6 bg-gray-900 rounded-md overflow-hidden m-4 p-2'>
              <div className='flex justify-between items-start'>
                <h3 className='text-white font-bold'>Trends for you</h3>
                <img src="src/assets/Settings.png" />
              </div>
              <div>
                <SideBar />
                <SideBar />
                <SideBar />
                <SideBar />
                <h3 className="text-blue-500 text-xl font-bold pt-8">Show more</h3>
              </div>

            </div>
            <div className='bg-gray-900 rounded-md m-4 p-2'>
              <h3 className='text-white text-xl font-bold'>Who to follow</h3>

              <div className='flex justify-between items-start'>
                <div className='flex'>
                  <ImageAvatar className="pt-4" src="Tweet-Profile-Photo.png" />
                  <div className="">
                    <div className='flex'>
                      <h3 className='text-white pt-6'>The New York </h3>
                      <Verified className=" " />
                    </div>
                    <p className="text-gray-600">@nytimes</p>
                  </div>
                </div>
                <button className=" bg-white mt-4 text-gray-900 font-bold py-2 px-4 rounded-full">
                  follow
                </button>
              </div>
              <div className='flex justify-between items-start'>
                <div className='flex'>
                  <ImageAvatar className="pt-4" src="Profile-Photo(1.5).png" />
                  <div className="">
                    <div className='flex'>
                      <h3 className='text-white pt-6'>CNN</h3>
                      <Verified className="pt-4" />
                    </div>
                    <p className="text-gray-600">@CNN</p>
                  </div>
                </div>
                <button className=" bg-white mt-4 text-gray-900 font-bold py-2 px-4 rounded-full">
                  follow
                </button>
              </div>

              <div className='flex justify-between items-start'>
                <div className='flex flex-col'>
                  <div className='flex items-center'>
                    <ImageAvatar className="pt-4" src="Profile-Photo(1).png" />
                    <div className="">
                      <div className='flex'>
                        <h3 className='text-white pt-6'>Twitter</h3>
                        <Verified className="pt-4" />
                      </div>
                      <p className="text-gray-600">@Twitter</p>
                    </div>
                  </div>
                </div>
                <button className="bg-white mt-4 text-gray-900 font-bold py-2 px-4 rounded-full">
                  follow
                </button>

              </div>
              <h3 className="text-blue-500 text-xl font-bold pt-8">Show more</h3>

            </div>
          </div>

        </div>
      </Router>
    </>
  )
}
export default App
