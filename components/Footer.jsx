import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <h2>The Next Chapter Starte Here</h2>
        <Link href="/contact" className="btn btn-cream">
          Inquire Here
        </Link>
        <div className="footer-block">
          Friday, October 26, 2035, 5:00 PM
          <br />
          Safdie Foundry, San Francisco
        </div>
        <div className="footer-block">
          Give us a Call:
          <br />
          Elaine 123-4567890
          <br />
          Jordan 123-4567890
        </div>
        <div className="footer-block">
          <Link href="/">Privacy Policy</Link>
          <br />
          <Link href="/">Accessibility Statement</Link>
        </div>
        <div className="footer-copy">
          © 2035 by E&amp;J. Powered and secured by Vercel
        </div>
      </div>
    </footer>
  );
}
