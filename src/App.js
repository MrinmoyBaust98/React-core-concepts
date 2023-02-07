import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App grid">
      <Crickboss name="Sakib Al Hasan" Position="Al-Rounder" Country="Bangladesh"></Crickboss>
      <Crickboss name="MS Dhoni" Position="Wicket&Batsman" Country="India"></Crickboss>
      <Crickboss name="Liton Das" Position="Wicket&Batsman" Country="Bangladesh"></Crickboss>
      <Crickboss name="Dj Bravo" Position="Al-Rounder" Country="Westindies"></Crickboss>
      <Crickboss name="Mike Hussy" Position="Batsman" Country="Australia"></Crickboss>
      <Crickboss name="Mark Stonis" Position="Al-Rounder" Country="Australia"></Crickboss>
      <Crickboss name="Watson" Position="Al-Rounder" Country="Australia"></Crickboss>
      <Crickboss name="David Warner" Position="Batsman" Country="Australia"></Crickboss>
      <Crickboss name="AB De villiers" Position="Batsman" Country="South Africa"></Crickboss>
      <Crickboss name="Brendon McCullum" Position="Batsman" Country="Newzeland"></Crickboss>
      <Crickboss name="Robi Chandro Aswin" Position="Blower" Country="India"></Crickboss>
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
      <h2><span style={st}>Name: </span>{props.name}</h2>
      <h4><span style={st}>Position: </span>{props.Position}</h4>
      <h4><span style={st}>Country: </span>{props.Country}</h4>
    </div>
  );
}

export default App;
