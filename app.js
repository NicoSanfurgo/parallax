const bg = document.getElementById('bg');
const palm = document.getElementById('palm');
const retro = document.getElementById('retro');
const starry = document.getElementById('starry');
const text = document.getElementById('text');

window.addEventListener('scroll', function(){
    const value = this.window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    palm.style.top = -value * 0.5 + 'px';
    retro.style.top = -value * 0.15 + 'px';
    starry.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
})