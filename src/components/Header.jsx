import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div className="navbar bg-light py-4">
            <div className="container d-flex justify-content-between align-items-center">
                  <Link to="/home" style={{textDecoration: "none"}}><h2 className="text-dark">Recipe Organiser</h2></Link>

                  <ul className="navbar-nav flex-row gap-3">
                    <li className="nav-item">
                    <Link className="nav-link" to="/home">Recipes</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/addrecipe">Add Recipes</Link>
                    </li>
                    
                    
                  </ul>

            </div>
        </div>
    )
}

export default Header 