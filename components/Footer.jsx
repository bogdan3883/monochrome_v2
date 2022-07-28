export default function Footer() {
  return (
    <section className="footer">
      <section className="footer-inner container d-none d-lg-block">
        <section className="footer-bottom py-3 row">
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
            <ul className="">
              <li>
                <p>Sign up to our newsletter</p>
                <input type="email" placeholder="email" />
                <input
                  type="button"
                  value="Submit"
                  className="my-2 d-lg-flex"
                />
              </li>
              <li className="d-lg-inline">
                <a href="https://x.ro" title="Youtube">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li className="d-lg-inline mx-2">
                <a href="https://x.ro" title="Twitter">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="d-lg-inline">
                <a href="https://x.ro" title="Facebook">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="d-lg-inline mx-2">
                <a href="https://x.ro" title="Instagram">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </section>

      <section className="footer-inner-responsive  d-lg-none">
        <section className="footer-connect-responsive ">
          <h3 className="text-center  pt-4">Let's connect</h3>
          <ul className="text-center container">
            <div className="container">
              <li className="text-center mb-4">
                <p>Be the first to recieve exclusive offers</p>
              </li>
              <li className="">
                <input
                  type="email"
                  className="w-75"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <button type="email" className="text-uppercase col w-50 mt-3">
                  Submit
                </button>
              </li>
            </div>
            <li className="text-center pt-4">
              <p>
                I agree with the <a href="/">Privacy Policy</a> and I want to
                recieve some emails from Monochrome
              </p>
            </li>
          </ul>
        </section>

        <section className="footer-social-responsive container">
          <h3 className="d-flex justify-content-center">
            We are highly likeable
          </h3>
          <ul className="d-flex justify-content-center gap-3 py-3 m-0">
            <li className="">
              <a href="https://x.ro" title="Youtube" className="">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li className="">
              <a href="https://x.ro" title="Twitter">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li className="">
              <a href="https://x.ro" title="Facebook">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="">
              <a href="https://x.ro" title="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </section>

        <section className="footer-nav-responsive p-4">
          <h3 className="text-center py-4">How can we help?</h3>
          <ul className="row container text-center m-0">
            <li className="col-6  border-right-0 border-white">
              <a href="/">about us</a>
            </li>
            <li className="col-6">
              <a href="/">careers</a>
            </li>
            <li className="col-6">
              <a href="/">affiliates</a>
            </li>
            <li className="col-6">
              <a href="/">advertising</a>
            </li>
            <li className="col-6">
              <a href="/">style and fit</a>
            </li>
            <li className="col-6">
              <a href="/">faqs</a>
            </li>
            <li className="col-6">
              <a href="/">delivery</a>
            </li>
            <li className="col-6">
              <a href="/">returns</a>
            </li>
          </ul>

          <ul>
            <li>
              <a className="terms text-center pt-4" href="/">
                terms & conditions
              </a>
            </li>
            <li>
              <a className="privacy text-center" href="/">
                privacy & cookies
              </a>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
}
