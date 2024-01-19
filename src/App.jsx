
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


function App() {
  let tab = [

    {

      "author_avatar": "https://picsum.photos/200?random=1604299903000",

      "source": "Twitter",

      "date": 1604299903000,

      "favorites": "92746",

      "id": "1323155810910982145",

      "isVerified": true,

      "replies": "24785",

      "retweets": "16287",

      "text": "...As I said at the debate – “Will you remember that Texas?Pennsylvania? Ohio? New Mexico?” I will always protect American Energy and American Jobs! Get out and VOTE #MAGA!"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1609942590000",

      "source": "Apple",

      "date": 1609942590000,

      "favorites": "396603",

      "id": "1346822958006886400",

      "isVerified": false,

      "replies": "896",

      "retweets": "54694",

      "text": "Even Mexico uses Voter I.D.",

      "image": "https://picsum.photos/1024/200?random=1346822958006886400"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1604231375000",

      "source": "Twitter for iPhone",

      "date": 1604231375000,

      "favorites": "124689",

      "id": "1322868385361891328",

      "isVerified": true,

      "replies": "8",

      "retweets": "22972",

      "text": "When I originally became your all time favorite President, the Great State of Michigan was hemorrhaging car companies and jobs. Plants were closing and moving to Mexico, and other places. No new plants for decades. I stopped the moves, &amp; now many plants are and have been built...",

      "image": "https://picsum.photos/200/800?random=1322868385361891328"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1604084613000",

      "source": "CNN",

      "date": 1604084613000,

      "favorites": "44842",

      "id": "1322252819299135488",

      "isVerified": false,

      "replies": "1024",

      "retweets": "9563",

      "text": "...a cheerleader for NAFTA – sending your auto Jobs to Mexico. He voted for China’s entry into the World Trade Organization – gutting your industries to finance China’s rise. HALF of all Michigan auto manufacturing jobs were ELIMINATED after the Biden-Backed NAFTA and China...",

      "image": "https://picsum.photos/200?random=1322252819299135488"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1603037689000",

      "source": "Trump D.",

      "date": 1603037689000,

      "favorites": 62414,

      "id": "1317861704819118080",

      "isVerified": false,

      "replies": "258",

      "retweets": 16811,

      "text": "Not my Wall, which will soon be finished (and Mexico will pay for the Wall!). Totally unrelated, but I think Steve will be just fine. By the way, is this the same job hopping Tim O’Brien that headed Mini Mike Bloomberg’s humiliating 2 Billion Dollar Presidential run? Debate prep! https://t.co/cQfEtszRrB"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1602377246000",

      "source": "Lauraine L.",

      "date": 1602377246000,

      "favorites": 34952,

      "id": "1315091604496158720",

      "isVerified": true,

      "replies": "85",

      "retweets": 10008,

      "text": "Yvette Herrell (@Yvette4Congress) is a proven fighter for New Mexico! She strongly supports our Brave Law Enforcement, Life and the Second Amendment. Strong on the Border and Trade, Yvette has my Complete and Total Endorsement! #NM02 https://t.co/77hjYfVWAB",

      "image": "https://picsum.photos/200?random=1315091604496158720"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1601996447000",

      "source": "Mexico City",

      "date": 1601996447000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",

      "retweets": 14359,

      "text": "NEW MEXICO! Today is the last day you can register to vote online or via mail. Make sure your vote counts! \nhttps://t.co/WwzdPhDkAZ"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1554075712000",

      "source": "New York Times",

      "date": 1554075712000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",

      "retweets": 14359,

      "text": "....However, if for any reason Mexico stops apprehending and bringing the illegals back to where they came from, the U.S. will be forced to Tariff at 25% all cars made in Mexico and shipped over the Border to us. If that doesn’t work, which it will, I will close the Border......."

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1604231375000",

      "source": "Twitter for iPhone",

      "date": 1601996447000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",

      "retweets": 14359,

      "text": "A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1548956601000",

      "source": "Samsung",

      "date": 1601996447000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",

      "retweets": 14359,

      "text": "A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle",

      "image": "https://picsum.photos/2048/1024?random=1313494418314457090"

    }

  ]

  return (
    <>
      <Router>
        <div className=" h-screen flex  justify-center">
          <SideBars />
          <div className="w-1/3 h-auto border-gray-700">
            <div>
              <div className="flex justify-between items-start border-b-2 border-gray-500 flex border border-gray-700 items-center justify-center">
                <img src="src/assets/Title.png" alt="blb" className='ml-6' />
                <img src="src/assets/Top-Tweets.svg" alt="blb" className='mr-6' />
              </div>

              <div className=" flex border border-gray-700">
                <ImageAvatar className="w-14 h-14 ml-2 mt-2" src="src/assets/lwahPXAA_400x400.jpg" />
                <div className=" w-4/5 p-4">
                  <input type="text" className="w-full bg-black text-white rounded-md p-2 outline-none" placeholder="what's happening" />
                </div>
              </div>

              <div className="flex justify-between border-b-2 border-gray-500 items-center p-4 border border-gray-700">
                <Avatar />
                <div className="ml-auto pr-10">
                  <button className=" bg-blue-800  text-gray-500 font-bold py-2 px-4 rounded-full">
                    Tweet
                  </button>
                </div>
              </div>
              {
                tab.map((data) => <Full key={data} data={data} />)
              }

            </div>
          </div>
          <div className=" w-1/5  h-auto border border-gray-700">
            <div className=" flex w-4/5 p-4 " >
              <div className='pt-2'>
                <img src="src/assets/Search.png" alt="" />
              </div>
              <input type="text" className="w-full bg-black text-white rounded-md overflow-hidden p-2 outline-none   rounded-full" placeholder="serach Twitter" />
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
                  <p className='text-white pt-6'>The new York time</p>

                  <Verified className='' />
                </div>
                <button className=" bg-white mt-4 text-gray-900 font-bold py-2 px-4 rounded-full">
                  follow
                </button>
              </div>
              <div className='flex justify-between items-start'>
                <div className='flex'>
                  <ImageAvatar className="pt-4" src="Profile-Photo(1.5).png" />
                  <p className='text-white pt-6'>CNN</p>

                  <Verified className='' />
                </div>
                <button className=" bg-white mt-4 text-gray-900 font-bold py-2 px-4 rounded-full">
                  follow
                </button>
              </div>
              <div className='flex justify-between items-start'>
                <div className='flex'>
                  <ImageAvatar className="pt-4" src="Profile-Photo(1).png" />
                  <p className='text-white pt-6'>Tweeter</p>

                  <Verified className='' />
                </div>
                <button className=" bg-white mt-4 text-gray-900 font-bold py-2 px-4 rounded-full">
                  follow
                </button>
              </div>
            </div>
          </div>

        </div>
        <Routes>
            <Route path='/home/' element={<Trends />} />
            <Route path='/home/profil' element={<Avatar />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
