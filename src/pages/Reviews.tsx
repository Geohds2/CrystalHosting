import React from "react";

const Reviews: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>What Our Customers Say</h1>
            <div style={styles.review}>
                <p style={styles.reviewText}>
                    "Crystal Hosting offers the best Minecraft server hosting I've ever used! Reliable, fast, and great support."
                </p>
                <p style={styles.reviewer}>— Alex G.</p>
            </div>
            <div style={styles.review}>
                <p style={styles.reviewText}>
                    "Setup was instant, and the uptime is fantastic. Highly recommend Crystal Hosting!"
                </p>
                <p style={styles.reviewer}>— Jamie L.</p>
            </div>
            <div style={styles.review}>
                <p style={styles.reviewText}>
                    "Affordable prices and premium service. Crystal Hosting is my go-to for Minecraft servers."
                </p>
                <p style={styles.reviewer}>— Morgan T.</p>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        backgroundColor: "#0a101f",
        color: "#e1e4ea",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        maxWidth: "900px",
        margin: "0 auto",
    },
    heading: {
        fontSize: "2.5rem",
        marginBottom: "30px",
        color: "#3a72f8",
        fontWeight: "700",
    },
    review: {
        backgroundColor: "#141f40",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "0 2px 8px rgba(58, 114, 248, 0.3)",
    },
    reviewText: {
        fontSize: "1.1rem",
        marginBottom: "12px",
        color: "#b0bbd9",
    },
    reviewer: {
        fontSize: "1rem",
        fontStyle: "italic",
        color: "#3a72f8",
    },
};

export default Reviews;
