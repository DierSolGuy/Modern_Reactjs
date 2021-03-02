// Hook is a special type of function in React.
// For changing some values in some point, we use react hook function.
// The Map Method cycles through an array and it can do some operations with each itemin the array.
// useState() is used to create some state for the components.
/* useEffect() fires on every render or refresh. Normally, inside useEffect() we can,
    1. Fetch Data
    2. Communicate with some Authentication */

import { useState, useEffect } from 'react';
import BlogList from './bloglist';



const Home = () => {

    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(2020);
    // List of Blogs in JSON Format
    const [blogs, setBlogs] = useState(null);

    const handleClick = () => {
        setName('Aeonix Research and Innovations');
        setAge(2023);
    };

    const handleClickAgain = (name, e) => {
        console.log('Hello! '+name, e.target);
    };

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    // useEffect( () => {
    //     console.log('Use Effect run');
    //     console.log(blogs);
    //     console.log(name);
    // }, [name]);

    useEffect( () => { // we cannot make useEffect async
        fetch('http://localhost:8000/blogs') // Fetching API - GET Request
            .then()
            .catch();

    }, []);

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) =>blog.author === 'mario')} title="Mario's Blogs!" />

            <p>{ name } and Established on { age }</p>
            <button onClick = { handleClick }>Click Here</button>
            <button onClick = { (e) => handleClickAgain('Sourish', e) }>Click Me Again</button>
            <button onClick = { () => setName('Luci') }>Chang