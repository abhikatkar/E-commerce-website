import { useDispatch, useSelector } from "react-redux"
import { Footer } from "../Footer/Footer"
import { Navbar } from "../Navbar/Navbar"
import { store } from "../Redux/store"
import { removeData } from "../Redux/Bag_Data/action"
import { Link } from "react-router-dom"

import '../Bag/Bag.css';

export const Bag = () => {


    const {bag_data} = useSelector((store)=> store.bag_data)
    const dispatch = useDispatch();
     let cost = 0;
     console.log(bag_data.length)

    return(
        bag_data.length === 0 ? 
        <div>
            <Navbar/>
              <div className="img-box">
                  <h1>Your bag is empty</h1>
                  <img src="https://thumbs.dreamstime.com/b/empty-word-keyboard-buttons-96113765.jpg" alt="" />
              </div>
            <Footer/>
        </div> 
         :
        <div>
            <Navbar/>
          
             <div className="big-box">
                 <h1>My Bag</h1>
                

            <div className='cont'>
                
              { bag_data.map((e)=>{
                    return(
                        <div className='box2'>
                     <img src={e.img2} alt="" />
                     <h5>{e.title}</h5>
                     <h4> Company - {e.company}</h4>
                     <h4>Rs {e.price}</h4>
                     <h5>Star - {e.star}/5</h5>
                     
                     <button onClick={()=>{
                         dispatch(removeData(e._id))
                     }}>Remove from bag</button>
                     {cost+=e.price}
                     
                </div>
                
                    )
                  })
              }
              
             </div>

               <div className="total-cost">
               <h1>Bag Total - Rs {cost}</h1>
               <h1>Shipping Charge - Rs 100</h1>
               <h1>Grand Total -  Rs {cost=cost+100}</h1>
               <Link to={`/payment/${cost}`}>
               <button>PROCEED TO CHECKOUT</button>
               </Link>
               </div>

            <Footer/>
        </div>
        </div>
    )
}