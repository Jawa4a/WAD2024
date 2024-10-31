// import config from './config.js';

document.addEventListener("DOMContentLoaded", () => {

    
    // Fetch data from JSONBin
    /*
    fetch('https://api.jsonbin.io/v3/b/67238459ad19ca34f8c1a580', {
        headers: {
            'X-Master-Key': config.xMasterKey
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log("Fetched Data from JSONBin:", data);
            displayPosts(data.record); // Assuming posts are within `record`
        })
        .catch(error => console.error('Error loading posts from JSONBin:', error));
    
    */
    // Fetch data from the local JSON file
    fetch('https://jawa4a.github.io/WAD2024/res/json/myJson.json')
        .then(response => response.json())
        .then(data => {
            console.log("Fetched Data from Local JSON:", data);
            displayPosts(data); // Assuming data is directly an array of posts
        })
        .catch(error => console.error('Error loading posts from local JSON file:', error));
    

    // Function to display posts
    function displayPosts(posts) {
        const postsContainer = document.querySelector('.posts'); // Ensure this matches your HTML

        if (!postsContainer) {
            console.error("Error: postsContainer not found in the DOM");
            return;
        }

        posts.forEach(post => {
            const postDiv = document.createElement('article');
            postDiv.className = 'post';

            postDiv.innerHTML = `
                <div class="post-header">
                    <img class="avatar" src="res/img/user.png" alt="Avatar">
                    <span class="username">${post.username}</span>
                    <span class="date">${new Date(post.createdTime).toLocaleDateString('en-US', {
                        month: 'short', day: '2-digit', year: 'numeric'
                    })}</span>
                </div>

                <div class="post-content">
                    ${post.attachments.map(attachment => {
                        if (attachment.type === 'image') {
                            return `<img class="post-image" src="../../res/img/${attachment.url}" alt="${attachment.description}" />`;
                        } else if (attachment.type === 'file') {
                            return `<a href="../../res/docs/${attachment.url}" download class="download-link">${attachment.description}</a>`;
                        }
                        return '';
                    }).join('')}
                    <p>${post.body}</p>
                </div>

                <div class="post-footer">
                    <button class="like-button">👍 Like</button>
                </div>
            `;

            postsContainer.appendChild(postDiv);
        });
    }
});
