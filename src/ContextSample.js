import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue');

function Child() {
  const text = useContext(MyContext);
  return <div>hello {text}</div>;
}

function Parent({ text }) {
  return <Child text={text}></Child>;
}

function GrandParent({ text }) {
  return <Parent text={text}></Parent>;
}

function ContextSample() {
  const [value, setValue] = useState(true);
  return (
    <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
      <GrandParent text="GOOD" />
      <button onClick={() => setValue(!value)}>click</button>
    </MyContext.Provider>
  );
}

export default ContextSample;
