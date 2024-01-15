
// import ImageAvatar from "./ImageAvatar"
import Icon from "./icon"
import Tweet from "./tweet"
import Verified from "./verified"
import ImageAvatar from "./ImageAvatar"
import Tittle from "./tittle"
import ImageTweet from "./imgTweet"
import IconReaction from "./IconReaction"

function Full({data}) {
  // const obj = {

  //   "author_avatar": "https://picsum.photos/200?random=1548956601000",

  //   "source": "Samsung",

  //   "date": 1601996447000,

  //   "favorites": 58201,

  //   "id": "1313494418314457090",

  //   "isVerified": true,

  //   "replies": "0",

  //   "retweets": 14359,

  //   "text": "A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle",

  //   "image": "https://picsum.photos/2048/1024?random=1313494418314457090"

  // }

  return (
    <>
      <div className='flex border border-gray-700'>
        <div>
          <ImageAvatar className="w-14 h-14 ml-2 mt-2 w-full" src={data.author_avatar} />
        </div>
        <div className=" w-1/1 pt-4">
          <Tittle data = {data}/>
          <p className='text-white'>{data.text}</p>
          <ImageTweet  clas='w-full h-60 rounded-md overflow-hidden' src={data.image} />
          <Icon />
        </div>
      </div>
    </>

































    // <div className="flex">
    //   <div>
    //     <ImageAvatar src={Start.author_avatar} alt="" />
    //   </div>
    //   <div>
    //     <div className="flex gap-2">
    //       <h2  className="text-white" >{Start.source}</h2>
    //       <Verified />
    //     </div>
    //     <Tweet text={Start.text} />
    //     <ImageAvatar src={Start.image} />

    //     <div className="flex gap-5">
    //       <ImageAvatar src="src/assets/Reply.svg" />
    //       <ImageAvatar src="src/assets/Retweet.svg" />
    //       <ImageAvatar src="src/assets/React.svg" />
    //       <ImageAvatar src="src/assets/Share.svg" />
    //     </div>
    //   </div>
    // </div>

    // <div className='  flex gap-4  mb-4 border-b-2 border-gray-500'>
    //     <div>
    //     <ImageAvatar clas="w-12 h-12 ml-2 mt-2" src="src/assets/Capture d’écran du 2023-12-30 13-29-35.png" className="w-Start" />
    //     </div>
    //     <div className=" w-1/1 pt-4">
    //       <Tittle />
    //     <Tweet />
    //       <ImageTweet src="src/assets/Img.svg"/>
    //       <Icon />
    //     </div>
    //   </div>
  )
}

export default Full