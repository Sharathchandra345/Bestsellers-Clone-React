import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./Books";
import Book from "./book";

const Booklist = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);

// function Greeting() {
//   return (
//     <div>
//       <h2>My First Component</h2>
//     </div>
//   );
// }

// function Greeting() {
//   return React.createElement("h2", {}, "hello world");
// }

// const names = ["john", "peter", "susan"];
// const newNames = names.map((name) => {
//   console.log(name);
//   return <h1>{name}</h1>;
// });
