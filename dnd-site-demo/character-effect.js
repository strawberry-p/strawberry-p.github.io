const listContainer = document.getElementById("list-container")
const hoverImg = document.getElementById("hover-effect-img")
document.querySelectorAll(".character-card").forEach(card => {
card.addEventListener('mouseenter',()=>{
    const rect = card.getBoundingClientRect()
    const containerRect = listContainer.getBoundingClientRect()
    const floatTop = rect.top-containerRect.top+20
    const floatLeft = rect.left-containerRect.left+20
    hoverImg.src = card.dataset.img
    hoverImg.style.top = `${floatTop}px`
    hoverImg.style.left = `${floatLeft}px`
    hoverImg.style.opacity = 1
    hoverImg.animate([
        {transform: 'translate(0,0)', opacity: 1},
        {transform: 'translate(80vw,0)', opacity: 0}
    ],{
        duration: 3000,
        easing: 'ease-in-out',
        fill: 'forwards'
    })

})
card.addEventListener('mouseleave',() => {hoverImg.style.opacity = 0; setTimeout(()=>hoverImg.src = '',3000)})
})