var showing_val = true 


function show(){
console.log(showing_val)
showing_val = !showing_val
if (showing_val){
    document.querySelector("#grid-wrapper-bat-fakta").style.gridTemplateAreas = '"sb inf1 sd" "sb inf2 sd" "sb inf3 sd" "sb inf4 sd" "sb fw sd"'
    document.querySelector("#grid-wrapper-bat-fakta").style.gridTemplateColumns = "0.2fr repeat(1, 1fr) 0.2fr"
    document.querySelector("#grid-wrapper-bat-fakta").style.gridTemplateRows = "repeat(6, 1fr) 0.1fr"
    document.querySelector(".navbar").style.display = 'none'
} else{
    document.querySelector("#grid-wrapper-bat-fakta").style.gridTemplateAreas = '"nv inf1 sd" "sb inf2 sd" "sb inf3 sd" "sb inf4 sd" "fw fw sd"'
    document.querySelector("#grid-wrapper-bat-fakta").style.gridTemplateColumns = "repeat(2, 1fr) "
    document.querySelector("#grid-wrapper-bat-fakta").style.gridTemplateRows = "repeat(2, 1fr) 0.1fr"
    document.querySelector(".navbar").style.display = 'grid'}

}




document.addEventListener('DOMContentLoaded', () => 
{

    let myButton = document.querySelector(".navbar_expander_bat_fakta")
    console.log(myButton)
    myButton.addEventListener("click",show)

})