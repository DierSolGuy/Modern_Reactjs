import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // This Hook is use to redirect to different pages for the users.


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Yoshi');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); // Invoking the Hook

    const handleSubmit = (e) => {

        e.preventDefault(); // Preventing the page from being refreshed after submit\

        const blog = { title, body, author }
        console.log(blog);

        // Creating a POST Request and Saving data to the JSON Database
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
            }) // Asynchronous Function
            .then( () => {
                console.log('New Blog Added');
                setIsPending(false);
                //history.go(-1); // It will redirect the user to previous page.
                history.push(`/`); // Redirecting to the home page route.
            })
            .catch( (e) => console.log(e))
    }

    return ( 
        <div className="create">
            <h2> Add A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog Title: </label>
                <input 
                    type="text"
                    required
                    value={ title }
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <label> Blog Body </label>
                <textarea 
                    required
                    value={ body }
                    onChange = {(e) => setBody(e.target.value)}
                >

                </textarea>
                <label> Blog Author: </label>
                <select
                    value={ author }
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                { !isPending && <button> Add Blog </button> }
                { isPending && <button disabled> Adding Blog... </button> }
                { /*<p>{title}</p>
                <p>{body}</p> */}
                
            </form>
        </div>
     );
}
 
export default Create;
