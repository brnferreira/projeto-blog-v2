
const metadeWindow = window.innerHeight * 2.0;

function animarScroll() {
const topoItem = scrollAnima.getBoundingClientRect().top;

    const ItemVisivel = topoItem - metadeWindow < 100;

    if(ItemVisivel) {
        scrollAnima.classList.add('show-button');
    }else{
        scrollAnima.classList.remove('show-button');
    };
};

window.addEventListener('scroll', animarScroll);

