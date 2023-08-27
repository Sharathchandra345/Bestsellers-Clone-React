import { books } from "./Books";

const Book = (props) => {
  const { img, title, author, price, position, number } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <h5>₹{price}.00</h5>
      {/* <h5 className="position">#{position}</h5> */}
      <span className="number">#{number + 1}</span>
    </article>
  );
};

export default Book;
