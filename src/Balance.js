import React from "react";

function Balance({ balance }) {
  return (
    <div className="balance">
      <h2>Balance: Rs{balance.toFixed(2)}</h2>
    </div>
  );
}

export default Balance;
