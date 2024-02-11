import { useEffect, useState } from "react";


const useDataFetch = (url) => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '8529d88d8cmsh282aa4bd8f5e139p159607jsn18f9942111cd',
                    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
                },
                body: JSON.stringify({

                    limit: 10,
                    offset: 0,
                    postal_code: '90004',
                    status: ['for_sale'],
                    sort: {
                        direction: 'desc',
                        field: 'list_date'
                    }
                })
            };

            try {
                const response = await fetch(url, options);
                setLoading(true)
                const data = await response.json()
                setData(data.data.home_search.results)
                setLoading(false)
            } catch (error) {
                console.error(error);
            }

        };


        fetchData();
    }, []);


    return { data, loading }
}

export default useDataFetch; 