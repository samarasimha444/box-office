import React, { useEffect, useState, useReducer } from 'react';
import reducer from '../Components/Starred Logic.jsx';
import PageLoader from '../Components/PageLoader.jsx';
import NoResult from '../Components/NoresultsComp.jsx';
import { Link } from 'react-router-dom';
import { UnstarComp } from '../Components/star_unstar/Star.jsx';
import  unstar from '../Components/star_unstar/star.png'

// Initializer function to load state from local storage
const initializer = () => {
const storedData = localStorage.getItem('starredPages');
return storedData ? JSON.parse(storedData) : [];
};


const Starred = () => {
  
const [starredPages, dispatch] = useReducer(reducer, [], initializer);
const [fetchedShows, setFetchedShows] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

  // Fetch data for starred pages
useEffect(() => {
  const fetchData = async () => {
  setIsLoading(true);
  setError(null);
  try {
  const requests = starredPages.map(id =>
  fetch(`https://api.tvmaze.com/shows/${id}`).then(res => res.json()));
  const results = await Promise.all(requests);
  setFetchedShows(results)} 
  catch (error) {setError(error);}
   finally {setIsLoading(false);}
    };
   fetchData();
  }, [starredPages]);

  // Remove star function
  const removeStar = (id) => {
  dispatch({ type: 'REMOVE_STAR', payload: id });
  };

  useEffect(() => {
    localStorage.setItem('starredPages', JSON.stringify(starredPages));
  }, [starredPages]);

  return (
    <div>
      <h1>Starred Shows</h1>
      {isLoading && <PageLoader />}
      {error && <NoResult />}
      {!isLoading && fetchedShows.length === 0 && <p>No starred shows</p>}
      <ul>
        {fetchedShows.map(show => (
          <li key={show.id}>
            <img src={show.image ?show.image.medium:unstar}></img>
            <h2>{show.name}</h2>
            <div>{show.type}</div>
            <div>{show.language}</div>
            <div>{show.rating.average}</div>
            <div>{}</div>
            <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
            <Link to={`/show/${show.name}/${show.id}`}>read more</Link>
            <button onClick={() => removeStar(show.id)}>
            <UnstarComp/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Starred;
