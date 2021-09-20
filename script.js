gsap.from('#text', {
    opacity: 0,
    duration: 1.5,
    x: -70
})
gsap.from('#name', {
    opacity: 0,
    duration: 1.75,
    x: -50
})
gsap.from('#buttonWrap', {
    opacity: 0,
    duration: 1.75,
    x: 50
})
gsap.from('#main_circle', {
    opacity: 0,
    duration: 1.75,
    x: 30
})
gsap.from('#under_circle', {
    opacity: 0,
    duration: 1.8,
    x: 100
})

var elmntToView = document.getElementById("panel2");
document.querySelector("#contact").addEventListener('click', function(){
    elmntToView.scrollIntoView(); 
})
