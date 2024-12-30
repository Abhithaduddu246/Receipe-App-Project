import { NavLink } from "react-router-dom";
import "./nav.css";
import { useContext } from "react";
import { RecipeContext } from "../navigation/navigation";

const NavBar = () => {
    const linkStyle = { margin: 50, textDecoration: "none", fontFamily: "cursive" };
    const {favouriteDish}=useContext(RecipeContext)
    
    return (
        <div className="" >
        
     <center>  <img src="https://www.goteso.com/products/assets/images/clone-scripts/zomato/zomato-clone-banner.png" style={{}} width={250} height={150}  /> <span style={{fontSize:"26px",fontFamily:"cursive"}}>Welcome to</span><img src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.jpg" style={{borderRadius:"10px",margin:"10px"}}  width={150}  height={80}/>
       
     </center>
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to="/" style={linkStyle} > HOME</NavLink>
                        </li>
                       
                        <li className="nav-item">
                            <NavLink to="/receipes" style={linkStyle}>RECEIPES</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/receipe-details" style={linkStyle}>DETAILS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/:receipeId" style={linkStyle}>SEE MORE</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/favourite" style={linkStyle}>FAVOURITES {favouriteDish.length}</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/search" style={linkStyle}>SEARCH</NavLink>
                            </li>

                            <li className="nav-item">
                            <NavLink to="/contact" style={linkStyle} end>CONTACT</NavLink>
                        
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
        </div>
    );
};

export default NavBar;
