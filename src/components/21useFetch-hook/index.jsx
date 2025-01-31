import { useEffect, useState } from "react";


export default function useFetch(url, options={}) {
    // 3 state
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        try {
            setPending(true)
            const response = await fetch(url, { ...options })
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const result = await response.json();
            setData(result);
            setError(null);
            setPending(false);

        } catch (error) {
            // console.log(error)
            setError(`${error}. Some Error Occured`)
            setPending(false);

        }
    }

    useEffect(() => {
        fetchData()
    }, [url])
    
    return {data, error, pending}
}