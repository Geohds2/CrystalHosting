import React from "react";

const About: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>About Crystal Hosting</h1>
            <p style={styles.text}>
                At Crystal Hosting, we provide top-tier Minecraft server hosting backed by years of experience. Our mission is to offer reliable and affordable hosting tailored to gamers worldwide.
            </p>
            <p style={styles.text}>
                Founded by passionate gamers, we understand what you need in a hosting provider. With 24/7 support and a commitment to uptime, Crystal Hosting is your trusted partner.
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
        marginBottom: "20px",
        color: "#3a72f8",
        fontWeight: "700",
    },
    text: {
        fontSize: "1.1rem",
        lineHeight: 1.6,
        marginBottom: "20px",
        color: "#b0bbd9",
    },
};

export default About;
