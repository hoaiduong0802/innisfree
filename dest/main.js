let btnmain = document.querySelector(".navbar .nav .btnmenu")
let btnBackground = document.querySelector(".backgroundxs")

console.log(btnBackground)
btnmain.addEventListener('click',function(e){
    btnmain.classList.toggle("active")
    btnBackground.classList.toggle('active')
})
