import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css'
import Header from './Components/Header';
import About from "./Components/About";
import Home from "./Components/Home";

function App() {

  return (
   
    <Router>
      <Routes>
        <Route exact path="/" element={<Header></Header>}></Route>
      </Routes>
    </Router>
   
  )
}

export default App
