import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from './components/Hero';
import Signup from './components/SignUpForm';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/signup" component={Signup} />
        <Hero  exact path="/login" component={Hero} />

      </div>
    </Router>
);
}

export default App;


