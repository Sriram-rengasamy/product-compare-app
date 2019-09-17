export const fetchProducts = () =>  
    dispatch => fetch(`products.json`)
                .then(response => response.json())
                .then(response => dispatch({
                    type: 'FETCH_PRODUCTS',
                    payload: response.products
                }))
