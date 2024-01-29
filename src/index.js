import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;
const books = [
  {
    id: 1,
    author: "Brianna Wiest",
    img: "https://m.media-amazon.com/images/I/61xivWmExiL._AC_UY327_FMwebp_QL65_.jpg",
    title: "The Mountain is You",
  },
  {
    id: 2,
    author: "Morgan Housel",
    img: "https://m.media-amazon.com/images/I/61-hMfd7NGL._AC_UY327_FMwebp_QL65_.jpg",
    title: "The Psychology of Money",
  },
  {
    id: 3,
    author: "Colleen Hoover",
    img: "https://m.media-amazon.com/images/I/813aV273-rL._AC_UY327_FMwebp_QL65_.jpg",
    title: "It Ends With Us",
  },
  {
    id: 4,
    author: "Francesc Miralles and Hector Garcia",
    img: "https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Ikigai",
  },
  {
    id: 5,
    author: "Ryuu Shinohara",
    img: "https://m.media-amazon.com/images/I/711oJhQugjL._AC_UY327_FMwebp_QL65_.jpg",
    title: "The Magic Of Manifesting",
  },
  {
    id: 6,
    author: "Robin Sharma",
    img: "https://m.media-amazon.com/images/I/618ZOX7UNNL._AC_UY327_FMwebp_QL65_.jpg",
    title: "The 5 AM Club",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author,id } = book;
        return <Book img={img} title={title} author={author} key={id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
