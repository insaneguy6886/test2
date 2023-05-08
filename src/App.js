import AdjacentElementsProduct from "./components/AdjacentElementsProduct";
import AlternatingSums from "./components/AlternatingSums";
import ShortLink from "./components/ShortLink";
import './App.css';

function App() {
  const weights = [60, 40, 55, 75, 64]
  const [team1, team2] = AlternatingSums(weights)

  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <div style={{paddingTop:'50px'}}>
      <AdjacentElementsProduct />
      <p>Team 1: {team1} kg</p>
      <p>Team 2: {team2} kg</p>
      </div>
      <div>
        <ShortLink />
      </div>
    </div>
  )
}

export default App;