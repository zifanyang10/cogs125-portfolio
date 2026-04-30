import Link from "next/link";

export default function About() {
  return (
    <main style={{
      minHeight: "100vh",
      padding: "60px",
      fontFamily: "Arial, sans-serif",
      background: "#eef3f7"
    }}>
      <h1>About This Project</h1>

      <p style={{ fontSize: "18px", maxWidth: "600px", lineHeight: "1.6" }}>
        This page demonstrates a simple interaction in Next.js.
        The button uses routing to move between two pages.
      </p>

      <Link href="/">
        <button style={{
          marginTop: "24px",
          padding: "12px 18px",
          borderRadius: "10px",
          border: "none",
          background: "black",
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Back Home
        </button>
      </Link>
    </main>
  );
}
