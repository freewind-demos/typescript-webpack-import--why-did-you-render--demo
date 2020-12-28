import React, {FC, useState} from 'react';

// `React.memo` is needed for function component
export const Hello: FC = React.memo(() => {
  const [count, setCount] = useState(0)
  return <div>
    <h1>Hello {count}</h1>
    <div>
      <button onClick={() => setCount(n => n + 1)}>Increase</button>
    </div>
  </div>;
});

// If the component is not Pure Component, we should set `whyDidYouRender` to `true` manually
// Hello.whyDidYouRender = true
