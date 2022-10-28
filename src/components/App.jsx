import { Statistics } from "./Statistics/Statistis"
import { Component } from 'react';
import { FeedbackOpthions } from "./Statistics/FeedbackOptions"
import { Notification } from "./Statistics/Notification/Notification"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    
  };

handleChange = event=>{
    const {name} = event.target;

    this.setState(state => {
     return{ [name]: state[name]+ 1}}
)};

countTotalFeedback () {
    return this.state.good + this.state.neutral + this.state.bad
};

countPositiveFeedbackPercentage(){
    return this.state.good/this.countTotalFeedback()*100
}

  render(){
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
          padding: '10px',
        }}>
          <div style={{
          fontSize: '20px',
        }}><Statistics chenge = {this.handleChange} appState = {this.state}/></div>
          {this.countTotalFeedback()?<div><FeedbackOpthions good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/></div>:<div><Notification message="There is no feedback"/></div>}
      </div>
    );
  };
  }