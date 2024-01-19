export default function NavBar(props){
    return (
        <div>
            <img src={props.src} alt= {props.alt} />
            <h3 className="text-white">160k</h3>
        </div>
    )
}