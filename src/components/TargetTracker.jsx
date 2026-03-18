import React from "react";
import { Form, ProgressBar } from "react-bootstrap";

function TargetTracker({ target, setTarget, books }) {
    const completedBooks = books.filter((book) => book.read).length;

    const progress =
        target > 0 ? Math.min((completedBooks / target) * 100, 100) : 0;

    return (
        <div className="mb-4">
            <h4>🎯 Reading Target</h4>

            <Form.Control
                type="number"
                placeholder="Enter number of books"
                value={target}
                onChange={(e) => setTarget(Number(e.target.value))}
            />

            <p className="mt-2">
                Completed: {completedBooks} / {target || 0}
            </p>

            <ProgressBar now={progress} label={`${Math.round(progress)}%`} />
        </div>
    );
}

export default TargetTracker;