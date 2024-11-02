import { createAction, props } from "@ngrx/store";

import { ProductInterface } from "../../module/product-interface";



export const DescProduct = createAction("[Product Page] display product" ,props<{product:ProductInterface|{}}>())
export const OpenLogginScreen = createAction("[Login Component] openLogin" , props<{loggedIn:boolean}>())
export const addToCard = createAction("Product Added [View Page]" , props<{card:ProductInterface}>())
export const userDeatils = createAction("user [User]" , props<{user:Object}>())