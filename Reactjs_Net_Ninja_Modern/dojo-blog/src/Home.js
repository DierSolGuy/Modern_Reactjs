// Hook is a special type of function in React.
// For changing some values in some point, we use react hook function.
// The Map Method cycles through an array and it can do some operations with each itemin the array.
// useState() is used to create some state for the components.
/* useEffect() fires on every render or refresh. Normally, inside useEffect() we can,
    1. Fetch Data
    2. Communicate with some Authentication */


import BlogList from './bloglist';
import useFetch from './useFetch';



const Home = () => {

    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');

    // const handleClick = () => {
    //     setName('Aeonix Research and Innovations');
    //     setAge(2023);
    // };

    // const handleClickAgain = (name, e) => {
    //     console.log('Hello! '+name, e.target);
    // };

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter( blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // };

    // useEffect( () => {
    //     console.log('Use Effect run');
    //     console.log(blogs);
    //     console.log(name);
    // }, [name]);

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            {/* Conditional Templating and Rendering by && */}
           {/* blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} /> */}

           { error && <div>{ error }</div>}
           { isPending && <div> Loading... </div> }
           { data && <BlogList blogs={data} title="All Blogs!" />}
            { data && <BlogList blogs={data.filter((blog) =>blog.author === 'mario')} title="Mario's Blogs!" /> }
            { data && <BlogList blogs={data.filter((blog) =>blog.author === 'yoshi')} title="Yoshi's Blogs!" /> }

           {/* <p>{ name } and Established on { age }</p>
            <button onClick = { handleClick }>Click Here</button>
            <button onClick = { (e) => handleClickAgain('Sourish', e) }>Click Me Again</button>
            <button onClick = { () => setName('Luci') }>Change Name</button> */}
        </div>
        
     );
}
 
export default Home;