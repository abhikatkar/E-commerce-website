
import { useDispatch, useSelector } from 'react-redux'
import '../Detail/Detail.css'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import { bagData, removeData } from '../Redux/Bag_Data/action'
import { store } from '../Redux/store'


export const Detail = ()=>{

const {data} = useSelector((store) => store.data);
const dispatch = useDispatch();


    return(
        <div>
            <Navbar/>

            <div className='cont'>
              { data.map((e,i)=>{
                    return(
                        <div className='box2'>
                     <img src={e.img2} alt="" />
                     <h5>{e.title}</h5>
                     <h4> Company - {e.company}</h4>
                     <h4>Rs {e.price}</h4>
                     <h5>Star - {e.star}/5</h5>
                     <button className='added'>added</button>
                     <button className='add' onClick={()=>{
                         dispatch(bagData(e))
                         document.getElementsByClassName("added")[i].style.display = "block"
                         document.getElementsByClassName("add")[i].style.display = "none"
                     }}>Add to bag</button>
                </div>
                    )
                  })
              }
             </div>


            <Footer/>
        </div>
    )
}