import { useParams, Link } from "react-router-dom";
import useFetch from "../Components/ShowFetcher.jsx";
import { useState, useReducer, useEffect } from "react";
import FormComp from "../Components/Form";
import { shows_id, show_search } from "../Components/variables";
import Nav from "../Components/Navigators";
import NoResult from "../Components/NoresultsComp.jsx";
import PageLoader from "../Components/PageLoader.jsx";
import ShowComp from "../Components/showComp.jsx";
import NoInternet from "../Components/NoInternet.jsx";
import reducer from "../Components/Starred Logic.jsx";
import { StarComp, UnstarComp } from "../Components/star_unstar/Star.jsx";


// Initializer function to load state from local storage
const initializer = () => {
  const storedData = localStorage.getItem('starredPages');
  return storedData ? JSON.parse(storedData) : [];
};

const ShowInf = () => {
  const [starredPages, dispatch] = useReducer(reducer, [], initializer);
  const { query, specific } = useParams();
  const [searchedQuery, setSearchedQuery] = useState('');

  const { isLoading, data, error } = useFetch(shows_id, specific);
  const { isLoading: isLoading1, data: data1, error: error1 } = useFetch(show_search, query);
  const onchange = (ev) => setSearchedQuery(ev.target.value);

  useEffect(() => {
    localStorage.setItem('starredPages', JSON.stringify(starredPages));
  }, [starredPages]);

  const toggleStar = (id) => {
    if (starredPages.includes(id)) {
      dispatch({ type: 'REMOVE_STAR', payload: id });
    } else {
      dispatch({ type: 'ADD_STAR', payload: id });
    }
  };

  return (
    <div className="container">
      <Link to={'/starred'} className="starred-link">Go to Starred</Link>
      <Nav />
      <FormComp query={searchedQuery} onchange={onchange} />

      {isLoading && (<PageLoader />)}
      {error && (<NoResult />)}

      {data && (
        <div className="show-info">
          <h1 className="show-title">INFO OF {data.name}</h1>
          {data.name === 'Not Found' ? (
            <NoResult />
          ) : (
            <div className="show-details">
              <div className="show-name">{data.name}</div>
              <img src={data.image && data.image.medium} alt="no image" className="show-image" />
              <div className="show-type">{data.type}</div>
              <div className="show-language">{data.language}</div>
              <div className="show-rating">{data.rating.average}</div>
              <div className="show-summary" dangerouslySetInnerHTML={{ __html: data.summary }}></div>
              <button onClick={() => toggleStar(data.id)} className="star-button">
                {starredPages.includes(data.id) ? <UnstarComp /> : <StarComp />}
              </button>
            </div>
          )}
          {isLoading1 && (<PageLoader />)}
          <h1 className="similar-results-title">Similar Results</h1>
          <div className="similar-results">
            {error1 && (<NoInternet />)}
            {data1 && data1.map((a) => (
              <div key={a.show.id} className="similar-show">
                <ShowComp data={a} query={query} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowInf;
