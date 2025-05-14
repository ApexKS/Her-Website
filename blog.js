
function addPost() {
  const text = document.getElementById("new-post").value;
  if (text.trim()) {
    const postContainer = document.getElementById("blog-posts");
    const post = document.createElement("div");
    post.textContent = text;
    post.className = "post";
    postContainer.appendChild(post);
    document.getElementById("new-post").value = "";
  }
}
