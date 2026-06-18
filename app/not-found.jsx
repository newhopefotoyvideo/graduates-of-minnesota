import Link from "next/link";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section
      className="section bg-cream"
      style={{
        minHeight: "70svh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "calc(var(--header-h) + 60px)",
      }}
    >
      <div className="container">
        <p className="eyebrow" style={{ display: "block", marginBottom: 16 }}>
          Error 404
        </p>
        <h1 className="h-display" style={{ color: "var(--red)" }}>
          Page Not Found
        </h1>
        <p className="script" style={{ color: "var(--blue)", fontSize: "2rem", margin: "10px 0 28px" }}>
          Let&rsquo;s get you back on track
        </p>
        <Link href="/" className="btn btn-red">
          Return Home
        </Link>
      </div>
    </section>
  );
}
