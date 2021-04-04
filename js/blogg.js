var showing_val = true 



function show_blogg(){
    console.log(showing_val)
    showing_val = !showing_val
    if (showing_val){
        document.querySelector("#grid-wrapper-blogg").style.gridTemplateAreas = '"sb a1 sd" "sb a2 sd" "sb a3 sd" "sb a4 sd" "sb a5 sd" "sb a6 sd" "sb fw sd"'
        document.querySelector("#grid-wrapper-blogg").style.gridTemplateColumns = "0.2fr repeat(1, 1fr) 0.2fr"
        document.querySelector("#grid-wrapper-blogg").style.gridTemplateRows = "repeat(6, 1fr) 0.1fr"
        document.querySelector(".navbar").style.display = 'none'
    } else{

        document.querySelector("#grid-wrapper-blogg").style.gridTemplateAreas = '"nv a1 sd" "nv a2 sd" "sb a3 sd" "sb a4 sd" "sb a5 sd" "sb a6 sd" "fw fw sd"'
        document.querySelector("#grid-wrapper-blogg").style.gridTemplateColumns = "2fr repeat(1, 1fr) 0.2fr"
        document.querySelector("#grid-wrapper-blogg").style.gridTemplateRows = "repeat(6, 1fr) 0.1fr"
        document.querySelector(".navbar").style.display = 'grid'}
    
        
    }


document.addEventListener('DOMContentLoaded', () => 
{
    let myButton_blogg = document.querySelector(".navbar_expander_blogg")
    console.log(myButton_blogg)
    myButton_blogg.addEventListener("click",show_blogg)
})