let form  = document.querySelector("form")
let usernameInput = document.querySelector("#username")
let passwordInput = document.querySelector("#password")
let h4 = document.querySelector("h4")

let status = window.localStorage.getItem('status')
if(status) window.location = "./index.html"

form.onsubmit = (event) =>{
    event.preventDefault()
    let username =  usernameInput.value.trim().toLowerCase()
    let password = passwordInput.value.trim().toLowerCase()
    let found = users.find( (el) => el.username === username && el.password === password )

    try{
        if(found){
            window.localStorage.setItem("status" , true)
            window.location.pathname = "./index.html"
        }else{
            throw new Error ("user not found . Please sign up !")
        }
        usernameInput.value = null
        passwordInput.value = null
    }catch(error){
        h4.textContent = error.message
    }
  
}