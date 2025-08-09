import React from "react";

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "#121212",
        padding: "2rem",
        borderRadius: "10px",
        color: "#ddd",
    },
    link: {
        color: "#2c8eed",
        textDecoration: "none",
        fontWeight: "bold",
    },
};

const Support: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1>Support Center</h1>
            <p>
                Need help? Join our Discord community for support and questions:{" "}
                <a href="https://discord.gg/A78Sg6MuHZ" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    Discord Server
                </a>
            </p>
        </div>
    );
};

export default Support;
