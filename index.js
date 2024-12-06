const image = document.getElementById('img');
const card = document.getElementById('card');
const inneCard = document.getElementById('inneCard');
const body = document.getElementById('body');
innerCard.style.opacity = '0';

window.addEventListener('scroll', () => {
    console.log(window.scrollY); // for debugging
    
    if (window.scrollY >= 29) {
        body.style.background = 'hotpink';
        image.style.opacity = '0';
        card.style.transform = 'translateY(-350px)';
        innerCard.style.opacity = '100%';
    } if (window.scrollY <= 29) {
        body.style.background = 'pink';
        image.style.opacity = '100%';
        card.style.transform = 'translateY(0)';
        innerCard.style.opacity = '0';
    }
});
