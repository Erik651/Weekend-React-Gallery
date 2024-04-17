import GalleryList from './App/GalleryList';
import axios from 'axios';
import React from 'react';

function DeleteButton({ galleryItem, getGalleryList}) {
  //delete Gallery Item
  const deleteItem = (id) => {
    console.log(id, 'removeItem');
    axios
      .delete(`/api/gallery/${id}`)
      .then((response) => {
        getGalleryList();
      })
      .catch((error) => {
        console.log(error, `error`);
        alert(`Something went wrong`);
      });
  };
  return (
    <>
      <button value={galleryItem.id} onClick={() => deleteItem(galleryItem.id)}>
        Delete Item
      </button>
    </>
  );
}

export default DeleteButton;
