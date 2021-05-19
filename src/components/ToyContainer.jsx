import React, { Component } from 'react';
import ToyCard from './ToyCard'

const baseURL = "http://localhost:3000/toys"
class ToyContainer extends Component {

state = {
  toys: [],
}

componentDidMount() {
  this.fetchToys()
}

fetchToys = async () => {
  fetch (baseURL)
  .then(res => res.json())
  .then(results => this.setState({toys: results}))
}

toGoodWill = (id) => {
  console.log('toGoodWill', id)
  fetch (baseURL + `/${id}`, {
    method: 'DELETE'
  })
  window.location.reload(false)
}

liker = (id) => {
  // console.log('liker', id)
  this.setState({
    toys: this.state.toys.map(
      toy => toy.id === id ? {...toy, likes: toy.likes + 1 }: toy
    )
  })
  }


render() {
  return(
    <div id="toy-collection">
      {this.state.toys.map((toy, index) => <ToyCard key={index} toy={toy} toGoodWill={this.toGoodWill} liker={this.liker}/>)}
    </div>
  );
}

}

export default ToyContainer;
