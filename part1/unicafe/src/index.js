import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td> 
    </tr>
  );
};

const Statistics = (props) => {
  const data = props.data;
  let content = <p>No feedback given</p>;
  if (data.all) {
    content = (
      <table>
        <tbody>
          <Statistic text="good" value={data.good} />
          <Statistic text="neutral" value={data.neutral} />
          <Statistic text="bad" value={data.bad} />
          <Statistic text="all" value={data.all} />
          <Statistic text="avg" value={data.avg} />
          <Statistic text="pos" value={data.pos} />
        </tbody>
      </table>
    );
  }
  return (
    <div>
      <h2>statistics</h2>
      {content}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const avg = (good - bad) / all;
  const pos = good / all;
  const data = {
    good,
    neutral,
    bad,
    all,
    avg,
    pos,
  };
  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics data={data} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
