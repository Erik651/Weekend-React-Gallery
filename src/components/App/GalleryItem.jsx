import LikesButton from './LikesButton';
import { useState } from 'react';

function GalleryItem({ gallery, getGalleryList }) {
  // YES! This should be in state
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    {
      toggle ? gallery.url : gallery.description;
    }
  };
  return (
    <li onClick={handleClick} data-testid="galleryItem">
      {/* //{toggle ? gallery.image : gallery.text} */}
      {JSON.stringify(gallery)}
      <img src={gallery.url} />
      <LikesButton galleryItem={gallery} getGalleryList={getGalleryList} />
    </li>
  );
}

export default GalleryItem;
