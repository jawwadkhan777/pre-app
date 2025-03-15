import './App.css'
import Cart from './components/Cart'
import Counter from './components/Counter'
import LoginClassForm from './components/LoginClassForm'
import LoginForm from './components/LoginForm'
import Todos from './components/Todos'
import WelcomeMessage from './components/WelcomeMessage'

function App() {

  return (
    <>
      {/* <h1 className='mb-4'>Hi World!</h1>
      <p>Muhammad Jawwad Khan Sherwani</p> */}
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
