import { createReducer, on } from "@ngrx/store";
import { ProductInterface } from "../../module/product-interface";
import { authAction } from "./action-types";
import { AppState } from "../app.state";
import { Action } from "rxjs/internal/scheduler/Action";
import { state } from "@angular/animations";
import { addToCard, userDeatils } from "./app.actions";


// export interface ProductInterfaceDes {
//     product:ProductInterface

// }

export const InitialState: AppState={
    product:{},
    loggedIn:false
}

export const CreateReducer = createReducer(
    InitialState , 

    
    on(authAction.DescProduct, (state , action)=>{
        // console.log("ooooooooo")
      
        return {
            product:action.product
        }
    }),

    on(authAction.OpenLogginScreen , (state , action)=> {
        return {
            loggedIn:action.loggedIn

        }
    }),

    on(addToCard , (state , action)=> ({
            ...state,
    
            card:action.card
        })
    ),

    on(userDeatils , (state, action)=> ({
        ...state ,
        user:action.user
    }))

)

