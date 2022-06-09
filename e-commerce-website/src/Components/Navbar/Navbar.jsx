
import "../Navbar/Navbar.css"
import { BsFillHandbagFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
import {Link} from "react-router-dom";


export const Navbar = () => {

    return(
        <div className="nav">

          <Link to={"/"}>
          <div className="nav-name">Mobile Shop</div>
          </Link>

          <Link to={"/detail"}> 
          <div className="nav-detail">Products Detail</div>
          </Link>
          <div className="nav-bag"><BsFillHandbagFill/></div>
          <div className="nav-acc"><MdAccountCircle/></div>

          
        </div>
    )
}