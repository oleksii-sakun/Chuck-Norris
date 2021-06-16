import React from "react";
import { Loader } from "semantic-ui-react";
import chuckNorrisImg from "../images/clipart1131480 1.png";

interface CitateWindowProps {
  citation: string;
  loaderStatus: boolean;
}

export default function CitateWindow({
  citation,
  loaderStatus,
}: CitateWindowProps): JSX.Element {
  return (
    <>
      <div className="citation">
        <p>{citation}</p>
        <Loader active={loaderStatus} inline="centered" />
        <img className="chuck-norris-img" src={chuckNorrisImg} alt="" />
      </div>
    </>
  );
}
