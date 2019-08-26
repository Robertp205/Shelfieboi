import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from "./Components/Form/Form"
import Header from "./Components/Header/Header"
import axios from 'axios';




class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    }
  }

  componentDidMount =()=>{
    axios.get('/api/inventory')
        .then(res =>{
            this.setState({
                inventory: res.data
            })
        })
  }





  render(){
    return (
    <div className='body'>
      <Header/>

      
      <Dashboard/>
      <Form/>
    </div>
        
    )
  }
}
 

export default App;
