export default function HeaderSecondary() {
  return (
    <section className="header-secondary ">
      <section className="header-secondary-inner container d-none d-lg-block">
        <div className="header-connect m-5">
          <ul className="">
            <li>
              <a href="https://x.ro" title="Youtube">
                <i class="fa-brands fa-youtube text-white"></i>
              </a>
            </li>
            <li>
              <a href="https://x.ro" title="Twitter">
                <i class="fa-brands fa-twitter text-white mx-3"></i>
              </a>
            </li>
            <li>
              <a href="https://x.ro" title="Facebook">
                <i class="fa-brands fa-facebook text-white"></i>
              </a>
            </li>
            <li>
              <a href="https://x.ro" title="Instagram">
                <i class="fa-brands fa-instagram text-white mx-3"></i>
              </a>
            </li>
            <li>
              <a
                href="tel:+0039 02 760 003 66"
                title="Call us"
                className="text-white"
              >
                CALL US +44 (0)10 2345 6789
              </a>
            </li>
          </ul>
        </div>

        <div className="header-controls">
          <ul className="m-5">
            <li className="search-box">
              <button type="submit" title="Search">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>

              <input
                type="text"
                name="nav-search"
                id="nav-search"
                placeholder="search"
                required
              ></input>
            </li>
            <li>
              <a href="https://x.ro" title="Account">
                <i class="fa-solid fa-user text-dark mx-3"></i>
              </a>
            </li>
            <li>
              <a href="https://x.ro" title="Whishlist">
                <i class="fa-solid fa-heart text-dark"></i>
              </a>
            </li>
            <li>
              <a href="https://x.ro" title="Cart">
                <i class="fa-solid fa-cart-shopping text-dark mx-3"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="header-secondary-responsive container d-lg-none row">
        <ul>
          <li className="d-inline-block text-uppercase my-3 col-9">
            <a href="/" title="Home">
              Monochrome
            </a>
          </li>
          <li className="d-inline-block col-1">
            <a href="/" title="Account">
              <i class="fa-solid fa-user text-dark"></i>
            </a>
          </li>
          <li className="d-inline-block col-1">
            <a href="/" title="Whishlist">
              <i class="fa-solid fa-heart text-dark"></i>
            </a>
          </li>
          <li className="d-inline-block col-1">
            <a href="/" title="Cart">
              <i class="fa-solid fa-cart-shopping text-dark"></i>
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}
