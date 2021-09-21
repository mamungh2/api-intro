function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
}
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data));
}
function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}
function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayCommnets(data));
}
function displayCommnets(data) {
    const comments = document.getElementById('comments');
    for (const comment of data) {
        const div = document.createElement('div');
        div.innerText = comment.email;
        comments.appendChild(div);
    }
}
function loadImage() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => displayImages(data));
}
function displayImages(data) {
    const images = document.getElementById('images');
    for (const image of data) {
        const div = document.createElement('div');
        div.innerText = image.title;
        images.appendChild(div);
        const img = document.createElement('img');
        img.src = image.thumbnailUrl;
        images.appendChild(img);
    }
}