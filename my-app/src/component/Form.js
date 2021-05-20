import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
   
      render() {
        return (
          <div>
            <form action="http://localhost:3000/Form2">
              <label>
               Gmail:
                <input type="email" name="gmail" />
              </label>
              <label>
               password:
                <input type="password" name="password" />
              </label>
              
              <button type="submit">Submit</button>
            </form>
          </div>
        )
      }
    }