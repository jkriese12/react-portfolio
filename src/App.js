import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigate from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div>
      <Navigate />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/portfolio" component={ProjectCard} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
