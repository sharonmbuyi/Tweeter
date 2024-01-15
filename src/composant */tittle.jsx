import Verified from "./verified";

export default function Tittle(){
    return(
        <div className="flex text-white space-x-1">
            <div className="font-bold">CNN</div>
            <Verified/>
            <p className="text-gray-600">@CNN.</p>
            <div className="text-gray-600">7 m</div>
        </div>
    )
}