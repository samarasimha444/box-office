import noresult from '../noresesults.jpg';
import { Link } from 'react-router-dom';

const ShowCard = ({ data }) => {
  if (typeof data === 'string') {
    return <div>{data}</div>;
  }

  if (data.length > 0) {
    return (
      <div className="card-container">
        {data.map((item) => {
          const image = item.show ? item.show.image : item.person.image;
          const name = item.show ? item.show.name : item.person.name;
          const id = item.show ? item.show.id : item.person.id;
          const linkUrl = item.show ? `/show/${id}` : `/people/${id}`;
          const language=item.show ?item.show.language :item.person.country?item.person.country.name :"unknown"
          const shortInfo = item.show ? item.show.summary : item.person.biography;
          const genres = item.show ? item.show.genres : null;

          return (
            <div className="card" key={id}>
              <img src={image != null ? image.medium : noresult} alt={name} className="card-image" />
              <div className="card-body">
                <h2 className='card-title'>{name}</h2>
                <div className='language'>{language}</div>
                {genres && (
                  <div className="genres"  style={{display:"flex",flexWrap:"wrap"}}>
                    {genres.map((genre) => (
                      <div key={genre} className="genre" style={{ backgroundColor: `#${genre.substring(0, 3)}`}}>
                        {genre}
                      </div>
                    ))}
                  </div>
                )}
                
                <Link to={linkUrl}>Read More</Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>No data</div>;
  }
};

export default ShowCard;