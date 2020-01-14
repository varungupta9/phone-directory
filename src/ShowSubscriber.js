import React ,{Component} from 'react';
import Header from "./Header";
import "./ShowSubscriber.css";

class ShowSubscriber extends Component{
 render(){  
  return (
     
     <div className="component-container">
     <Header heading="Phone Directory" />
     <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
           
            </div>
            {
              this.props.subscribersList.map(sub =>{
                return  <div className="grid-container" key={sub.id}>
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item"><button className="grid-item-button">Delete</button></span>
                </div>
              })
            }

      </div>
      </div>
  )
}
}
export default ShowSubscriber;

