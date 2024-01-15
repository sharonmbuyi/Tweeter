import Verified from "./verified";

export default function Tittle({data}){
    return(
        <div className="flex text-white space-x-1">
            <div className="font-bold">{data.source}</div>
            <Verified/>
            <p className="text-gray-600">{"@"+data.source}</p>
            <div className="text-gray-600">{data.date}</div>
        </div>
    )
}