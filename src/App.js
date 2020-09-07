import React from "react";
import { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import Quiz from "./contains/Quiz/Quiz";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Quiz />
        </Layout>
      </div>
    );
  }
}

export default App;
