const createPostButton = document.getElementById("create-post");
createPostButton.onclick = () => {
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const imageLinkInput = document.getElementById("image-link");

  const post = {
    title: titleInput.value,
    description: descriptionInput.value,
    imageLink: imageLinkInput.value,
    currdata:new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
  };

  if (title && imageLinkInput) {
    // add post to localstorage
    let posts = JSON.parse(localStorage.getItem("posts"));
    if (posts === null) posts = [];
    posts.push(post);

    localStorage.setItem("posts", JSON.stringify(posts));
  }

  // redirect to home page
  location.href = "./";
};
