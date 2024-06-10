"use client";

import { useAccount, useConnect } from "wagmi";

function App() {
  const { chainId } = useAccount();
  const { connectors, connect } = useConnect();

  return (
    <div>
      {chainId && <h3>Current chain id: {chainId}</h3>}

      {connectors.map((connector) => (
        <button
          key={connector.uid}
          onClick={() => connect({ connector })}
          type="button"
        >
          {connector.name}
        </button>
      ))}
    </div>
  );
}

export default App;
