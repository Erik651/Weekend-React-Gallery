import LikesButton from "./LikesButton"
import { useState } from 'react';

function GalleryItem({ gallery }) {

  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    {toggle ? gallery.image : gallery.text}
  };
  return ( 
  <li onClick={handleClick} data-testid="galleryItem">
    {/* //{toggle ? gallery.image : gallery.text} */}
    <LikesButton />
  </li> 
    
  )

}

export default GalleryItem;