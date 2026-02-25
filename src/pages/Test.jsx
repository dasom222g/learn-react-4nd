import { useState } from "react";
import Card from '../components/Card';
import Counter from '../components/Counter';
import { useNavigate } from "react-router-dom";

const Test = () => {
  // logic
  const history = useNavigate()

  const [username, setUserName] = useState("후츠릿");
  const handleClick = (data) => {
    console.log("부모님! 클릭 됐습니다!!", data);
    if (data === "후츠릿") {
      setUserName("히히힛");
    }
  };

  // view
  return (
    <div className="App">
      <Card username={username} discount={12} onButtonClick={handleClick} />
      <Card username={"김완수"} discount={15} onButtonClick={handleClick} />
      <Card username={"김태희"} discount={70} onButtonClick={handleClick} />
      <Card onButtonClick={handleClick} />

      <Counter />

      {/* 페이지 이동 버튼 */}
      <button type="button" onClick={() => history("/chat")}>chat페이지로 이동</button>
    </div>
  );
}

export default Test