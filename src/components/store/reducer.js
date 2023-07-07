import{ADD_COLOR, ADD_BRAND,ADD_SORTBY,FILTER_SORT_PRODUCTS, SEARCH_PRODUCTS} from "./constants"

function reducer (state,action){
    switch(action.type){
        case ADD_COLOR:
            return({
                ...state,
                condition: {...state.condition,color: action.payload}
            })

        case ADD_BRAND:
            return({
                ...state,
                condition: {...state.condition,brand: action.payload}
        })
        case ADD_SORTBY:
            return({
                ...state,
                condition: {...state.condition,sortby: action.payload}
        })
       case FILTER_SORT_PRODUCTS:
        const brand = action.payload.brand
        const color = action.payload.color
    //xu ly filter
        var updateProducts = [...state.products]
         updateProducts = updateProducts.filter(items=> items.name.toLowerCase().includes(brand.toLowerCase()))
         updateProducts = updateProducts.filter(items=>items.name.toLowerCase().includes(color.toLowerCase()))
    //xu ly sort
        if(action.payload.sortby === 'priceLowToHigh'){ 
            updateProducts.sort((a,b)=> b.price*1 - a.price*1 ) 
        }
        if(action.payload.sortby === 'priceHighToLow'){ 
            updateProducts.sort((a,b)=> a.price*1 - b.price*1 )
        }
        if(action.payload.sortby === 'productName'){ 
            updateProducts.sort((a,b)=> {
                const nameA=a.name.toUpperCase()
                const nameB= b.name.toUpperCase()
                if(nameA<nameB){return -1}
                if(nameA>nameB){return 1}
                return 0;
            } )
        }
      

            return({
                ...state,
                productsRender: updateProducts
              
            })
        case SEARCH_PRODUCTS:
            const newProduct = state.products.filter(items=>JSON.stringify(items).toLowerCase().includes(action.payload.toLowerCase()))
            return({
                ...state,
                productsRender: newProduct
            })
       


        default:
            throw new Error ('Invailt error')
    }
}

export default reducer