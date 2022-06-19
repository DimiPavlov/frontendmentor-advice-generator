import { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import Advice from "./components/advice/Advice";

const url = "https://api.adviceslip.com/advice";

function App() {
  const [advice, setAdvice] = useState([]);
  const [number, setNumber] = useState("");

  useEffect(() => {
    getAdviceData();
  }, []);

  const getAdviceData = () => {
    Axios.get(url).then((res) => {
      const {
        data: { slip },
      } = res;
      setAdvice(slip.advice);
      setNumber(slip.id);
    });
  };

  return (
    <div>
      <Advice advice={advice} number={number} onClick={getAdviceData} />
    </div>
  );
}

export default App;
