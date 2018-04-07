const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
imgs.forEach(img => img.addEventListener('click', imgClick));

const opacity = 0.5;

//set First image opacity
imgs[0].style.opacity = opacity;

function imgClick(e) {
    //Reset opacity
    imgs.forEach(img => (img.style.opacity = 1));

    //change image src clicked
    current.src = e.target.src;

    //add Animation to current image
    current.classList.add('fade-in');

    //remove Animation
    setTimeout(() => {
        current.classList.remove('fade-in');
    }, 500);

    //change opacity of image clicked
    e.target.style.opacity = opacity;


}