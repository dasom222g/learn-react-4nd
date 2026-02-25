import React, { useState } from 'react'

const Counter = () => {
  // logic
  // let num = 0;
  const [num, setNum] = useState(0)

  const handleIncrease = () => {
    // num = num + 1;
    // num += 1
    setNum(num + 1)
    console.log("🚀 ~ num:", num)
  }

  // 미션: -1버튼 클릭시 UI에서 감소하게끔 구현

  // view
  return (
    <div>
      <h1>{num}</h1>
      <div>
        <button type='button' onClick={handleIncrease}>+1</button>
        <button type='button'>-1</button>
      </div>
    </div>
  )
}

export default Counter