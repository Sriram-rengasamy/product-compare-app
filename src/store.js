import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './containers/reducers';
import thunk from 'redux-thunk';

export default (initialState = {products : []}) => {
    const middleware = [thunk];
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware)
             ,window.__REDUX_DEVTOOLS_EXTENSION__ && 
             window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    return store;
}