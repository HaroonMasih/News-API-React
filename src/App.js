import logo from "./logo.svg";
import "./App.css";
import NewsApi from "./components/NewsApi";
import NavBar from "./components/NavBar";
import Favourites from "./components/Favourites";
import { BrowserRouter as Router, Switch, Route, Routes,Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">      
       <NavBar />
        <Routes>
          <Route path="/NewsApi" element={<NewsApi/>}/>
          <Route path="/Favourites" element={<Favourites/>}/>
        </Routes>
    </div>
  );
}

export default App;
