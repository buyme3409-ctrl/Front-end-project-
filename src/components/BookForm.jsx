import React, { useState } from "react";
import { Form, Button, Card, InputGroup } from "react-bootstrap";

// BookForm component allows the user to add a new book with optional schedule and genre
function BookForm({ addBook }) {
    // Local state to store form input values
    const [title, setTitle] = useState("");   // Book title
    const [author, setAuthor] = useState(""); // Book author
    const [date, setDate] = useState("");     // Scheduled date (optional)
    const [time, setTime] = useState("");     // Scheduled time (optional)
    const [genre, setGenre] = useState("");   // Book genre (optional)

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload on submit

        // Simple validation: must have title and author
        if (!title || !author) return;

        // Combine date and time into a JavaScript Date object if both are provided
        const schedule = date && time ? new Date(`${date}T${time}`) : null;

        // Call the addBook function from parent with new book data
        addBook({ title, author, schedule, genre });

        // Reset form fields after submission
        setTitle("");
        setAuthor("");
        setDate("");
        setTime("");
        setGenre("");
    };

    return (
        <Card className="mb-5 shadow-lg p-4">
            <Card.Body>
                {/* Card header */}
                <Card.Title className="mb-4 text-primary">Add a New Book</Card.Title>

                {/* Form element */}
                <Form onSubmit={handleSubmit}>
                    {/* Title input */}
                    <Form.Group className="mb-4">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Book Title"
                            value={title}                     // Controlled input
                            onChange={(e) => setTitle(e.target.value)} // Update state on change
                        />
                    </Form.Group>

                    {/* Author input */}
                    <Form.Group className="mb-4">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Author Name"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </Form.Group>

                    {/* Genre input */}
                    <Form.Group className="mb-4">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="e.g. Fiction, Non-Fiction"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                    </Form.Group>

                    {/* Date and time inputs grouped together */}
                    <InputGroup className="mb-4">
                        <InputGroup.Text>Date</InputGroup.Text>
                        <Form.Control
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <InputGroup.Text>Time</InputGroup.Text>
                        <Form.Control
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </InputGroup>

                    {/* Submit button */}
                    <Button type="submit" variant="primary" className="w-100 py-2">
                        Add Book
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default BookForm;