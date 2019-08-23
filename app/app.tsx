import React, { useState } from "react";
import { checkPolicy } from "./opa";
const App = () => {
  const [data, setData] = useState({
    method: "GET",
    path: "/servers/s2",
    user: "alice"
  });

  const [result, setResult] = useState();

  return (
    <div>
      <textarea
        cols={75}
        rows={25}
        value={JSON.stringify(data)}
        onChange={e => {
          const { value } = e.target;
          const json = JSON.parse(value);
          setData(json);
        }}
      />

      <div>
        <button onClick={() => checkPolicy(data).then(setResult)}>
          Evaluate
        </button>
      </div>

      <div>
        <h1>Result!</h1>
        {result === undefined ? (
          <div>Click Evaluate to check policy</div>
        ) : (
          <div>{result ? "TRUE" : "FALSE"}</div>
        )}
      </div>
    </div>
  );
};

export default App;
