var showing_val = false 


function show(){
console.log(showing_val)
showing_val = !showing_val
if (showing_val){
    document.querySelector(".grid-wrapper").style.gridTemplateAreas = '"bt sb" "b1 b1" "b2 b2" "f1 f2" "f3 f4" "fw fw"'
    document.querySelector(".grid-wrapper").style.gridTemplateColumns = ""
    document.querySelector(".navbar").style.display = 'none'
    console.log('rätt')
} else{
    document.querySelector(".grid-wrapper").style.gridTemplateAreas = '"nv sb sb" "nv b1 b1" "nv b2 b2" "nv f1 f2" "nv f3 f4" "fw fw fw"'
    console.log(document.querySelector(".grid-wrapper").style.gridTemplateColumns)
    document.querySelector(".grid-wrapper").style.gridTemplateColumns = "50%"
    console.log(document.querySelector(".grid-wrapper").style.gridTemplateColumns)
    document.querySelector(".navbar").style.display = 'grid'
    console.log('fel')
}
}
document.addEventListener('DOMContentLoaded', () => 
{

    let myButton = document.querySelector(".navbar_expander")
    console.log(myButton)
    myButton.addEventListener("click",show)
})