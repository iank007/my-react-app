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
      { name: 'dimas', index: 0, isTeacher: true },
      { name: 'januar', index: 0, isTeacher: true },
      { name: 'rofiq', index: 0, isTeacher: true },
      { name: 'adam', index: 0, isTeacher: false },
      { name: 'idris', index: 0, isTeacher: false },
      { name: 'nuh', index: 0, isTeacher: false },
      { name: 'hud', index: 0, isTeacher: false },
      { name: 'saleh', index: 0, isTeacher: false },
      { name: 'ibrahim', index: 0, isTeacher: false },
    ])
  }, []); // mounted

  // methods
  function join(name) {
    const joinClass = (classRoom) => {
      const student = unattanded.find(u => u.name == name)
      if (student) {
        setUnattanded(unattanded.filter(u => u.name != name))
        if(classRoom == 'react') {
          setReact([...react, student])
        } else {
          setTahfidz([...tahfidz, student])
        }
      }
    }

    return (
      <div>
        <button type='button' onClick={() => joinClass('react')}>Join ReactJS</button>
        &nbsp;
        <button type='button' onClick={() => joinClass('tahfidz')}>Join Tahfidz</button>
      </div>
    )
  }
  function leave(name) {
    const leaveClass = () => {
      let student = react.find(u => u.name == name)
      if (student) {
        setReact(react.filter(u => u.name != name))
      } else {
        student = tahfidz.find(u => u.name == name)
        setTahfidz(tahfidz.filter(u => u.name != name))
      }
      setUnattanded([...unattanded, student])
    }
    return (
      <div>
        <button type='button' onClick={leaveClass}>Leave!</button>
      </div>
    )
  }

  // render
  const unattandedList = unattanded.map(({name, isTeacher}, index) => {
    return (isTeacher ? 
      <Teacher name={name} key={name} action={join} />
      :
      <Student name={name} key={name} index={index} action={join} />)
  });

  const reactList = react.map(({name, isTeacher}, index) => {
    return (isTeacher ? 
      <Teacher name={name} key={name} action={leave} />
      :
      <Student name={name} key={name} index={index} action={leave} />)
  });

  const tahfidzList = tahfidz.map(({name, isTeacher}, index) => {
    return (isTeacher ? 
      <Teacher name={name} key={name} action={leave} />
      :
      <Student name={name} key={name} index={index} action={leave} />)
  });

  return (
    <>
      {/* <Welcome /> */}
      {/* <Hook /> */}
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
