import React from 'react'

// 미션: 할인율 props로 받아와서 처리

const Card = ({ username = "사용자", discount = 0, onButtonClick }) => {
  // logic
  // 미션: div태그에 "card-wrap"이라는 클래스명을 변수로 넣기
  const cardClass = "card-wrap"

  // view
  return (
    <div className={cardClass}>
      <p>반갑습니다. {username}님!</p>
      {discount ? <p>할인율: {discount}%</p> : ""}
      <button type='button' onClick={() => onButtonClick(username)}>
        바로가기
      </button>
    </div>
  )
}

export default Card