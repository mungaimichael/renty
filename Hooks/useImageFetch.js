import { useEffect, useState } from "react";

const useImageFetch = (id) => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const fetchImages = async () => {
            const options = {
                method: 'GET',
                url: `https://realty-in-us.p.rapidapi.com/properties/v3/get-photos?property_id=${id}`,
                headers: {
                    'X-RapidAPI-Key': '8529d88d8cmsh282aa4bd8f5e139p159607jsn18f9942111cd',
                    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(options.url, options);
                setLoading(true);
                const data = await response.json();
                setImages(data.data.home_search.results[0]);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };


        fetchImages();

    }, []);


    return { images, loading }
}

export default useImageFetch