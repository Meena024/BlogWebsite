import React, { useState } from "react";
import BlogContext from "./BlogContext";

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <BlogContext.Provider
      value={{
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
        modalIsOpen,
        setModalIsOpen,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
