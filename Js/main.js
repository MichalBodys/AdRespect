import '../style.css'
import Masonry from 'masonry-layout'



window.onload = () => {
    const grid = document.querySelector('.grid-m');

    const masonry = new Masonry(grid, {
        itemSelector : '.grid-item',
        gutter:10
    })

}