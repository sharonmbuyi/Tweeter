import Tittle from "./tittle"
import ImageAvatar from "./ImageAvatar"
import Icon from "./icon"
import ImageTweet from "./imgTweet"
import Tweet from "./tweet"
export default function Full (){
    return(
        <div className='  flex gap-4  mb-4 border-b-2 border-gray-500'>
            <div>
            <ImageAvatar clas="w-12 h-12 ml-2 mt-2" src="src/assets/Capture d’écran du 2023-12-30 13-29-35.png" className="w-full" />
            </div>
            <div className=" w-1/1 pt-4">
              <Tittle />
            <Tweet />
              <ImageTweet src="src/assets/Img.svg"/>
              <Icon />
            </div>
          </div>
    )
}