import React, { useState } from "react";
import BookList from "./components/BookList";
import TargetTracker from "./components/TargetTracker";
import BookForm from "./components/BookForm";
import Scheduler from "./components/Scheduler";

function ReadingApp() {
    // Shared state: list of books
    const [books, setBooks] = useState([
        { id: 1, title: "1984", author: "George Orwell", read: false },
        { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", read: true },
        { id: 3, title: "Sapiens", author: "Yuval Noah Harari", read: false },
    ]);

    const addBook = (book) => {
        setBooks([...books, { ...book, id: Date.now(), read: false }]);
    };


    // Shared state: reading target
    const [target, setTarget] = useState(10);

    // Function to toggle read status
    const toggleRead = (id) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === id ? { ...book, read: !book.read } : book
            )
        );


    };



    //  Function to delete a book
    const deleteBook = (id) => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    };

    //  Render child components with props
    return (
        <div className="container mt-4">
            <TargetTracker target={target} setTarget={setTarget} books={books} />

            <BookForm addBook={addBook} />

            <Scheduler books={books} setBooks={setBooks} />

            <BookList books={books} toggleRead={toggleRead} deleteBook={deleteBook} />
        </div>
    );
}

export default ReadingApp;