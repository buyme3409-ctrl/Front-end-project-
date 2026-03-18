import React from "react";
import { Card, Button } from "react-bootstrap";

function BookList({ books, toggleRead, deleteBook }) {
    return (
        <div>
            {books.map((book) => (
                <Card key={book.id} className="mb-3">
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Subtitle className="text-muted">
                            {book.author}
                        </Card.Subtitle>

                        <Button
                            className="me-2"
                            onClick={() => toggleRead(book.id)}
                        >
                            Toggle Read
                        </Button>

                        <Button
                            variant="danger"
                            onClick={() => deleteBook(book.id)}
                        >
                            Delete
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default BookList;