import '../style.css'
// import {posts} from './images'
const {posts} = require('./images.js');

const wrapper = document.querySelector('.image-wrapper')

function generateMasonGrid(columns, posts){
    wrapper.innerHTML= '';

    let columnWrappers = {};
    for (let i = 0; i< columns; i++){
        columnWrappers[`column${i}`] = []
    }
    console.log(columnWrappers)
}

generateMasonGrid(4, posts)