import React from "react";

const Book = ({ image, title, authors }) => {
  return (
    <div className="book">
      <div
        className="book-image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      />
      <div>
        <h2>{title}</h2>
        <p>Authors: [{authors?.map((author) => author?.name)?.join(" ")}]</p>
      </div>
    </div>
  );
};

export default Book;
