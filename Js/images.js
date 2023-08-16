

const posts = [];

const images = [
    '/public/img1.jpeg',
    '/public/img2.jpeg',
    '/public/img3.jpeg',
    '/public/img4.jpeg',
    '/public/img5.jpeg',
    '/public/img6.jpeg',
    '/public/img7.jpeg',
    '/public/img8.jpeg',
    '/public/img9.jpeg'
]

let imageIndex = 0;
for(let i = 0; i< 40; i++){
    let item = {
        id: i,
        title: `post ${i}`,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if(imageIndex > images.length - 1) imageIndex = 0;
}

module.exports = {posts};
