import ImageAvatar from "./composant/ImageAvatar"
import Avatar from "./composant/avatar"
import ImageTweet from "./composant/imgTweet"

export default function Profil() {
    return (
        <div className="w-1/3 h-auto border-gray-700 border border-gray-700">
            <div>
                <div className=" h-14 flex justify-between items-start border-b-2 border-gray-500 flex border border-gray-700 items-center justify-center">
                    <h3 className="text-white font-bold text-xl pl-10">Sharon Mbuyi</h3>
                </div>
                <div>
                    <div className="h-52 bg-gray-800">
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-start">
                        <div className="pl-4">
                            <ImageAvatar src="src/assets/lwahPXAA_400x400.jpg" className="mt-52 absolute w-32 h-32 top-0" />
                        </div>
                        <div className="">
                            <button className=" mt-4 text-white border border-gray-700 font-bold py-2 px-4 rounded-full">Edit profile</button>
                        </div>
                    </div>
                    <div className="pl-8 ">
                        <div className="">
                            <h3 className="text-white">Sharon Mbuyi</h3>
                            <p className="text-gray-500">@sharon_mbuyi</p>
                        </div>
                        <div>
                            <p className="text-white pt-6">Rien dans ce monde n'est impossible, peu importe d'où tu viens, tes rêves sont toujours valides</p>
                            <p className="text-gray-500 pt-4">Joined April 2023</p>
                            <div className="flex gap-6 pt-6">
                                <div className="flex gap-2">
                                    <p className="text-white">200</p>
                                    <p className="text-gray-500 ">Following</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="text-white">120</p>
                                    <p className="text-gray-500 ">Followers</p>
                                </div>
                            </div>
                            <div className="flex gap-20 pt-8">
                                <p className="text-gray-500">Posts</p>
                                <p className="text-gray-500">Replies</p>
                                <p className="text-gray-500">Highlights</p>
                                <p className="text-gray-500">Media</p>
                                <p className="text-gray-500">Likes</p>
                            </div>
                        </div>
                        <ImageTweet clas='w-full h-60 rounded-md overflow-hidden'  src="src/assets/Capture d’écran du 2024-01-15 20-45-43.png"/>
                    </div>
                </div>



            </div>
        </div>
    )
}
