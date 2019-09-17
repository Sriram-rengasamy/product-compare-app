import React from 'react';
import './styles.css';

class Product extends React.Component{
    render(){
        return (
            <div className="product">
                {/* {this.props.prod.name} */}
                <img src={this.props.prod.image}></img>
                <div>{this.props.prod.price}</div>
                <div>{this.props.prod.name}</div>
                <div>{this.props.prod.description}</div>
            </div>
        )
    }
}

export default Product;