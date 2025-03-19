import { useEffect, useState } from 'react';
import './App.css'
import Student from './components/Student'
import { Teacher } from './components/Teacher'

function App() {
  // declaration
  const [unattanded, setUnattanded] = useState([])
  const [react, setReact] = useState([])
  const [tahfidz, setTahfidz] = useState([])

  useEffect(() => {
    setUnattanded([
      'Januar',
      'Dimas',
    ])

    setReact([
      'Uzumaki',
      'Uchiha',
    ])

    setTahfidz([
      'Jane',
      'John',
    ])
  }, []); // mounted

  // render
  const unattandedList = unattanded.map((item, index) => {
    return <Teacher name={item} key={index} />
  });
  const reactList = react.map((item, index) => {
    return <Student name={item} key={index} noSeat={index + 1} />
  });
  const tahfidzList = tahfidz.map((item, index) => {
    return <Student name={item} key={index} noSeat={index + 1}/>
  });

  return (
    <>
      <div>
        <h1>Unattanded</h1>
        {unattandedList || <p><i>no class</i></p>}
      </div>
      <div>
        <h1>Class ReactJS</h1>
        {reactList.length > 0 ? reactList : <p><i>no class</i></p>}
      </div>
      <div>
        <h1>Class Tahfidz</h1>
        {tahfidzList.length > 0 ? tahfidzList : <p><i>no class</i></p>}
        </div>
      <div>
        <h1>Other Class</h1>
        <p><i>No class for today!</i></p>
      </div>
    </>
  )
}

export default App
