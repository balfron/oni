import React from "react";
import "../styles/main.scss";
import { Log } from "./Log";
import { Splash } from "./Splash";
import oniSvg from "../images/oni.svg";
import { PostExecution } from "./PostExecution";

function App() {
  const [programInitiated, setProgramInitiated] = React.useState(false);
  const [programExecuted, setProgramExecuted] = React.useState(false);

  const initiateProgram = () => {
    setProgramInitiated(true);
  };

  const handleTypingDone = () => {
    setProgramExecuted(true);
  };

  return (
    <div className="main-container crt">
      {!programInitiated ? (
        <Splash handleClick={initiateProgram} />
      ) : (
        !programExecuted && <Log onTypingDone={handleTypingDone} />
      )}

      {programExecuted && <PostExecution />}
    </div>
  );
}

export default App;
