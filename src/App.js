import React from "react"
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {

 
  handleClick=()=>this.setState({show: true })
  
    state = {
      Person :{ fullName:"Ben Mamya Rihab",bio:"Ing", imgSrc:"/photoProfile.png", profession:"Web Development"} ,
      show: false 
    };
  

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({
        date: new Date()
      }),
      1000
    );
  }



  render() {
    return(
      <div className="App">
      <header className="App-header">
     
      { this.state.show ? 
      <>
      <div className="App-top"> <h2>{this.state.date.toLocaleTimeString()}</h2></div>
      
      <div style={{fontFamily: "Times New Roman",}}>
      <img src={this.state.Person.imgSrc} alt="photoProfile" width="150" />
      <h1>{this.state.Person.fullName}</h1> 
         
         {this.state.Person.bio}
<br/>
{this.state.Person.profession}
<br/>
</div>
<br/>
         </>
      :<Button pill variant="light" onClick={this.handleClick}> Show</Button> }
    
      
      
      
      </header>
    </div>
    )
  }
 }
 
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
