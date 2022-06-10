import { useParams } from 'react-router-dom'
import '../Payment/Payment.css'


export const Payment = () => {
const {cost} = useParams();

    return(
        <div>
            <h1>Payment page - {cost}</h1>
        </div>
    )
}