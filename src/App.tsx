import './App.css'
import Cart from './components/Cart'
import Counter from './components/Counter'
import LoginClassForm from './components/LoginClassForm'
import LoginForm from './components/LoginForm'

function App() {

  return (
    <>
      {/* <h1 className='mb-4'>Hi World!</h1>
      <p>Muhammad Jawwad Khan Sherwani</p> */}
      <LoginClassForm />
      <LoginForm />
      <Counter />
      <Cart />
    
    </>
  )
}

export default App
