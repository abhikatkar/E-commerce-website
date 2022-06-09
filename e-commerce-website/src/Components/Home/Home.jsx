
import '../Home/Home.css';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { storeData } from '../Redux/Data/action';
import { useEffect } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';




export const Home = () => {

    const dispatch = useDispatch();
    const {data} = useSelector((store) => store.data)
   useEffect(()=>{
       store();
   },[])


    function store(){
        axios.get('https://ebay-project3.herokuapp.com/data').then(({data})=>{dispatch(storeData(data))}).catch((err)=>{console.log(err)})
    
    }

    



    return(
        <div>

       

       <Navbar/>


        <div className='main'>
              <div className='box1'>
                  <img src="https://www.apple.com/v/iphone-13-pro/f/images/overview/design/finishes_1_alpine_green__bxgqurawflau_large_2x.jpg" alt="" />
              </div>
              <div className='box1'>
                  <img src="https://m.media-amazon.com/images/I/81I3w4J6yjL._AC_UY436_FMwebp_QL65_.jpg" alt="" />
              </div>
              <div className='box1'>
                  <img src="https://m.media-amazon.com/images/I/911TJ1CDbLL._AC_UY436_FMwebp_QL65_.jpg" alt="" />
              </div>
              <div className='box1'>
                  <img src="https://m.media-amazon.com/images/I/81QqVNKWtML._AC_UY436_FMwebp_QL65_.jpg" alt="" />
              </div>
              <div className='box1'>
                  <img src="https://m.media-amazon.com/images/I/61gqtjnoKoL._AC_UY436_FMwebp_QL65_.jpg" alt="" />
              </div>
              <div className='box1'>
                  <img src="https://m.media-amazon.com/images/I/7155Pasn1aL._AC_UY436_FMwebp_QL65_.jpg" alt="" />
              </div>



              <div className='box1'>
                  <img src="https://m.media-amazon.com/images/I/71g08UeRkRL._AC_UL640_FMwebp_QL65_.jpg" alt="" />
              </div>
              <div className='box1'>
                  <img src="https://m.media-amazon.com/images/I/71oMvZuueHL._AC_UY436_FMwebp_QL65_.jpg" alt="" />
              </div>
              <div className='box1'>
                  <img src="https://m.media-amazon.com/images/I/71wevQRS5qL._AC_UY436_FMwebp_QL65_.jpg" alt="" />
              </div>
              <div className='box1'>
                  <img src="https://m.media-amazon.com/images/I/81QqVNKWtML._AC_UY436_FMwebp_QL65_.jpg" alt="" />
              </div>
              <div className='box1'>
                  <img src="https://m.media-amazon.com/images/I/61gqtjnoKoL._AC_UY436_FMwebp_QL65_.jpg" alt="" />
              </div>
              <div className='box1'>
                  <img src="https://m.media-amazon.com/images/I/7155Pasn1aL._AC_UY436_FMwebp_QL65_.jpg" alt="" />
              </div>

        </div>






      <Footer/>



        </div>
    )
}