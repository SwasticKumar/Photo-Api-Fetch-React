import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css'; 

function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setPhotos(response.data.slice(0, 100));
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className='bg-f'>
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {photos.map(photo => (
          <div key={photo.id} className="col text-center">
            <div className="card">
              <img src={photo.url} className="card-img-top img-fluid" alt={photo.title} />
              <div className="card-body">
                <h5 className="card-title">{photo.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Gallery;