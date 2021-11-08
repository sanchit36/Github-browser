import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  const [repos, setRepos] = useState([]);
  const [activeRepo, setActiveRepo] = useState(null);

  return (
    <Router>
      <Layout repos={repos} setRepos={setRepos} setActiveRepo={setActiveRepo}>
        <Switch>
          <Route exact path="/:repoName">
            <Home activeRepo={activeRepo} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
