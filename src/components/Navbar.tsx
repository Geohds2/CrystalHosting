import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.logo}>Crystal Hosting</h1>
            <div style={styles.navLinks}>
                <Link to="/" style={styles.navLink}>Home</Link>
                <Link to="/services" style={styles.navLink}>Services</Link>
                <Link to="/about" style={styles.navLink}>About Us</Link>
                <Link to="/reviews" style={styles.navLink}>Reviews</Link>
                <Link to="/billing" style={styles.navLink}>Billing</Link>
            </div>
            <button style={styles.getStartedBtn}>Get Started</button>
        </nav>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 40px",
        backgroundColor: "#0a101f",
        borderBottom: "1px solid #16233c",
    },
    logo: {
        color: "#3a72f8",
        fontWeight: "700",
        fontSize: "1.6rem",
        cursor: "pointer",
    },
    navLinks: {
        display: "flex",
        gap: "25px",
    },
    navLink: {
        color: "#b0bbd9",
        textDecoration: "none",
        fontWeight: 500,
        fontSize: "1rem",
    },
    getStartedBtn: {
        backgroundColor: "#3a72f8",
        color: "white",
        border: "none",
        borderRadius: "6px",
        padding: "10px 18px",
        fontWeight: "600",
        cursor: "pointer",
    },
};

export default Navbar;
