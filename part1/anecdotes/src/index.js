import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0));
  const handleRand = () => {
    const rand = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(rand);
  };
  const handleVotes = () => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
  };
  const maxVote = Math.max(...votes);
  const maxIndex = votes.findIndex(v => v === maxVote); 
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>{votes[selected]} votes</p>
      <div>
        <button onClick={handleVotes}>vote</button>
        <button onClick={handleRand}>next anecdote</button>
      </div>
      <h2>Most voted</h2>
      <p>{props.anecdotes[maxIndex]}</p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
