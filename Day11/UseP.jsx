import { useParams } from "react-router-dom";

function Usep(){
    const{id}=useParams();
    return <h2>User id: {id}</h2>
}
export default Usep;