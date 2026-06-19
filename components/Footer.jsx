import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-lead">
          <h2>The Next Chapter Starte Here</h2>
          <Link href="/contact" className="btn btn-cream">
            Inquire Here
          </Link>
        </div>
        <div className="footer-right">
          <div className="footer-block">
            Based in Minnesota
            <br />
            Serving all of the Twin Cities — Minneapolis, Saint Paul &amp;
            surrounding areas
          </div>
          <div className="footer-block">
            Give us a Call:
            <br />
            <a href="tel:+15074120355">(507) 412-0355</a>
            <br />
            <a href="mailto:contact@graduatesofminnesota.com">
              contact@graduatesofminnesota.com
            </a>
          </div>
          <div className="footer-block">
            <Link href="/">Privacy Policy</Link>
            <br />
            <Link href="/">Accessibility Statement</Link>
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} Graduates of Minnesota
          </div>
        </div>
      </div>
    </footer>
  );
}
