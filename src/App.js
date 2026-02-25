import { useState } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";

function App() {
  // logic
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

      {/* <Counter /> */}
    </div>
  );
}

export default App;
