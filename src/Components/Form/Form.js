import React, { Component } from 'react'
import './Form.css'
import axios from 'axios'

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

    handleAddInventory = () => {
        console.log('o2')
        axios.post('/api/inventory',{ name: this.state.name, price: this.state.price, imgurl: this.state.imgurl}).then(res => {
            this.setState({inventory: res.data})
        })

        this.setState({name: ""});
        this.setState({price: 0});
        this.setState({imgurl: ''});
        
        
    }

    updateInventory =(id, obj)=> {
        console.log('o2')
        axios.put(`/api/inventory/${id}`, obj).then(response => {
            this.setState({
                name: response.data,
                price: response.data,
                imgurl: response.data
            })
        })
        .catch(err =>{
            console.log(err)})
        
    }




    render() {
        
        return (
            <div className="yeet-box">
                <input placeholder='Image URL'  onChange={()=> this.update_img}></input>
                <input placeholder='Name' onChange={()=> this.update_name}></input>
                <input placeholder='price'  onChange={()=> this.update_price}></input>
                <button onClick={()=>this.resetState()}>Cancel</button>
                <button onClick={()=> this.handleAddInventory()}>Add to Inventory</button>
            </div>
        )
    }
}
