import React from "react";

const Billing: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Billing & Payments</h1>
            <p style={styles.text}>
                At Crystal Hosting, we make billing simple and transparent.
            </p>
            <ul style={styles.list}>
                <li>💎 Pay $1.25 per GB of Minecraft server storage.</li>
                <li>⚡ Flexible monthly billing — cancel anytime.</li>
                <li>🔒 Secure payment processing with all major credit cards and PayPal.</li>
                <li>📄 Receive detailed invoices instantly by email.</li>
            </ul>
            <p style={styles.text}>
                For any billing inquiries, please contact our support team.
            </p>
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
    text: {
        fontSize: "1.1rem",
        lineHeight: 1.6,
        marginBottom: "20px",
        color: "#b0bbd9",
    },
    list: {
        fontSize: "1.1rem",
        marginBottom: "20px",
        color: "#b0bbd9",
        paddingLeft: "20px",
        listStyleType: "disc",
    },
};

export default Billing;
