import * as React from "react";
import oniSvg from "../images/oni.svg";

export const PostExecution = () => {
  return (
    <>
      <div className="svg-container">
        <img src={oniSvg} className="oni-svg" alt="oni" />
      </div>
      <div className="text-container">
        <h1>おはようございます</h1>
      </div>
    </>
  );
};
