export default function HeaderSecondary() {
  return (
    <section className="header-secondary container d-none d-lg-block">
      <div className="nav-social ">
        <ul>
          <li>
            <a href="https://x.ro" title="Youtube">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://x.ro" title="Twitter">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://x.ro" title="Facebook">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://x.ro" title="Instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="tel:+0039 02 760 003 66" title="Call us">
              CALL US +44 (0)10 2345 6789
            </a>
          </li>
        </ul>

        <div className="nav-controls">
          <ul>
            <li>
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
                <i class="fa-solid fa-user"></i>
              </a>
            </li>
            <li>
              <a href="https://x.ro" title="Whishlist">
                <i class="fa-solid fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="https://x.ro" title="Cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
