
const form=document.forms["myform"]
const input= form["task"]
const ul=document.getElementById("tasklist")
form.addEventListener("submit", (e)=> {
    e.preventDefault()
    const val=input.value

    const newl=document.createElement("li")
    newl.innerHTML=val+ "<i onclick=\"deletetask(this)\" class=\"fa-solid fa-xmark\" style=\"float:right\"></i>"
    ul.appendChild(newl)

})

function deletetask(x)
{
    x.parentElement.remove(x);
}
