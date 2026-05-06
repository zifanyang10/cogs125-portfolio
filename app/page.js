"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      title: "LLM Conversation Organization Interface",
      description:
        "A design project exploring how AI conversations can be organized through a memory graph instead of a long linear chat history.",
      tags: "UX Design · Figma · AI Interface",
    },
    {
      title: "Game Room Observation Study",
      description:
        "An ethnographic research project about how students understand activity availability, waiting, and check-in behavior in the UCSD Game Room.",
      tags: "Field Research · Interaction Design · COGS 125",
    },
    {
      title: "Spotify Transition Redesign",
      description:
        "A redesign concept that makes track transition and crossfade settings easier to discover while listening to music.",
      tags: "Mobile UI · Redesign · Prototype",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px",
        fontFamily: "Arial, sans-serif",
        background: "#f7f4ef",
        color: "#111",
      }}
    >
      <section style={{ maxWidth: "850px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "14px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#6b6258",
            marginBottom: "12px",
          }}
        >
          COGS 125 Portfolio
        </p>

        <h1 style={{ fontSize: "44px", marginBottom: "18px" }}>
          My COGS 125 Portfolio
        </h1>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "650px",
            lineHeight: "1.6",
            color: "#444",
          }}
        >
          Hello! This is my Next.js portfolio site. For Assignment 3.2, I
          recreated a project card hover interaction inspired by Brittany
          Chiang’s portfolio.
        </p>

        <Link href="/about">
          <button
            style={{
              marginTop: "24px",
              padding: "12px 18px",
              borderRadius: "10px",
              border: "none",
              background: "black",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Go to About Page
          </button>
        </Link>

        <h2 style={{ marginTop: "60px", fontSize: "28px" }}>
          Selected Projects
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "#666",
            marginBottom: "22px",
            lineHeight: "1.5",
          }}
        >
          Hover over each project card to see the interaction.
        </p>

        <div style={{ display: "grid", gap: "18px" }}>
          {projects.map((project, index) => {
            const isHovered = hoveredCard === index;

            return (
              <div
                key={project.title}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  padding: "26px",
                  borderRadius: "18px",
                  border: isHovered
                    ? "1px solid #111"
                    : "1px solid rgba(0, 0, 0, 0.12)",
                  background: isHovered ? "#ffffff" : "#fdfaf5",
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? "0 18px 35px rgba(0, 0, 0, 0.14)"
                    : "0 6px 16px rgba(0, 0, 0, 0.06)",
                  transition: "all 0.25s ease",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "22px",
                        margin: "0 0 10px 0",
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.6",
                        color: "#555",
                        margin: "0 0 14px 0",
                      }}
                    >
                      {project.description}
                    </p>

                    <p
                      style={{
                        fontSize: "14px",
                        color: "#7a6f63",
                        margin: 0,
                      }}
                    >
                      {project.tags}
                    </p>
                  </div>

                  <span
                    style={{
                      fontSize: "26px",
                      transform: isHovered
                        ? "translateX(6px)"
                        : "translateX(0)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    →
                  </span>
                </div>

                <p
                  style={{
                    marginTop: "18px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.25s ease",
                  }}
                >
                  View project details
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}