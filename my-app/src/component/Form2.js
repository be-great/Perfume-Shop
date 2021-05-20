import React, { Component } from 'react'
import axios from 'axios';

export default class Form2 extends Component {
    state = {
        name: '',
      }
    
      handleChange = event => {
        this.setState({ name: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const card = {
          number: this.state.name,
        };
    
        axios.post(`https://60a6a7aab970910017eb21ff.mockapi.io/api/busket/Cards`, { card })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
     
     
      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <div>
            <label>
             Card number
             </label>
             <input type="text" name="name" onChange={this.handleChange} />
              </div>
              
              <label>
               Buy By 
             </label>
             <div>
              <button  type="submit" className="add" >Card</button>
            </div>
            </form>
            <button className="remove">Cash</button>
          </div>
        )
      }
    }
