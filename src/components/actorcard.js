import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../api/App.css"; // Assuming you have a CSS file for styling
import  noresult from "../noresesults.jpg"

const ActorCard = () => {
    let { personid } = useParams();
    const [showData, setShowData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShowData = async () => {
            try {
                let response = await fetch(`https://api.tvmaze.com/people/${personid}`);
                let data = await response.json();
                setShowData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchShowData();
    }, [personid]);

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error fetching data: {error.message}</div>;
    }

    return (
        <div className="actor-card">
            <div className="actor-details">
                <h1>{showData.name}</h1>
                <p dangerouslySetInnerHTML={{ __html: showData.summary || 'No summary found' }} />
                {showData.image ? (
                    <img src={showData.image.medium} alt={showData.name} />
                ) : (
                    <img src={noresult} alt="Default Image" height={"300px"} />
                )}
            </div>
            <div className="actor-info">
                <h2>Additional Information</h2>
                <ul>
                    <li><strong>Birthday:</strong> {showData.birthday || 'Unknown'}</li>
                    <li><strong>Gender:</strong> {showData.gender || 'Unknown'}</li>
                    <li><strong>Country:</strong> {showData.country ? showData.country.name : 'Unknown'}</li>
                    <li><strong>Born:</strong> {showData.born || 'Unknown'}</li>
                    <li><strong>Death:</strong> {showData.died ? showData.died : 'N/A'}</li>
                    <li><strong>Official Site:</strong> {showData.officialSite ? <a href={showData.officialSite} target="_blank" rel="noopener noreferrer">Link</a> : 'N/A'}</li>
                    <li><strong>IMDb:</strong> {showData.externals && showData.externals.imdb ? <a href={`https://www.imdb.com/name/${showData.externals.imdb}`} target="_blank" rel="noopener noreferrer">Link</a> : 'N/A'}</li>
                    {/* Add more fields as needed */}
                </ul>
            </div>
        </div>
    );
};

export default ActorCard;