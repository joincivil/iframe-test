import * as React from "react";
import { RouteComponentProps, navigate } from "@reach/router";

export const ReachRouterTest: React.FunctionComponent<RouteComponentProps> = () => {
  async function clicked() {
    navigate("/inner");
  }

  return (
    <div>
      <div>click to change route</div>
      <div>
        <button onClick={clicked}>change route</button>
      </div>
    </div>
  );
};
