import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  const [repos, setRepos] = useState([
    {
      id: 1,
      name: "freecodecamp",
      fullname: "freecodecamp/freecodecamp",
      description: "Repository 1",
      path: "/freecodecamp",
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
