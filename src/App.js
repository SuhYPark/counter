import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      text: "Count by 1",
    }
  }

//code goes here...methods
toggle = () => {
  if(this.state.text == "Count by 1"){
    this.setState({
      text: "Count by 2"
    });
  }

  else {
    this.setState({
      text: "Count by 1"
    });
  }
}


increment = () => {
  if(this.state.text == "Count by 1"){
      if(this.state.count >= 19){
        this.setState({count: 20});
      }
      else{
        this.setState({
          count: this.state.count + 1,
        });
      }
  }

  else {
    if(this.state.count >= 19){
    this.setState({count: 20});
    }
    else{
      this.setState({
        count: this.state.count + 2,
      });
    }
  }

}


decrement = () => {
  if(this.state.text == "Count by 1"){
      if(this.state.count >= 1){
        this.setState({
          count: this.state.count - 1,
        });
      }
      else{
        this.setState({count: 0});
      }
  }

  else {
    if(this.state.count <= 1){
    this.setState({count: 0});
    }
    else{
      this.setState({
        count: this.state.count - 2,
      });
    }
  }

}



// increment = () => {
//   if(this.state.text =="Count by 1"){
//     if(this.state.count==20){
//       this.setState({count: 20});
//     }
//
//     else {
//       this.setState({
//         count: this.state.count + 1,
//       });
//     }}
//   else {
//     if(this.state.count==20){
//       this.setState({count: 20});
//     }
//
//     else {
//       this.setState({
//         count: this.state.count + 2,
//       });
//   }
// }

// 
// decrement = () => {
//     if(this.state.count==0){
//       this.setState({count: 0});
//     }
//
//     else {
//       this.setState({
//         count: this.state.count - 1,
//       });
//     }
// }

clear = () => {
  this.setState ({
    count: 0,

  })
}

  render() {
    return(
      <div className="container">
        <div className="navbar">Container</div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.toggle}>{this.state.text}</button>
          <button type="button" onClick={this.increment}>Increment</button>
          <button type="button" onClick={this.decrement}>Decrement</button>
          <button type="button" onClick={this.clear}>Clear</button>
        </div>
      </div>
    )
  }
}

export default Counter;
