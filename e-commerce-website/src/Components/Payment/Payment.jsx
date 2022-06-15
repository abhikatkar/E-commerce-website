import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import '../Payment/Payment.css'


export const Payment = () => {
const {cost} = useParams();
const navi = useNavigate();

function call(){
    alert("YOUR ORDER HAS BEEN PLACED")
    window.location.href = "http://localhost:3000/"
}

    return(
        <div>
            <Navbar/>
            

            <div className='form'>
                 <h1>CHECKOUT</h1>
                <hr />
                <h2>SHIPPING ADDRESS</h2>
                <label htmlFor="">First Name</label>
                <input type="text" /> <br />
                <label htmlFor="">Last Name</label>
                <input type="text" /><br />
                <label htmlFor="">Address</label>
                <input type="text" /><br />
                <label htmlFor="">City</label>
                <input type="text" /><br />
                <label htmlFor="">Phone</label>
                <input type="number" /><br />
                <hr />
                <h2>CARD DETAILS</h2>
                <label htmlFor="">Card Number</label>
                <input type="number" placeholder='1234 1234 1234 1234' /> <br />
                <label htmlFor="">Expiration Date</label>
                <input type="number" placeholder='MM/YY' /><br />
                <label htmlFor="">Cardholder's Name</label>
                <input type="text" /><br />
                <label htmlFor="">Security Code</label>
                <input type="number" placeholder='CVC' /><br />
                <hr />

                <h2>Grand Total - {cost}</h2>
                <button onClick={call}>PLACE ORDER</button>
                 
            </div>




            <Footer/>
        </div>
    )
}