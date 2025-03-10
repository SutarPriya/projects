const btnEl=document.querySelector(".btn");
btnEl.addEventListener("mouseover",(event)=>{
    const X=(event.pageX - btnEl.offsetLeft);
    const Y=(event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", X + "px")
    btnEl.style.setProperty("--yPos", Y + "px")

})