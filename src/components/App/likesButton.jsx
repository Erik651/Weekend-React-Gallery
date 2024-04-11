import { useEffect, useState } from 'react';
import axios from 'axios';

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

  const sendLikesToServer = (e) => {
    e.preventDefault();
    // console.log('Like add', likes);
    //const data = {likes: likes};
    axios
      .put(`/api/gallery/like/${galleryItem.id}`)
      .then((response) => {
        getGalleryList();
      })
      .catch((error) => {
        console.error(error);
        alert('Something went wrong!');
      });
  };

  return (
    <button value={galleryItem.likes} onClick={sendLikesToServer}>
      Smash Like! {galleryItem.likes}
    </button>
  );
}

export default LikesButton;
