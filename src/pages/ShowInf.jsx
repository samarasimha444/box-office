import { useParams} from "react-router-dom";
import useFetch from "../Components/ShowFetcher.jsx";
import { useReducer, useState, useEffect } from "react";
import FormComp from "../Components/Form";
import { shows_id, show_search } from "../Components/variables";
import Nav from "../Components/Navigators";
import NoResult from "../Components/NoresultsComp.jsx";
import PageLoader from "../Components/PageLoader.jsx";
import ShowComp from "../Components/showComp.jsx";
import NoInternet from "../Components/NoInternet.jsx";
import reducer from "../Components/Starred Logic.jsx";

// Initial state for the reducer
const initialState = [];

// Reducer function to handle toggle actions


const ShowInf = () => {
const [state, dispatch] = useReducer(reducer, initialState);

  
useEffect(() => {
localStorage.setItem("starred",state)
},
[state]);

const handleClick = (value) => {
dispatch({ type: "TOGGLE_VALUE", value })

};

  const { query, specific } = useParams();
  const [searchedQuery, setSearchedQuery] = useState();

  const { isLoading, data, error } = useFetch(shows_id, specific);
  const { isLoading: isLoading1, data: data1, error: error1 } = useFetch(show_search, query);
  const onchange = (ev) => setSearchedQuery(ev.target.value);

  return (
    <div>
       <Nav />
       <FormComp query={searchedQuery} onchange={onchange} />
       <div>
       {isLoading && (<PageLoader/>)}
       {error && (<NoResult />)}
        {data && (
          <div>
            <div>
              <h1>INFO OF {data.name}</h1>
              {data.name === 'Not Found' ? (<NoResult />) : (
                <div>
                  <div>{data.name}</div>
                  <div>{data.id}</div>
                  <div dangerouslySetInnerHTML={{ __html: data.summary }}></div>
                  <button value={data.id} onClick={(ev) => handleClick(ev.target.value)}>Star me</button>
                </div>
              )}
            </div>
            <h1>Similar Results</h1>
            <div>
              {isLoading1 && (<PageLoader/>)}
              {error1 && (<NoInternet />)}
              {data1 && data1.map((a) => (
            <div key={a.show.id}>
                <ShowComp data={a} query={query} />
            </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowInf;
