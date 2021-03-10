import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
//import { useHistory } from 'react-router-dom'; // This Hook is use to redirect to different pages for the users.


const BlogDetails = () => {
    // Fetching a particular blog
    const { id } = useParams();
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
         fetch('http://localhost:8000/blogs/' + data.id, {
             method: 'DELETE'
         })
         .then( () =>{
             history.push(`/`);
         })
    }

    return (
        <div className="blog-details">
            <h2>Blog Details - { id }</h2>
            { isPending && <div> Loading... </div>}
            { error && <div> {error} </div>}
            { data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written by { data.author }</p>
                    <div>{data.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;