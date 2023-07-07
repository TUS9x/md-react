import {ADD_COLOR,ADD_BRAND,ADD_SORTBY,FILTER_SORT_PRODUCTS,SEARCH_PRODUCTS} from './constants'




export const addColor =(payload) =>({
            type: ADD_COLOR,
            payload
            })
export const addBrand =(payload) =>({
            type: ADD_BRAND,
            payload
            })
export const addSortby =(payload) =>({
    type: ADD_SORTBY,
    payload
    })

export const filterSortProducts = (payload)=>({
    type: FILTER_SORT_PRODUCTS,
    payload

})
export const searchProduct = (payload)=>({
    type: SEARCH_PRODUCTS,
    payload

})