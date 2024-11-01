import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 text-bg-dark myheader  ">
      <div className="container" style={{marginTop:"1rem"}}>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start header-components">
      

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Features
              </a>
            </li>

            <li>
              <Link to="/About" className="nav-link px-2 text-white ">
                About
              </Link>
            </li>
          </ul>

          <div className="text-end">
            
            <button type="button" className="btn  me-2 Header-btn ">
              <Link to="/login-form" className="login-btn "> Login
              </Link>  
            
            </button>
            <button type="button" className="btn    Header-btn ">
              <Link to="/sign-in-form" className="login-btn"> Sign-up</Link>
             
            </button>
          </div>
        
        </div>
      </div>
    </header>
  );
};
export default Header;
