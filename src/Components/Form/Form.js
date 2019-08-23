import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            price: 0,
            imgurl: '',
        }
    }
    update_name = (name)=> {
        this.setState(({
            name: name
        }))
    }

    update_price = (price)=> {
        this.setState(({
            price: price
        }))
    }

    update_img = (imgurl)=> {
        this.setState(({
            imgurl: imgurl
        }))
    }

    resetState = ()=> {
        console.log('hit')
        this.setState({name: ''})
        this.setState({price: 0})
        this.setState({imgurl:''})
    }




    render() {
        
        return (
            <div className="yeet-box">
                <input placeholder='Image URL'  onChange={()=> this.update_img}></input>
                <input placeholder='Name' onChange={()=> this.update_name}></input>
                <input placeholder='price'  onChange={()=> this.update_price}></input>
                <button onClick={()=>this.resetState()}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}
