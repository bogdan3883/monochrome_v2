export default function HeaderPrimary() {
  return (
    <section className="header-primary">
      <nav className="nav-primary container d-none d-lg-block">
        <ul>
          <li>
            <a href="https://x.ro" title="New Arrivals">
              New arrivals
            </a>
          </li>
          <li>
            <a href="https://x.ro" title="Brands">
              Brands
            </a>
          </li>
          <li>
            <a href="https://x.ro" title="Men's">
              Men's
            </a>
          </li>
          <li>
            <a href="https://x.ro" title="Women's">
              Women's
            </a>
          </li>
          <li>
            <a href="https://x.ro" title="Accessories">
              Accessories
            </a>
          </li>
          <li>
            <a href="https://x.ro" title="Lookbook">
              Lookbook
            </a>
          </li>
        </ul>
      </nav>

      <div className="nav-primary-responsive container d-lg-none">
        <ul className="p-2">
          <li className="hamburger col">
            <a href="/" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </a>
          </li>

          <li className="search-box col d-flex">
            <input
              type="text"
              name="nav-search"
              id="nav-search"
              placeholder="search"
              required
              className="col-md"
            ></input>

            <button type="submit" title="Search" className="col-md offset-md-3">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>
        </ul>
      </div>

      <section className="header-banner d-lg-none">
        <div className="header-banner">
          <img
            src="/images/banners/banner-low.png"
            alt="Monochrome Banner"
            className=""
          />
          <button type="button">New in</button>
        </div>
      </section>
    </section>
  );
}
