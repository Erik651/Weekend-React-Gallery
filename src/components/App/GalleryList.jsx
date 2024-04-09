function galleryList({galleryList}) {

  return (
    <><div>
      <ul data-testid="galleryList">
        <h2>Gallery List</h2>
        <ul>
        {galleryList.map((month) => (
          <GalleryItem key={galleryList.id}
          gallery={gallery} />
        ))};
</ul>
</ul>
        </div>
        
        </>
  )

}

export default galleryList;







