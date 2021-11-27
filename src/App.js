import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
