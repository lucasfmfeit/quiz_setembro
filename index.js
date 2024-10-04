let category = 23

document.addEventListener("DOMContentLoaded",()=>{
    const btn = document.getElementById("selecionar")
    const select = document.getElementById("categorias")
    btn.addEventListener("click",getQuestions)
    select.addEventListener("change",(e)=>{
        category = e.target.value
    })
    
})

async function getQuestions(){
    const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=medium&type=multiple`)
    const data = await response.json()  
    const results = data.results
    const questions = results.map((item)=>{
        return {
            correct_answer:item.correct_answer,
            incorrect_answers:item.incorrect_answers,
            question:item.question
        }
    })
    console.log(questions)  
}



