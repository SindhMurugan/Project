// import { ProductInterfaceDes } from "./action/app.reducer"

import { ProductInterface } from "../module/product-interface";

export interface AppState {
    product?:ProductInterface|{},
    loggedIn?:boolean,
    cardItem?:ProductInterface[],
    userDeatils?:object
}