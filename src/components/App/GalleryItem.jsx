import LikesButton from './LikesButton';
import { useState } from 'react';
import Box from '@mui/material/Box';
//import Image from '@mui/material/Image'
import Container from '@mui/material/Container';


function GalleryItem({ gallery, getGalleryList }) {
  // YES! This should be in state
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    {
      setToggle(toggleState => !toggleState);
      console.log('Toggle is-', toggle)
    }
  };
  return (
    <Container maxWidth="xl" onClick={handleClick} data-testid="galleryItem">
      {/* //{toggle ? gallery.image : gallery.text} */}
      {/* {JSON.stringify(gallery)} */}
       {/* <img src={gallery.url} />  */}
       {toggle ? (<Box
        height={100}
        width={100}
        my={4}
        p={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ border: '2px solid grey' }}
      >
        <img src={gallery.url} alt="Gallery" height={100} width={100} />
      </Box> ) : (<Box
      height={100}
      width={100}
      my={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={1}
      sx={{ border: '2px solid grey' }}> {gallery.description}</Box>)}
      <LikesButton galleryItem={gallery} getGalleryList={getGalleryList} />
    </Container>
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