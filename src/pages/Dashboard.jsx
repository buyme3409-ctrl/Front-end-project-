import React, { useState, useContext } from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import Scheduler from "../components/Scheduler";
import TargetTracker from "../components/TargetTracker";
import { Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
    const [books, setBooks] = useState([]);
    const [target, setTarget] = useState(0);

    const { logout } = useContext(AuthContext);

    const addBook = (book) => {
        setBooks([...books, { ...book, id: Date.now(), read: false }]);
    };

    const toggleRead = (id) => {
        setBooks(
            books.map((b) =>
                b.id === id ? { ...b, read: !b.read } : b
            )
        );
    };

    const deleteBook = (id) => {
        setBooks(books.filter((b) => b.id !== id));
    };

    return (
        <div className="container mt-4">
            <Button variant="danger" onClick={logout}>
                Logout
            </Button>

            <h2 className="mt-3">📚 Book Tracker</h2>

            <TargetTracker
                target={target}
                setTarget={setTarget}
                books={books}
            />

            <BookForm addBook={addBook} />

            <Scheduler books={books} setBooks={setBooks} />

            <BookList
                books={books}
                toggleRead={toggleRead}
                deleteBook={deleteBook}
            />
        </div>
    );
}

export default Dashboard;