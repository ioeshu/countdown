
"use client";

import { useEffect, useState } from "react";

const targetDate = new Date("2026-05-26T00:00:00Z").getTime();

function calculateTimeLeft() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      fontFamily: "sans-serif",
      background: "#000",
      color: "#fff"
    }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Countdown to May 26, 2026 🚀
      </h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <span style={{ fontSize: "48px", fontWeight: "bold" }}>{value}</span>
            <span style={{ fontSize: "14px", opacity: 0.6, display: "block" }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
