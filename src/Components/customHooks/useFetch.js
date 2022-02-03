import { useEffect, useState } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const abortController = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortController.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error("Failed to fetch resource");
                    }
                    return res.json();
                })
                .then(json => {
                    setIsLoading(false);
                    setData(json);
                    setError(null);
                })
                .catch(err => {
                    if (err.name !== "AbortError") {
                        setIsLoading(false);
                        setError(err.message);
                    }
                });
        }, 1400);
        return () => abortController.abort();
    }, [url]);


    return {data, isLoading, error};
};


export default useFetch;