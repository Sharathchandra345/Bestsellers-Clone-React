import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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
const books = [
  {
    author: "Nikhil K.R.Gupta",
    title: "BlackBook of English Vocabulary",
    img: "./book1.jpg",
    price: "248",
    position: "1",
    id: 1,
  },

  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg",
    price: "475",
    position: "2",
    id: 2,
  },
  {
    author: "Robert T. Kiyosaki",
    title: "Rich Dad Poor Dad",
    img: "https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL900_SR900,600_.jpg",
    price: "335",
    position: "3",
    id: 3,
  },
];

// const names = ["john", "peter", "susan"];
// const newNames = names.map((name) => {
//   console.log(name);
//   return <h1>{name}</h1>;
// });

const Booklist = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: "1rem 0" }}
        />
        <button type="submit">Submit</button>
        <div>
          <button onClick={() => console.log("click me")} type="button">
            click me
          </button>
        </div>
      </form>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, price, position } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <h5>₹{price}.00</h5>
      <h5 className="position">#{position}</h5>
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
