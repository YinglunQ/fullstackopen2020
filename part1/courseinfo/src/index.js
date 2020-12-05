import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return props.exercises.map((v) => <Part exercise={v} />);
};

const Part = (props) => {
  return (
    <p>
      {props.exercise.name} {props.exercise.exercises}
    </p>
  );
};

const Total = (props) => {
  const total = props.exercises.reduce((acc, cur) => acc + cur.exercises, 0);
  return <p>{total}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content exercises={course.parts} />
      <Total exercises={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
