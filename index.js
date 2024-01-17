let theme = () => {
    $(".toggler").click(function (e) { 
        e.preventDefault();
        $('.ball, body, .social, .user, .overview, .view, .desc').toggleClass('dark')
    })
}

$(document).ready(() => {
    theme();
});

const [bold, numbers] = [document.querySelectorAll('.bold'), document.querySelectorAll('.number')]
const [stat, percent] = [document.querySelectorAll('.stat'), document.querySelectorAll('.percent')]

const tl = gsap.timeline({duration: 1})

tl.from([bold, numbers], {
    textContent: 0,
  duration: 4,
  ease: Power1.easeIn,
  snap: { textContent: 1 }
}).from([stat, percent], {
    y: '900%',
    opacity: 0,
    duration: 1,
    stagger: 1
})
