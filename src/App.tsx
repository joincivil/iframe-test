import React from "react";
import { Router } from "@reach/router";
import { InnerPage } from "./InnerPage";
import { OuterPage } from "./OuterPage";
import { ReachRouterTest } from "./ReachRouterTest";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <OuterPage iframeSrc="https://iframe2.ngrok.io/inner" path="/" />
        <OuterPage iframeSrc="https://iframe1.ngrok.io/inner" path="/test2" />
        <OuterPage
          iframeSrc="https://iframe1.ngrok.io/inner-reach"
          path="/test3"
        />
        <InnerPage path="/inner" />
        <ReachRouterTest path="/inner-reach" />
      </Router>
    </div>
  );
};

export default App;
