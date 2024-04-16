import LikesButton from './LikesButton';
import { useState } from 'react';
import Box from '@mui/material/Box';
//import Image from '@mui/material/Image'
import Container from '@mui/material/Container';
//import Grid from '@mui/material/'

function GalleryItem({ gallery, getGalleryList }) {
  // YES! This should be in state
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    {
      setToggle((toggleState) => !toggleState);
      console.log('Toggle is-', toggle);
    }
  };
  return (
    <Box sx={{ padding: '10px' }}>
      {/* //{toggle ? gallery.image : gallery.text} */}
      {/* {JSON.stringify(gallery)} */}
      {/* <img src={gallery.url} />  */}
      {toggle ? (
        <Box
          onClick={handleClick}
          height={200}
          width={200}
          // my={4}
          // p={1}
          // display="flex"
          // flexDirection= "row"
          //alignItems="center"
          //justifyContent="center"
          sx={{ border: '2px solid grey' }}
        >
          <img src={gallery.url} alt="Gallery" height={200} width={200} />
        </Box>
      ) : (
        <Box
          onClick={handleClick}
          height={200}
          width={200}
          // my={4}
          //alignItems="center"
          //justifyContent="center"
          // p={1}
          sx={{ border: '2px solid grey' }}
        >
          {' '}
          {gallery.description}
        </Box>
      )}
      <LikesButton galleryItem={gallery} getGalleryList={getGalleryList} />
    </Box>
  );
}

export default GalleryItem;

// function GalleryItem({ gallery, getGalleryList }) {
//   const [toggle, setToggle] = useState(false);

//   const handleClick = () => {
//     setToggle(prevToggle => !prevToggle); // Toggle the state
//     console.log('Toggle is-', !toggle); // Log the toggled state
//   };

//   return (
//     <li onClick={handleClick} data-testid="galleryItem">
//       {toggle ? (
//         <Box component="section" sx={{ p: 2 }}>
//           {gallery.url} {/* Assuming gallery.url is the image */}
//         </Box>
//       ) : (
//         <Box component="section" sx={{ p: 2 }}>
//           {gallery.description} {/* Assuming gallery.description is the text */}
//         </Box>
//       )}
//       <LikesButton galleryItem={gallery} getGalleryList={getGalleryList} />
//     </li>
//   );
// }

// export default GalleryItem;
