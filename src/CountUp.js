import { useState } from "react"

const CountUp = (props)=>{
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>----------ここからはカウントアップ----------</p>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default CountUp;
