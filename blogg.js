const posts =JSON.parse(localStorage.getItem("posts"))
const postNumber =localStorage.getItem("postNumber")
const post=posts[Number(postNumber)]
console.log(post)

const container=document.getElementById("container-post")
const postHtml=`
    <div class="card" style="width: 40rem;">
        <img src="${post.imageLink}" class="card-img-top" alt="no image">
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.description}</p>
        </div>
    </div>
    `
const div=document.createElement("div")
div.innerHTML=postHtml
container.appendChild(div)