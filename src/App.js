import './App.css';
import React, { useState } from 'react';

function App() {

  const [points, setPoints] = useState([])
  const [history, setHistory] = useState([])

  const mouseClickHandle = (e) => {
    const { clientX, clientY } = e
    setPoints([
      ...points,
      {
        clientX,
        clientY
      }])
  }

  const handleUndo = () => {
    const newPoints = [...points]
    const deletedPoint = newPoints.pop()
    setHistory([...history, deletedPoint])
    setPoints([...newPoints])
  }

  const handleRedo = () => {
    const newHistory = [...history]
    const deletedPoint = newHistory.pop()
    setHistory([...newHistory])
    setPoints([...points, deletedPoint])
  }

  return (
    <>
      <button
        className='btn'
        onClick={handleUndo}
        disabled={points.length <= 0}>
        Undo
      </button>

      <button
        className='btn'
        onClick={handleRedo}
        disabled={history.length <= 0}>
        Redo
      </button>

      <div className="App" onClick={mouseClickHandle}>
        {
          points.map((point, idx) => (
            <div
              key={idx}
              className='point'
              style={{
                left: point.clientX + "px",
                top: point.clientY + "px"
              }}>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
