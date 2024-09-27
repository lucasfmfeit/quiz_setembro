document.addEventListener("DOMContentLoaded",()=>{
    const btn = document.getElementById("selecionar")
    btn.addEventListener("click",getQuestions)
})

async function getQuestions(){
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple")
    const data = await response.json()  
    console.log(data)  
}

