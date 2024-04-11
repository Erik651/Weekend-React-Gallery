import GalleryItem from './GalleryItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

function GalleryList() {
  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getGalleryList();
  }, []);

  const getGalleryList = () => {
    axios
      .get('/api/gallery')
      .then((response) => {
        setGalleryList(response.data);
      })
      .catch((error) => {
        alert('error getting gallery list');
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <ul data-testid="galleryList">
          <h2>Gallery List</h2>
          <ul>
            {galleryList.map((gallery) => (
              <GalleryItem
                key={gallery.id}
                gallery={gallery}
                getGalleryList={getGalleryList}
              />
            ))}
            ;
          </ul>
        </ul>
      </div>
    </>
  );
}

export default GalleryList;
