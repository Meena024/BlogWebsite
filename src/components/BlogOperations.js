export const handlePost = (
  blogs,
  setBlogs,
  imageUrl,
  title,
  description,
  closeModal
) => {
  const newBlog = { imageUrl, title, description };
  setBlogs([...blogs, newBlog]);
  closeModal();
};

export const handleDelete = (blogs, setBlogs, index) => {
  const newBlogs = blogs.filter((_, i) => i !== index);
  setBlogs(newBlogs);
};

export const handleEdit = (
  blogs,
  index,
  setImageUrl,
  setTitle,
  setDescription,
  setIsEditing,
  setEditIndex,
  openModal
) => {
  const blog = blogs[index];
  setImageUrl(blog.imageUrl);
  setTitle(blog.title);
  setDescription(blog.description);
  setIsEditing(true);
  setEditIndex(index);
  openModal();
};

export const handleUpdate = (
  blogs,
  setBlogs,
  imageUrl,
  title,
  description,
  editIndex,
  closeModal
) => {
  const updatedBlog = { imageUrl, title, description };
  const updatedBlogs = blogs.map((blog, i) =>
    i === editIndex ? updatedBlog : blog
  );
  setBlogs(updatedBlogs);
  closeModal();
};
