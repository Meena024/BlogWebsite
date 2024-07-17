import React, { Fragment, useContext } from "react";
import Modal from "./UI/Modal";
import BlogContext from "../Contexts/BlogContext";
import './ModalManager.css'

const ModalManager = ({
  imageUrl,
  setImageUrl,
  title,
  setTitle,
  description,
  setDescription,
  isEditing,
  handlePost,
  handleUpdate,
}) => {
  const { modalIsOpen, setModalIsOpen, setIsEditing } = useContext(BlogContext);

  const closeModal = () => {
    setModalIsOpen(false);
    setImageUrl("");
    setTitle("");
    setDescription("");
    setIsEditing(false);
  };

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>Add New Blog</button>
      {modalIsOpen && (
        <Modal onClose={closeModal}>
          <h2>{isEditing ? "Edit Blog" : "Add New Blog"}</h2>
          <form className="form">
            <div>
              <label>Image URL:</label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div>
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={isEditing ? handleUpdate : handlePost}
            >
              {isEditing ? "Update" : "Post"}
            </button>
            <button type="button" onClick={closeModal}>
              Close
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default ModalManager;
