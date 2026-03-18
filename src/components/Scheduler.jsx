import React from "react";
import { Card } from "react-bootstrap";

// Scheduler component displays a list of books that have scheduled reading sessions
function Scheduler({ books }) {
    // Filter books that have a `schedule` property (non-null / defined)
    const scheduledBooks = books.filter((book) => book.schedule);

    // Sort the scheduled books by their schedule date (earliest first)
    const sortedBooks = [...scheduledBooks].sort(
        (a, b) => new Date(a.schedule) - new Date(b.schedule)
    );

    return (
        <div className="mb-4">
            {/* Header for the schedule section */}
            <h4>📅 Reading Schedule</h4>

            {/* If no books are scheduled, display a message */}
            {sortedBooks.length === 0 && <p>No scheduled sessions.</p>}

            {/* Map through sorted scheduled books and display each in a Card */}
            {sortedBooks.map((book) => (
                <Card key={book.id} className="mb-2">
                    <Card.Body>
                        {/* Book title */}
                        <Card.Title>{book.title}</Card.Title>

                        {/* Book author */}
                        <Card.Subtitle className="text-muted">
                            {book.author}
                        </Card.Subtitle>

                        {/*Display the scheduled date formatted as a local string */}
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