import React, {FC, useState} from 'react';

export const Hello: FC = () => {
  console.log("### > Hello")
  const [count, setCount] = useState(0)
  return <div>
    <h1>Hello {count}</h1>
    <div>
      <button onClick={() => setCount(n => n + 1)}>Increase</button>
    </div>
  </div>;
}
