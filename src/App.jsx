// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './Navbar'
// import Course from './Course'
import Footer from './Footer'
import './App.css'
import HTML from './assets/html.png'
import CSS from './assets/css.png'
import Reactstate from'./state/State.jsx'
import IncreDecre from'./state/IncreDecre'
import Lifecycle from'./lifecycle/Lifecycle'
import Listkeys from'./list/Listkeys'
import Form from'./form/Form'
import UseEffect1 from'./Hooks/useEffect.jsx'
import UseReducer1 from'./Reducer/useReducer.jsx'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
      {/* <Navbar></Navbar> */}
       {/* <Course name="HTML" price={199} image={HTML}rating={4}></Course>
       <Course name="CSS" price="$209" image={CSS} rating={5} show={true} ></Course> */}
       {/* <Footer></Footer> */}
  
       {/* <Reactstate/>
      <IncreDecre></IncreDecre>
      <Lifecycle></Lifecycle> */}

      {/* <Listkeys/> */}
      {/* <Form/> */}
      <UseEffect1/>
      <UseReducer1/>
    </>
  )
}

export default App
