import logo from './logo.svg';
import './App.css';

function App() {
  
  const date=new Date();
  const time=date.getHours();
  if(time<12){
    return(
    <h1 style={{color:"black",backgroundColor:"yellow",fontSize:"3em"}}>Breakfast_Time!</h1>
    )
  }
  else if(time >12 && time<18 && time!==15){
    return(
    <h1 style={{color:"blue",backgroundColor:"pink",fontSize:"3em"}}>Lunch_Time!</h1>
    )
  }
  else if(time>18){
    return(
    <h1 style={{color:"red",backgroundColor:"black",fontSize:"3em"}}>Dinner_Time!</h1>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
        {time}
        <h1>Meal_Time</h1>


      </header>
    </div>
  );
}

export default App;
