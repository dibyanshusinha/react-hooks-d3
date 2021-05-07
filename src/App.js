import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage"
import TaskListPage from "./pages/TaskListPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import AddTaskPage from "./pages/AddTaskPage"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/">
              <TaskListPage/>
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/analytics">
              <AnalyticsPage/>
            </Route>
            <Route exact path="/create">
              <AddTaskPage/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
