import './App.css'
import Student from './components/Student'
import { Teacher } from './components/Teacher'

function App() {

  return (
    <>
      <div>
        <h1>Unattanded</h1>
        <Teacher />
        <Student />
        <Student />
        <Student />
      </div>
      <div>
        <h1>Class ReactJS</h1>
        <Teacher />
        <Student />
        <Student />
        <Student />
      </div>
      <div>
        <h1>Class Tahfidz</h1>
        <Teacher />
        <Student />
        <Student />
        <Student />
        </div>
      <div>
        <h1>Other Class</h1>
        <p><i>No class for today!</i></p>
      </div>
    </>
  )
}

export default App
