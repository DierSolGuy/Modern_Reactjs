// Creating Custom Hooks
// First we use a Cleanup function when the components uses the useFetch Hook and useEffect unmounts
import { useState, useEffect } from 'react';

// Custom Hooks in react need to start with "use" keyword.
const useFetch = (url) => {
    console.log(url)
    //const [name, setName] = useState('Mario');
    //const [age, setAge] = useState(2020);
    // List of Blogs in JSON Format
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)



    useEffect( () => { // we cannot make useEffect async
        /* Creating Abort Controller and we can associated with specific fetch request
         and once it is associated with specfic fetch, we can stop the fetch*/
        const abortcont = new AbortController();

        setTimeout( () => {
            // using signal property
            fetch(url, { signal: abortcont.signal }) // Fetching API - GET Request
                .then( res => {
                    console.log(res)
                    if(!res.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch( err => {
                    if (err.name === 'AbortError')
                        console.log('Fetch Aborted');                    
                    else {
                        setIsPending(false); 
                        setError(err.message);
                    }
                })
        }, 1000);
    /* we have to place the cleanup function inside useEffect and we just return it.
       returning a value inside useEffect hook and that value is a function and 
       when the component uses the useEffect or useFetch hook, it fires the cleanup function.*/
       
       //cleanup function

        return () => {
            console.log('Clean Up');
            abortcont.abort(); // This function abort whatever it is associated with fetch function in which it is used.
        }

    }, [url]);

    return { data, isPending, error };
}
 
export default useFetch;