import { useState } from 'react'
import './App.css'
import AutoCounter from './components/AutoCounter'
import Cart from './components/Cart'
import Counter from './components/Counter'
import LoginClassForm from './components/LoginClassForm'
import LoginForm from './components/LoginForm'
import Todos from './components/Todos'
import WelcomeMessage from './components/WelcomeMessage'
import PostsPage from './PostsPage'

function App() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <>
      {/* <h1 className='mb-4'>Hi World!</h1>
      <p>Muhammad Jawwad Khan Sherwani</p> */}
      {showCounter && <AutoCounter />}
      <button onClick={() => {setShowCounter(show => !show)}}>Toggle show counter</button>
      <PostsPage />
      <Todos />
      <WelcomeMessage user={{name:'Jawwad', type: 'admin'}} isLoggedIn={true} />
      <LoginClassForm />
      <LoginForm />
      <Counter />
      <Cart />
    
    </>
  )
}

export default App
