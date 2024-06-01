import "./App.css";
import StarRating from "./components/Star-rating";

function App() {
  return (
    <div className="App">
       <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;