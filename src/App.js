import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux'


import store from './redux/store'

import LoginPage from "./pages/LoginPage"
import TaskListPage from "./pages/TaskListPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import AddTaskPage from "./pages/AddTaskPage"

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
