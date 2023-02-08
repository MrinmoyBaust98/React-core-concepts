import logo from './logo.svg';
import './App.css';

function App() {

  const cricketers=[
    {name:"Sakib Al Hasan" , position:"Al-Rounder" , country:"Bangladesh"},
    {name:"MS Dhoni"       , position:"Wick & Bat" , country:"India"     },
    {name:"Liton Das"      , position:"Wick & Bat" , country:"Bangladesh"},
    {name:"AB De villiers" , position:"Batsman"    , country:"SouthAfrica"},
    {name:"Brendon McCullum",position:"Batsman"    , country:"Newzeland" },
    {name:"Watson"         , position:"Al-Rounder" , country:"Austrilia" },
    {name:"Dj Bravo"       , position:"Al-Rounder" , country:"Westindies"},
    {name:"Joe root"       , position:"Batsman"    , country:"England"   },
   ] 
  return (
     
    <div className="App grid">

      {/* Dynamically Added */}

      {
        cricketers.map(cricket =><Crickboss Name={cricket.name}Position={cricket.position} Country={cricket.country}> </Crickboss>)
      }

    </div>
  );
}

function Crickboss(props){
   
  const st={
    color:"purple",
    fontSize:"2rem"
  }
  return (
    <div className='boss-design'>
      <h2><span style={st}>Name: </span>{props.Name}</h2>
      <h4><span style={st}>Position: </span>{props.Position}</h4>
      <h4><span style={st}>Country: </span>{props.Country}</h4>
    </div>
  );
}

export default App;
