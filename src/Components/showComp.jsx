import { Link } from "react-router-dom"
let ShowComp=({data,query})=>{
    return (
        <div>
            <h1>{data.show.name}</h1>
           <img src={data.show.image && data.show.image.medium} alt="no image"></img>
            <Link to={`/show/${query}/${data.show.id}`}>read more</Link>
            <button>stare me</button>
        </div>
    )
}
export default ShowComp;