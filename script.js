const createBlogCard = (title, cudate, description,idx) => {
  
  return `
        <div class="card" style="font-size: 15px; border: none;"> 
            <p class="text-sm" style="color: rgb(128, 128, 128);">${cudate}</p>
            <h3 >${title}</h3>
            <p>${description}</p>
            <button index="${idx}" id="read-more" href="./blogg.html" class="btn btn-primary col-2 btn-sm" href="" style="text-decoration: none;">Read More</button>
        </div>
        <hr>
    `;

    
};

const posts = JSON.parse(localStorage.getItem("posts"));

posts.forEach((post,i) => {
  const postHtml = createBlogCard(post.title, post.currdata, post.description,i);
  const postsContainer = document.getElementById("blog-tile-container");
  const postDiv = document.createElement("div");
  postDiv.innerHTML = postHtml;
  postsContainer.appendChild(postDiv);
});

const readMorelinks=document.querySelectorAll("#read-more")
console.log(readMorelinks)
readMorelinks.forEach((link) =>
link.onclick=()=>{
  const index=link.getAttribute("index")
  localStorage.setItem("postNumber",index)
  location.href="./blogg.html"
})