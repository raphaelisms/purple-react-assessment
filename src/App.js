import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [list, updateList] = useState([]);
  const [utilityList, setUtilityList] = useState([]);
  const [input, setInput] = useState("");
  const [az, setAz] = useState(0);
  const addItem = () => {
    let newList = list.concat(input);
    updateList(newList);
    console.log(list);
  }
  const handleInput = event => {
    const input1 = event.target.value;
    setInput(input1);
  };
  const sortItems = () => {
    console.log(az)
    if (az === 0) {
      setAz(1);
    } else if (az === 1) {
      setAz(2);
    } else if (az === 2) {
      setAz(1);
    }
    console.log(az)
  }
  const unsortItems = () => {
    setAz(0);
    console.log(az)
  }
  const unsortedList = list;
  const sortedList = [...list].sort();
  const reversedList = [...sortedList].reverse();
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={handleInput} />
        <input type="submit" onClick={addItem} />
        <button type="az" onClick={sortItems}>Sort A-Z</button>
        <button type="revert" onClick={unsortItems}>Reset Sorting</button>
        <div>
          <h2>Currently {az === 0 ? "unsorted" : "sorted by"} {az === 1 ? "alphabetical order": ""} {az === 2 ? "reverse alphabetical order" : ""}</h2>
          {az === 0 && list.map((listicle) => <p key={listicle}>{listicle}</p>)}
          {az === 1 && sortedList.map((listicle) => <p>{listicle}</p>)}
          {az === 2 && reversedList.map((listicle) => <p>{listicle}</p>)}
        </div>
      </header>
    </div>
  );
}

export default App;
