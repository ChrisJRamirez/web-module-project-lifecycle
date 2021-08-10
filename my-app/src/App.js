import React from "react";
import './App.css';
import axios from "axios";
import GithubForm from "./GithubForm"

class App extends React.Component {
  constructor() {
    super();
    this.state={
      githubUser: {},
      githubUserFollowers: [],
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/chrisjramirez")
    .then(res => this.setState({
      ...this.state,
      githubUser: res.data
    }))
    axios.get("https://api.github.com/users/chrisjramirez/followers")
    .then(res => this.setState({
      ...this.state,
      githubUserFollowers: res.data
    }))
    
    .catch(err => console.log(err));
  }



  render() {
    return (
      <div className="App">
        <header>
          <img className="gitImg" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github logo"></img>
        
            <input className="headerInput" type="text" placeholder="Search or jump to..." />
            <h4>Pull Requests</h4>
            <h4>Issues</h4>
            <h4>Marketplace</h4>
            <h4>Explore</h4>
        </header>

        <div className="userProfile">
          <img className="avatarImg" 
          alt width="260" height="260"
          key={this.state.githubUser.avatar_url} 
          src={this.state.githubUser.avatar_url}/>

          <h2>{this.state.githubUser.name}</h2>
          <h3 className="login">{this.state.githubUser.login}</h3>

          <p>{this.state.githubUser.bio}</p>

          <button>Edit profile</button>

            <section>
              <p>follower</p>
              <p>following</p>
            </section>
          <p className="location">{this.state.githubUser.location}</p>
          <p className="twitter">{this.state.githubUser.twitter}</p>

        
        </div>

      </div>
    )
  }
}







export default App;
