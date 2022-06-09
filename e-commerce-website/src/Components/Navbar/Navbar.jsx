
import "../Navbar/Navbar.css"
import { BsFillHandbagFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';



export const Navbar = () => {

    return(
        <div className="nav">
          <div className="nav-name">Mobile Shop</div>
          <div className="nav-detail">Products Detail</div>
          <div className="nav-bag"><BsFillHandbagFill/></div>
          <div className="nav-acc"><MdAccountCircle/></div>

          
        </div>
    )
}