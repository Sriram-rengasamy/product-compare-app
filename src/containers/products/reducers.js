const INITIAL_STATE = {
    products: []
  };

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        // case 'FETCH_PRODUCTS':
        //     return ([    ...state,
        //          ...action.payload 
        //     ]);
        case 'FETCH_PRODUCTS':
            return { ...state,
                   products: action.payload
               }
        default :
            return state;
    }
}