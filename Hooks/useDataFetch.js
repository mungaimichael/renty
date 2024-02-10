import { useEffect, useState } from "react";


const useDataFetch = (url) => {


    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                setLoading(true)
                if (response.ok) {
                    const data = await response.json();
                    setHouses(data);
                    setLoading(false)
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return { houses, loading }
}

export default useDataFetch; 