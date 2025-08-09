import React from "react";

const Home: React.FC = () => {
    return (
        <div style={styles.container}>
            <section style={styles.heroSection}>
                <span style={styles.tag}>💎 Premium Minecraft Hosting</span>
                <h2 style={styles.heroTitle}>
                    Power Your <br />
                    <span style={styles.highlight}>Minecraft Server</span> <br />
                    with Crystal Hosting
                </h2>
                <p style={styles.heroDescription}>
                    We provide ultra-reliable Minecraft server hosting with 24/7 uptime,
                    instant setup, and dedicated support for gamers worldwide.
                </p>
                {/* Search bar removed */}
            </section>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        backgroundColor: "#0a101f",
        color: "#e1e4ea",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    heroSection: {
        maxWidth: "900px",
        margin: "60px auto",
        textAlign: "center",
    },
    tag: {
        color: "#3a72f8",
        fontWeight: "600",
        fontSize: "0.9rem",
        padding: "4px 12px",
        border: "1.5px solid #3a72f8",
        borderRadius: "20px",
        display: "inline-block",
        marginBottom: "20px",
    },
    heroTitle: {
        fontSize: "3rem",
        fontWeight: "700",
        marginBottom: "20px",
        lineHeight: 1.1,
        color: "#e1e4ea",
    },
    highlight: {
        color: "#3a72f8",
    },
    heroDescription: {
        fontSize: "1.2rem",
        color: "#b0bbd9",
        marginBottom: "40px",
        maxWidth: "650px",
        marginLeft: "auto",
        marginRight: "auto",
    },
};

export default Home;
