import React, {useEffect} from 'react';
import {connect}  from 'react-redux';
import {fetchProducts} from '../../containers/products/actions';
import Product from '../product';
import './styles.css';

// class ProductList extends React.Component{
//     componentDidMount() {
//         this.props.fetchProducts();
//       }

//     render(){
//         const products = this.props.products;
//         console.log(products);
//         return <div>
//                  <div >
//                     {products.products  &&  this.props.products.products.length > 0 &&
//                         this.props.products.products.map(product =>  <Product key={product.id} prod={product} />)}
//                  </div> 
//         </div>
//     }
// }

const ProductList = (props) => {
    const products = props.products;

    useEffect( ()=> {
        props.fetchProducts();
    }, [] )


    return(
        <div className="productList">
           
                               {products.products  &&  props.products.products.length > 0 &&
                        props.products.products.map(product =>  <Product key={product.id} prod={product} />)}
            

        </div>
    )
}

const mapStateToProps = (state) => ({
    products : state.products
  })
  
  export default connect(
    mapStateToProps,
    {fetchProducts}
  )(ProductList);
  