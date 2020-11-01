import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Editor from "./pages/Editor/Editor";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Loader from "./pages/Loader/Loader";

function App() {
  return (
    <>
      <header>Photo Editor</header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/loader" />
          </Route>
          <Route path="/loader">
            <Loader />
          </Route>
          <Route path="/editor">
            <Editor />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
