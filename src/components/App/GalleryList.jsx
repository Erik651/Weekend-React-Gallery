import GalleryItem from './GalleryItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';

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
    <Container data-testid="galleryList">
      <h2>Gallery List</h2>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: 'lightblue',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {galleryList.map((gallery) => (
          <GalleryItem
            data-testid="galleryItem"
            key={gallery.id}
            gallery={gallery}
            getGalleryList={getGalleryList}
          />
        ))}
      </Container>
    </Container>
  );
}

export default GalleryList;
