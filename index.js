let URLs = ""
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    url = inputEl.value
    URLs += `
        <li>
            <a target="_blank" href=${url}> 
                ${url} 
            </a>
        </li>
        `
    ulEl.innerHTML = URLs
    inputEl.value = "" // Clear text box
})