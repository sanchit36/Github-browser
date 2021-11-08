import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  const [repos, setRepos] = useState([
    {
      id: 1,
      name: "repo1",
      description: "Repository 1",
      path: "/repo1",
    },
    {
      id: 2,
      name: "repo2",
      description: "Repository 2",
      path: "/repo2",
    },
  ]);
  const [activeRepo, setActiveRepo] = useState(null);

  return (
    <Router>
      <Layout repos={repos} setRepos={setRepos} setActiveRepo={setActiveRepo}>
        <Switch>
          <Route exact path="/">
            <Home activeRepo={null} />
          </Route>
          <Route exact path="/:repoName">
            <Home
              repos={repos}
              setRepos={setRepos}
              activeRepo={activeRepo}
              setActiveRepo={setActiveRepo}
            />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
