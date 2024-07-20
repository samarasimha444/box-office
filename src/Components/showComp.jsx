import { Link } from "react-router-dom"
let ShowComp=({data,query})=>{
    return (
        <div key={data.show.id}>
            <h1>{data.show.name}</h1>
            <div>{data.show.id}</div>
            <Link to={`/show/${query}/${data.show.id}`}>read more</Link>
            <button>stare me</button>
        </div>
    )
}
export default ShowComp;