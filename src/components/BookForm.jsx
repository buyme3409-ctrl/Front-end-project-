import React, { useState } from "react";
import { Form, Button, Card, InputGroup } from "react-bootstrap";

function BookForm({ addBook }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [genre, setGenre] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !author) return;

        const schedule = date && time ? new Date(`${date}T${time}`) : null;

        addBook({ title, author, schedule, genre });

        // reset fields
        setTitle("");
        setAuthor("");
        setDate("");
        setTime("");
        setGenre("");
    };

    return (
        <Card className="mb-5 shadow-lg p-4">
            <Card.Body>
                <Card.Title className="mb-4 text-primary">Add a New Book</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Book Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Author Name"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="e.g. Fiction, Non-Fiction"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                    </Form.Group>

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

                    <Button type="submit" variant="primary" className="w-100 py-2">
                        Add Book
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default BookForm;