function galleryItem({ gallery }) {

  const [toggle, setToggle] = useState(true)

  const handleClick = () => {

  };
  return ( 
  <li onClick={handleClick} data-testid="galleryItem">
    {toggle ? gallery.image : gallery.text}
  </li> 
    
  )

}

export default galleryItem;