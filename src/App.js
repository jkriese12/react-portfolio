import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigate from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigate />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
