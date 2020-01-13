import React, { Component } from 'react';
import './Header';
import Header from './Header';
import './AddSubscriber.css';

class AddSubscriber extends Component{
    render(){
        return(
                  <div>
                      <Header heading="Add Subscriber"/>
                      <div className="component-body-container">
                          <button className="custom-btn">Back</button>
                          <form className="subscriber-form">
                              <lable htmlFor="name" className="lable-control">Name:</lable><br/>
                              <input id="name" type="text" className="input-control"></input><br/><br/>
                              <lable htmlFor="phone" className="lable-control">Phone:</lable><br/>
                              <input id="phone" type="text" className="input-control"></input><br/><br/>
                              <div className="subscriber-info-container">
                                  <span className="subscriber-to-add-heading">Subscriber to be added:</span><br/>
                                  <span className="subscriber-info">Name:</span><br/>
                                  <span className="subscriber-info">Phone:</span>
                              </div>
                              <button type="submit" className="custom-btn add-btn">Add</button>
                          </form>
                      </div>
                  </div>
            )
    }
  
}
export default AddSubscriber;