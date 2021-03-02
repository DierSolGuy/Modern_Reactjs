//type --> 'sfc + tab', which gives a stateless functional components boiler-plate.

const Navbar = () => {
    return (  
        // Creating Navbar template.
        <nav className="navbar">
            <h1> Our New Blog </h1>
            <div className="link">
                <a href="/">Home</a>
                <a href="/create" style={{ // Adding Inline Styles
                    color: "white",
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;