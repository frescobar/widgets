import React from "react";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      title: "React",
      content: "React is a JavaScript Library to make beautiful UI ",
    },
    {
      title: "Why Use React?",
      content:
        "React is one of the most loved and favorite library among engineers ",
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components",
    },
  ];
  return (
    <div>
      <h1>Widgets App</h1>
      <Accordion items={items} />
    </div>
  );
}

export default App;
