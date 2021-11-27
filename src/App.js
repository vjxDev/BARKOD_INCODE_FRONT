import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className="relative">
      <div className="bg-primery absolute h-96 w-screen top-0 left-0 right-0"></div>

      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
