
import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import ReposList from './components/ReposList'

function App() {
  const [userName, setUserName] = useState('');

  return (
    <>
      <label>Digite o nome do usuário para exibir o perfil:</label>
      <input type="text" onBlur={(e) => setUserName(e.target.value)} />

      <Profile userName={userName}/>
      <ReposList/>
    </>
  )
}

export default App
