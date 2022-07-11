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

      <div className="nav-search d-lg-none">
        <ul>
          <li className="hamburger">
            <a href="http://www.pixellab.ro" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </a>
          </li>

          <li className="search-box">
            <input
              type="text"
              name="nav-search"
              id="nav-search"
              placeholder="search"
              required
            ></input>

            <button type="submit" title="Search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
