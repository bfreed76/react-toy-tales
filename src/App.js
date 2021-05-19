import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

class App extends React.Component{
  
  state = {
    display: false,
    name: "",
    image: "",
    likes: ""
  }
  
  
  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }
  
  handleSubmit = () => { 
    let newToyObj = {
      name: this.state.name ,
      image: this.state.image,
    }
    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newToyObj)})
      // .then(res => res.json())
      // .then(res => console.log('Success:', newToyObj, res))
      .catch((error) => console.error('Error:', error))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // postNewToy = (newToyObj) => {
  //   fetch('http://localhost:3000/toys', {
  //     method: 'post',
  //     body: JSON.stringify(newToyObj)})
  //     .then(res => res.json())
  //     .then(data => console.log("post response", data))
  //   }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer/>
      </>
    );
  }

}

export default App;
