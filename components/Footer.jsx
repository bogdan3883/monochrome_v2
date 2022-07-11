export default function Footer() {
  return (
    <section className="footer container">
      <section className="footer-inner py-3 row">
        <section className="footer-contact col">
          <ul>
            <li>
              <a href="tel:+44 (0)10 2345 6789" title="Call us">
                Call us
              </a>
            </li>
            <li>
              <a href="tel:+44 (0)10 2345 6789" title="Call us">
                +44 (0)10 2345 6789
              </a>
            </li>
            <li>
              <a href="mailto:office@monochrome.com" title="Email us">
                Email customer care
              </a>
            </li>
          </ul>
        </section>

        <nav className="footer-nav col">
          <ul>
            <li>
              <a href="/" title="Style">
                Style & fit advice
              </a>
            </li>
            <li>
              <a href="/" title="Faqs">
                Faqs
              </a>
            </li>
            <li>
              <a href="/" title="Delivery">
                Delivery
              </a>
            </li>
            <li>
              <a href="/" title="Exchanges">
                Exchanges & returns
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer-nav col">
          <ul>
            <li>
              <a href="/" title="About us">
                About us
              </a>
            </li>
            <li>
              <a href="/" title="Careers">
                Careers
              </a>
            </li>
            <li>
              <a href="/" title="Affiliates">
                Affiliates
              </a>
            </li>
            <li>
              <a href="/" title="Advertising">
                Advertising
              </a>
            </li>
          </ul>
        </nav>

        <section className="footer-connect col">
          <ul className="row">
            <li>
              <p>Sign up to our newsletter</p>
              <input type="email" />
              <input type="button" value="Submit" />
            </li>
            <li className="col">
              <a href="https://x.ro" title="Youtube">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li className="col">
              <a href="https://x.ro" title="Twitter">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li className="col">
              <a href="https://x.ro" title="Facebook">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="col">
              <a href="https://x.ro" title="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
}
