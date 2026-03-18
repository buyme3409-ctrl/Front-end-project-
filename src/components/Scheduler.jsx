import React from "react";
import { Card } from "react-bootstrap";


function Scheduler({ books }) {
    const scheduledBooks = books.filter((book) => book.schedule);

    const sortedBooks = [...scheduledBooks].sort(
        (a, b) => new Date(a.schedule) - new Date(b.schedule)
    );

    return (
        <div className="mb-4">
            <h4>📅 Reading Schedule</h4>

            {sortedBooks.length === 0 && <p>No scheduled sessions.</p>}

            {sortedBooks.map((book) => (
                <Card key={book.id} className="mb-2">
                    <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Subtitle className="text-muted">
                            {book.author}
                        </Card.Subtitle>

                        <p className="mt-2">
                            📖 Scheduled for:{" "}
                            {new Date(book.schedule).toLocaleString()}
                        </p>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default Scheduler;