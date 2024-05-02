let saveEl = document.getElementById("save-el")
let countEl= document.getElementById("count-el")
console.log(countEl)
let count= 0;
function increment(){
    count += 1;
    countEl.textContent=count
    console.log(count)
}
function save(){
    let addNo = count + " - "
    saveEl.textContent += addNo
    countEl.textContent = 0
    count = 0
}