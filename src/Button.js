import { useState } from "react";

const Button = (props) => {
  const [name, setName] = useState('煉獄')

  return (
    <div>
      <p>----------ここからはボタン----------</p>
      <p>こんにちは、{name}さん</p>
      <button onClick={() => setName('煉獄')}>煉獄</button>
      <button onClick={() => setName('炭治郎')}>炭治郎</button>
    </div>
  );
};

export default Button;
