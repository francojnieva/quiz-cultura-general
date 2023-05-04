const main = document.getElementById("main-container")
const header = document.getElementById("header")
const btn = document.querySelectorAll("#btn")

btn.forEach(btn => {
    btn.addEventListener("click", () =>{
        header.innerHTML = ""
        main.innerHTML = ""

        const elementContainer = document.createElement("div")
        elementContainer.classList.add("element-container")
        elementContainer.innerHTML = `
            <div class="img-container">
                <img src="" alt="">
            </div>
            <div class="option-container">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        `
        main.appendChild(elementContainer)
    })
})




