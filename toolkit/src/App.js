import { Route, Switch } from "react-router-dom";
import Calculator from "./components/Calculator";
import Home from "./components/Home";
import QuoteGenerator from "./components/QuoteGenerator";
import WeatherApp from "./components/WeatherApp"

function App() {
  return (
    <div className="App">
      <center>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/calculator" component={Calculator} />
          <Route path="/quote-generator" component={QuoteGenerator} />
          <Route path="/weather-app" component={WeatherApp} />
        </Switch>
      </center>
    </div>
  );
}

export default App;
