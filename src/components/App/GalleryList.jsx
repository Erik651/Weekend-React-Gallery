function GalleryList({galleryList}) {

  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getGalleryList();
  }, []);

  const getGalleryList = () => {
    axios.get('/api/gallery')
    .then((response) => {
      setGalleryList(response.data);
    })
    .catch((error) => {
      alert('error getting gallery list');
      console.log(error)
    });
  };

  return (
    <><div>
      <ul data-testid="galleryList">
        <h2>Gallery List</h2>
        <ul>
        {galleryList.map((galley) => (
          <GalleryItem key={gallery.id}
          gallery={gallery} />
        ))};
</ul>
</ul>
        </div>
        
        </>
  )

}

export default GalleryList;







