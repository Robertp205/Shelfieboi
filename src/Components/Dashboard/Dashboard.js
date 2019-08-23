import React, {Component} from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    
    render(){
        // const mapppedProducts = this.props.product.map((prod,i) => {
        //     return (
        //         <Product key={i} prod={prod}/>

        //     )
        // })
        return (
            <div>
                Dashboard
                <Product/>
                {/* {mapppedProducts} */}
            </div>
        )
    }
}