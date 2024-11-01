import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    //{ selectedTab, setSelectedTab }
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sideBar"
      style={{ width: "180px",position:"fixed" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
      <spna ></spna>
        {/* <span className="fs-4 logo-font" style={{marginTop:"15px"}}>
        Sparsh
        </span> */}
       
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item side-bar">
          <Link to="/" className="nav-link  text-white " aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li className="side-bar">
          <Link to="/create-post" className="nav-link  text-white ">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            New Post
          </Link>
        </li>
      </ul>
      <hr />
      
    </div>
  );
};
export default SideBar;
