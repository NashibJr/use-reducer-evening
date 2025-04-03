import React from "react";
import Input from "./components/Input";
import { IoSearchOutline } from "react-icons/io5";
import Book from "./components/Book";

function App() {
  const [books, setBooks] = React.useState([]);
  const [filteredBooks, setFilteredBooks] = React.useState([]);
  const [bookName, setBookName] = React.useState("");

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://gutendex.com/books/");
        const data = await response.json();
        setBooks(data?.results);
        setFilteredBooks(data?.results);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  React.useEffect(() => {
    if (bookName === "") {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(() =>
        books?.filter((book) =>
          book?.title?.toLowerCase().includes(bookName.toLowerCase())
        )
      );
    }
  }, [bookName, books]);

  return (
    <main className="container">
      <header className="header-container">
        <IoSearchOutline color="#555" className="icon" size={25} />
        <Input
          placeholder="Search for a book name"
          className="input-content"
          name="bookName"
          value={bookName}
          onChange={(event) => setBookName(event.target.value)}
        />
      </header>
      <section className="books-content">
        {filteredBooks?.map((book) => (
          <Book
            key={book.id}
            title={book?.title}
            image={book?.formats?.["image/jpeg"]}
            authors={book?.authors}
          />
        ))}
      </section>
    </main>
  );
}
export default App;
