import star_src from "./star.png";
import  unstar from "./star (1).png"
let StarComp=()=>{
      return (
        <img src={unstar} height={20} width={20}></img>
      )
}
let UnstarComp=()=>{
    return (
        <img src={star_src} height={20} width={20}></img>
    )
}
export {StarComp,UnstarComp};