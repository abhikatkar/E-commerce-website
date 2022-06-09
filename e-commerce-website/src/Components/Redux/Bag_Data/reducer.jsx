import { BAG_DATA, REMOVE_DATA} from "./action";

const initState = {
    bag_data:[],
    
}

export const bag_dataReducer = (store=initState, {type,payload})=>{

    switch(type){

        case BAG_DATA:
            return {bag_data:[...store.bag_data, payload]}
            
           case REMOVE_DATA:
               return {bag_data: store.bag_data.filter(({_id})=> _id!==payload)} 
        default:
            return store    

    }

}

// store.bag_data = [1,2,3,4,5]