

import { STORE_DATA} from "./action";

const initState = {
    data:[],
}

export const dataReducer = (store=initState, {type,payload})=>{

    switch(type){

        case STORE_DATA:
            return {...store, data:payload}
            
        default:
            return store    

    }

}
