import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Show = () => {
    let {showid} = useParams();
    const [showData, setShowData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShowData = async () => {
            try {
                let response = await fetch(`https://api.tvmaze.com/shows/${showid}`);
                let data = await response.json();
                setShowData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchShowData();
    }, [showid]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    return (
        <div>
            <h1>{showData.name}</h1>
            <p dangerouslySetInnerHTML={{ __html: showData.summary }} />
            {showData.image && <img src={showData.image.medium} alt={showData.name} />}
        </div>
    );
};

export default Show;
