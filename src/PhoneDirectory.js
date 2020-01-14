import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscriber from './ShowSubscriber';
import {BrowserRouter as Router , Route} from 'react-router-dom';


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
       
        <Router>
            <div className="main-conatiner">
     <Route exact path='/' render={(props)=> <ShowSubscriber {...props} subscribersList={this.state.subscribersList}/> }/>
     <Route exact path='/add' render={({history},props)=> <AddSubscriber history={history}{...props} addSubsrciberHandler={this.addSubsrciberHandler}/> }/>

     </div>
     </Router>
    )
    }
}
export default PhoneDirectory;