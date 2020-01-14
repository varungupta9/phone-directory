import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscriber from './ShowSubscriber';

class PhoneDirectory extends Component
{
    constructor()
    {
        super();
        this.state={
            subscribersList:[{id:1,
            name: "Varun",
            phone: '99999999'},
            {id:2,
                name: "Aarun",
                phone: '922949999'}]
        }
    }
    addSubsrciberHandler=(newSubscriber)=>
    {
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length>0)
        {
            newSubscriber.id=subscribersList[subscribersList.length-1].id+1;
        }
        else
        {
            newSubscriber.id=1;
        }
        subscribersList.push(newSubscriber);
       this.setState({subscribersList:subscribersList});
    }
    render(){
    return(
     <ShowSubscriber  subscribersList  ={this.state.subscribersList}/>
    )
    }
}
export default PhoneDirectory;