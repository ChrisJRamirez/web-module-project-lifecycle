import React from "react";
import './App.css';
import axios from "axios"

class App extends React.Component {
  constructor() {
    super();
    this.state={
      githubUser: {},

    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/chrisjramirez")
    .then(res => this.setState({
      ...this.state,
      githubUser: res.data
    }))
    .catch(err => console.log(err));
  }



  render() {
    return (
      <div className="App">

      </div>
    )
  }
}







export default App;
