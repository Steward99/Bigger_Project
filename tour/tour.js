const backTop = document.getElementById('totop-btn');
var reveals = document.querySelectorAll('.reveal-des');

backTop.addEventListener('click', () => {
    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    })
    console.log('clicked')
})


    reveals.forEach(go=>{
        go.addEventListener('click', (event) => {
            event.target.nextElementSibling.classList.toggle('reveal');
            console.log('clicked');
        });
    });