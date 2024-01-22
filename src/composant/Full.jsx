
// import ImageAvatar from "./ImageAvatar"
import Icon from "./icon"
import Tweet from "./tweet"
import Verified from "./verified"
import ImageAvatar from "./ImageAvatar"
import Tittle from "./tittle"
import ImageTweet from "./imgTweet"
import IconReaction from "./IconReaction"

function Full({data}) {


  return (
    <>
      <div className='p-4 flex border border-gray-700'>
        <div>
          <ImageAvatar className="w-10 h-10 ml-2 mt-2 w-full" src={data.author_avatar} />
        </div>
        <div className=" w-1/1 pt-4">
          <Tittle data = {data}/>
          <p className='text-white'>{data.text}</p>
          {data.image && (
          <ImageTweet  clas='w-full h-60 rounded-md overflow-hidden' src={data.image} />
          )}
          <Icon />
        </div>
      </div>
    </>

  )
}

export default Full