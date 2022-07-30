export default function HeaderPrimary() {
  return (
    <section className="header-primary">
      <nav className="nav-primary container p-0 d-none d-lg-block">
        <ul className="container px-4">
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
        <ul className="container row m-0">
          <li className="hamburger col-6">
            <a href="/" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </a>
          </li>

          <li className="search-box col-6">
            <input
              className=" col-6"
              type="text"
              name="nav-search"
              id="nav-search"
              placeholder="search"
              required
            ></input>
            <button className="col-6 text-end" type="submit" title="Search">
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
          {/* <button type="button">New in</button> */}
        </div>
      </section>
    </section>
  );
}
