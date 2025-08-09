import React from "react";

const Dashboard: React.FC = () => {
    return (
        <div className="container">
            <h1>Dashboard</h1>
            <p>Welcome back, <strong>User!</strong></p>

            <section>
                <h2>Your Servers</h2>
                <ul>
                    <li>Minecraft Server 1 — Running</li>
                    <li>Minecraft Server 2 — Offline</li>
                </ul>
                <button>Manage Servers</button>
            </section>

            <section>
                <h2>Account Stats</h2>
                <p>Uptime: 99.9%</p>
                <p>Last Payment: 30 days ago</p>
            </section>
        </div>
    );
};

export default Dashboard;
