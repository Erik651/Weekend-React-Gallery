import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

function LikesButton({ galleryItem, getGalleryList }) {
  // const [likes, setLikes] = useState(0);
  // const [likesCount, setLikesCount] = useState([]);

  // const increaseLikes = () => {
  //   setLikes(likes + 1);

  //   console.log('likes', likes);
  // };

  // const getLikes = () => {
  //   axios
  //     .get('/api/gallery')
  //     .then((response) => {
  //       console.log('Data:', response.data);

  //       setLikesCount(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       alert('Something went wrong!');
  //     });
  // };

  // useEffect(() => {
  //   getLikes();
  // }, []);
  //console.log('Like add', likes);
  //const data = {likes: likes};

  const sendLikesToServer = (e) => {
    console.log('button click')
    e.preventDefault();
    axios
      .put(`/api/gallery/like/${galleryItem.id}`)
      .then((response) => {
        console.log("test")
        getGalleryList();
      })
      .catch((error) => {
        console.error(error);
        alert('Something went wrong!');
      });
  };

  return (<>
    <button value={galleryItem.likes} onClick={sendLikesToServer}>
    Click to Like
    </button>
    <h3>Liked Button Smashed {galleryItem.likes} Times!!</h3>
    </>
  );
}

export default LikesButton;
