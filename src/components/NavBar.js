import {Link} from "react-router-dom";

const NavBar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Tienda de ropa</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{scrollHeight: "100px"}}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                            </div>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="nav-link" to="/category/men">Men's clothing</Link></li>
                            <li><Link className="nav-link" to="/category/women">Women's clothing</Link></li>
                        </ul>
                        </li>
                    </ul>
                    <Link className="nav-link" to="/Cart">Cart</Link>
                </div>
            </div>
            </nav>
    );
};
export default NavBar;