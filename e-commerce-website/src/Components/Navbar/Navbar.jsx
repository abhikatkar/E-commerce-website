
import "../Navbar/Navbar.css"
import { BsFillHandbagFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";


export const Navbar = () => {

    const {value,user}  = useSelector((store) => store.value);

    return(
        <div className="nav">

          <Link to={"/"}>
          <div className="nav-name">Mobile Shop</div>
          </Link>

              <Link to={"/detail"}> 
          <div className="nav-detail">Products Detail</div>
          </Link>
         
          

        <Link to={"/bag"}>
          <div className="nav-bag"><BsFillHandbagFill/></div>
          </Link>

         {
             value ?
             <div className="user-pic"> <img src={user} alt="" /> </div>
             :
             <Link to={"/signin"}>
          <div className="nav-acc"><MdAccountCircle/></div>
          </Link>
         }
          
        </div>
    )
}