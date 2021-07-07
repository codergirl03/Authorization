let status = window.localStorage.getItem('status')
if(!status) window.location = "./login.html"
let btn = document.querySelector("#btn")

btn.onclick = () =>{
    let status = window.localStorage.setItem('status' , "")
    if(status) window.location = "./login.html"
}