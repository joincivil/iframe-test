import React from "react";
import { Router } from "@reach/router";
import { InnerPage } from "./InnerPage";
import { OuterPage } from "./OuterPage";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <OuterPage iframeSrc="https://iframe2.ngrok.io/inner" path="/" />
        <InnerPage path="/inner" />
      </Router>
    </div>
  );
};

export default App;
