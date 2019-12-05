import * as React from "react";
import { RouteComponentProps } from "@reach/router";

import Web3 from "web3";

export const InnerPage: React.FunctionComponent<RouteComponentProps> = () => {
  const [hasWeb3, setHasWeb3] = React.useState<boolean | null>(null);
  React.useEffect(() => {
    if ((window as any).ethereum) {
      setHasWeb3(true);
    } else {
      setHasWeb3(false);
    }
  }, [hasWeb3]);

  async function clicked() {
    await (window as any).ethereum.enable();
    const web3 = new Web3((window as any).ethereum);
    console.log("starting ethereum.enable");
    await (window as any).ethereum.enable();
    console.log("completed ethereum.enable");
    const accounts = await web3.eth.getAccounts();
    console.log("accounts", accounts);
    const signer = accounts[0];
    // @ts-ignore
    const signature = await web3.eth.personal.sign("hello", signer);
    console.log("signature", signature);
  }
  return (
    <div>
      <div>has web3: {hasWeb3 ? "yes" : "no"}</div>
      <div>
        <button onClick={clicked}>boop</button>
      </div>
    </div>
  );
};
