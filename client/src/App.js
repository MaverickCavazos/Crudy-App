import React, {useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios'; 

function App() {

  const [gameName, setgameName] = useState('')
  const [gameReview, setgameReview] = useState('')
  const [gameReviewList, setgameReviewList] = useState([])

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      gameName: gameName, 
      gameReview: gameReview
    }).then(() => {
      alert('game review has been added');
    });
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response)=> {
      setgameReviewList(response.data)
      console.log(response)
    })
  }, [])

  return (
    <div className="App">
      <h1>Crudy buddy</h1>
    <div className="form">
      <label>Game name</label>
      <input type="text" name="gameName" onChange={(e) => {
        setgameName(e.target.value)
      }} />
      <label>Review</label>
      <input type="text" name="gameReview" onChange={(e) => {
        setgameReview(e.target.value)
      }}/>

      <button onClick={submitReview}>Submit</button>

      {gameReviewList.map((val) => {
        return <h1>Game Name: {val.gameName} |  Game Review: {val.gameReview}</h1>
      })}
      </div>
    </div>
  );
}

export default App;
