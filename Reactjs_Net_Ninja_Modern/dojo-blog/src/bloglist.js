/* “Props” is a special keyword in React, which stands for properties 
and is being used for passing data from one component to another.
But the important part here is that data with props 
are being passed in a uni-directional flow. (one way from parent to child)*/

const BlogList = ({ blogs, title, handleDelete }) => {

    //const blogs=props.blogs;
    //const title=props.title;
    //const handleDelete=props.handleDelete;
    //console.log(props, blogs);

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                // map() function works like loop.
                // Each root element in the template must have a key property
                // This key() property, reactjs uses to keep track of each item in the DOM
                // Basically key() is an Id property for an array.
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>written by: { blog.author }</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;