import React, { useContext } from "react";
import BlogProvider from "./Contexts/BlogProvider";
import BlogContext from "./Contexts/BlogContext";
import {
  handlePost,
  handleDelete,
  handleEdit,
  handleUpdate,
} from "./components/BlogOperations";
import ModalManager from "./components/ModalManager";
import "./App.css";

function App() {
  const {
    blogs,
    setBlogs,
    imageUrl,
    setImageUrl,
    title,
    setTitle,
    description,
    setDescription,
    isEditing,
    setIsEditing,
    editIndex,
    setEditIndex,
    setModalIsOpen,
  } = useContext(BlogContext);

  const handleOpenEditModal = (index) => {
    handleEdit(
      blogs,
      index,
      setImageUrl,
      setTitle,
      setDescription,
      setIsEditing,
      setEditIndex,
      () => setModalIsOpen(true)
    );
  };

  return (
    <div className="App">
      <h1>Blog Website</h1>
      <ModalManager
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        handlePost={() =>
          handlePost(blogs, setBlogs, imageUrl, title, description, () => {
            setImageUrl("");
            setTitle("");
            setDescription("");
            setIsEditing(false);
            setEditIndex(null);
            setModalIsOpen(false);
          })
        }
        handleUpdate={() =>
          handleUpdate(
            blogs,
            setBlogs,
            imageUrl,
            title,
            description,
            editIndex,
            () => {
              setImageUrl("");
              setTitle("");
              setDescription("");
              setIsEditing(false);
              setEditIndex(null);
              setModalIsOpen(false);
            }
          )
        }
      />
      <div className="blogs">
        {blogs.map((blog, index) => (
          <div key={index} className="blog">
            <h2>{blog.title}</h2>
            <img src={blog.imageUrl} alt={blog.title} />
            <p>{blog.description}</p>
            <button onClick={() => handleOpenEditModal(index)}>
              Edit
            </button>
            <button onClick={() => handleDelete(blogs, setBlogs, index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
}
