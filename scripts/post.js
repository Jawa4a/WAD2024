// Function to load dynamic posts from localStorage in index.html
function loadPosts() {
    const postsContainer = document.getElementById('posts-container');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <div class="post-header">
                <img class="avatar" src="res/img/user.png" alt="Avatar">
                <span class="date">${new Date().toLocaleDateString()}</span>
            </div>
            <div class="post-content">
                <p>${post.title}</p>
                <p>${post.content}</p>
            </div>
            <div class="post-footer">
                <button class="like-button">👍 Like</button>
            </div>
        `;

        postsContainer.appendChild(postElement);
    });
}

// Function to handle the form submission in addPost.html
function handlePostForm(event) {
    event.preventDefault();

    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    const newPost = { title, content };

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));

    window.location.href = 'index.html';
}

// Attach the form handler in addPost.html
if (document.getElementById('add-post-form')) {
    document.getElementById('add-post-form').addEventListener('submit', handlePostForm);
}

// Load posts on index.html
if (window.location.pathname.includes('index.html')) {
    window.onload = loadPosts;
}
