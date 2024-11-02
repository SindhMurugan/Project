import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
// import { ProductInterfaceDes } from "./app.reducer";



export const setSelect = createFeatureSelector<AppState>('product')

export const  getData = createSelector(
    setSelect , 
    (data:AppState)=>data.product
)

export const getLogged = createSelector(
    setSelect   ,
    (data:AppState)=> data.loggedIn
)


export const cardItem = createSelector(
    setSelect , 
    (data:AppState) => data.cardItem
)

export const currentUser = createSelector(
    setSelect,
    (data:AppState) => data.cardItem
)