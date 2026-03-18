import React from "react";
import { Form, ProgressBar } from "react-bootstrap";

// TargetTracker component shows reading progress toward a target number of books
function TargetTracker({ target, setTarget, books }) {
    // Count how many books have been marked as read
    const completedBooks = books.filter((book) => book.read).length;

    // Calculate progress as a percentage (capped at 100%)
    const progress =
        target > 0 ? Math.min((completedBooks / target) * 100, 100) : 0;

    return (
        <div className="mb-4">
            {/* Section title */}
            <h4>🎯 Reading Target</h4>

            {/* Input to set or change the target number of books */}
            <Form.Control
                type="number"
                placeholder="Enter number of books"
                value={target}                     // Controlled input
                onChange={(e) => setTarget(Number(e.target.value))} // Update target in parent state
            />

            {/* Display the number of completed books vs target */}
            <p className="mt-2">
                Completed: {completedBooks} / {target || 0}
            </p>

            {/* Progress bar showing percentage of books completed */}
            <ProgressBar
                now={progress}                     // Current progress in percent
                label={`${Math.round(progress)}%`} // Label with rounded percentage
            />
        </div>
    );
}

export default TargetTracker;