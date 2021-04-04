var showing_val = true 



function show_galleri(){
    console.log(showing_val)
    showing_val = !showing_val
    if (showing_val){
        document.querySelector("#grid-wrapper-galleri").style.gridTemplateAreas = '"sb g1 sd" "sb g2 sd" "sb g3 sd" "sb g4 sd" "sb g5 sd" "sb g6 sd" "sb fw sd"'
        document.querySelector("#grid-wrapper-galleri").style.gridTemplateColumns = "0.2fr repeat(1, 1fr) 0.2fr"
        document.querySelector("#grid-wrapper-galleri").style.gridTemplateRows = "repeat(6, 1fr) 0.1fr"
        document.querySelector(".navbar").style.display = 'none'
    } else{

        document.querySelector("#grid-wrapper-galleri").style.gridTemplateAreas = '"nv g1 sd" "sb g2 sd" "sb g3 sd" "sb g4 sd" "sb g5 sd" "sb g6 sd" "fw fw sd"'
        document.querySelector("#grid-wrapper-galleri").style.gridTemplateColumns = "1.5fr repeat(1, 1fr) 0.2fr"
        document.querySelector("#grid-wrapper-galleri").style.gridTemplateRows = "repeat(6, 1fr) 0.1fr"
        document.querySelector(".navbar").style.display = 'grid'}
    
        
    }


document.addEventListener('DOMContentLoaded', () => 
{
    let myButton_galleri = document.querySelector(".navbar_expander_galleri")
    console.log(myButton_galleri)
    myButton_galleri.addEventListener("click",show_galleri)
})