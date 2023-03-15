import { Home, LandingPage, Form, Detail } from "./Views";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/create-dog" component={Form} />
      </BrowserRouter>
    </div>
  );
}

export default App;
