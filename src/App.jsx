
import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import ReposList from './components/ReposList'
import Form from './components/Form';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <>
      {!userName && <Form setUserName={setUserName}/>}
      
      {userName.length > 4 && (
        <>
          <Profile userName={userName}/>
          <ReposList userName={userName}/>
        </>
      )
      }
     
    </>
  )
}

export default App
