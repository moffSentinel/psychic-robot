import React, { useState } from "react";
import { checkPolicy } from "./opa";
import ErrorBoundary from "./error-boudry";

const Policy = () => {
  const [data, setData] = useState<string>(
    '{"method": "GET", "path": "/servers/s2", "user": "alice"}'
  );

  const [result, setResult] = useState();

  return (
    <ErrorBoundary>
      <div>
        <textarea
          cols={75}
          rows={25}
          value={data}
          onChange={e => {
            setData(e.target.value);
          }}
        />
        <div>
          <button
            onClick={() => {
              const json = JSON.parse(data);
              checkPolicy(json).then(setResult);
            }}
          >
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
    </ErrorBoundary>
  );
};

export default Policy;
