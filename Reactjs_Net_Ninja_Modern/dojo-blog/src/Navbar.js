//type --> 'sfc + tab', which gives a stateless functional components boiler-plate.
// Link tag is used instead of <a> (anchor) tag and react handles the routing in browser with the help of Link tag.
// Link Tag is much quicker than anchor tag of HTML. 
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        // Creating Navbar template.
        <nav className="navbar">
            <h1> Our New Blog </h1>
            <div className="link">
               {/* <a href="/">Home</a>
                <a href="/create" style={{ // Adding Inline Styles
                    color: "white",
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'
                }}>New Blog</a> */}
                <Link to="/">Home</Link>
                <Link to="/create" style={{ // Adding Inline Styles
                    color: "white",
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;