import React, { useEffect, useState } from "react";
import Axios from "axios";
import Advice from "./components/advice/Advice";

const url = "https://api.adviceslip.com/advice";

const App = () => {
  const [advice, setAdvice] = useState<string | any>([]);
  const [number, setNumber] = useState<number>(0);

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
};

export default App;
