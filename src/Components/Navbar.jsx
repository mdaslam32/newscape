const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div className="navbar-brand">
          <span className="newscape badge bg-light text-dark fs-4">
            Newscape
          </span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategory("general");
                }}
              >
                General
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategory("technology");
                }}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategory("business");
                }}
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategory("health");
                }}
              >
                Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategory("science");
                }}
              >
                Science
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategory("sports");
                }}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategory("entertainment");
                }}
              >
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
