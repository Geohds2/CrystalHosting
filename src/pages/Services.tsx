import React from "react";

const Services: React.FC = () => {
    // Example plans based on $1.25 per GB
    const plans = [
        { name: "Basic", storageGB: 5, price: (5 * 1.25).toFixed(2) },
        { name: "Standard", storageGB: 10, price: (10 * 1.25).toFixed(2) },
        { name: "Pro", storageGB: 20, price: (20 * 1.25).toFixed(2) },
        { name: "Enterprise", storageGB: 50, price: (50 * 1.25).toFixed(2) },
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Crystal Hosting Plans</h1>
            <div style={styles.planContainer}>
                {plans.map((plan) => (
                    <div key={plan.name} style={styles.planCard}>
                        <h2 style={styles.planName}>{plan.name}</h2>
                        <p style={styles.planStorage}>{plan.storageGB} GB Storage</p>
                        <p style={styles.planPrice}>${plan.price} / month</p>
                        <button style={styles.ctaButton}>Select Plan</button>
                    </div>
                ))}
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
        textAlign: "center",
    },
    heading: {
        fontSize: "2.5rem",
        marginBottom: "40px",
        color: "#3a72f8",
    },
    planContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
    },
    planCard: {
        backgroundColor: "#141f40",
        padding: "30px",
        borderRadius: "10px",
        width: "220px",
        boxShadow: "0 4px 10px rgba(58, 114, 248, 0.3)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
    },
    planName: {
        fontSize: "1.6rem",
        marginBottom: "15px",
        color: "#3a72f8",
    },
    planStorage: {
        fontSize: "1.2rem",
        marginBottom: "10px",
    },
    planPrice: {
        fontSize: "1.4rem",
        fontWeight: "700",
        marginBottom: "20px",
    },
    ctaButton: {
        backgroundColor: "#3a72f8",
        border: "none",
        borderRadius: "6px",
        padding: "10px 20px",
        color: "white",
        fontWeight: "600",
        cursor: "pointer",
    },
};

export default Services;
