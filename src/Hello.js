import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div
      style={{
        color: color,
      }}
    >
      {isSpecial ? <b>*</b> : null}
      hello {name}
    </div>
  );
}

Hello.defaultProps = {
  name: 'no-name',
};

export default Hello;
