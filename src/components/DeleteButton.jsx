import GalleryList from "./App/GalleryList";





function DeleteButton()  {
  //delete Gallery Item
  const deleteItem = (id) => {
    console.log(id, 'removeItem');
    axios
      .delete(`/api/gallery/${id}`)
      .then((response) => {
        GalleryList();
      })
      .catch((error) => {
        console.log(error, `error`);
        alert(`Something went wrong`);
      });
  };

}

export default DeleteButton