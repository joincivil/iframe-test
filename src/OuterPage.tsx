import * as React from "react";
import { RouteComponentProps } from "@reach/router";

export interface OuterPageProps extends RouteComponentProps {
  iframeSrc: string;
}

export const OuterPage: React.FunctionComponent<OuterPageProps> = ({
  iframeSrc
}) => {
  return (
    <div>
      outer page
      <iframe src={iframeSrc} />
    </div>
  );
};
