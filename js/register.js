let form  = document.querySelector("form")
let usernameInput = document.querySelector("#username")
let passwordInput = document.querySelector("#password")
let ageInput = document.querySelector("#age")
let h4 = document.querySelector("h4")

let status = window.localStorage.getItem('status')
if(status) window.location = "./index.html"

form.onsubmit = (event) => {
    event.preventDefault()
    let username =  usernameInput.value.trim().toLowerCase()
    let password = passwordInput.value.trim().toLowerCase()
    let age = ageInput.value.trim()
    let found = users.find( (el) => el.username === username && el.password === password )
    try{    
        if(!found){
            users.push( {username , password , age})
            window.localStorage.setItem("users" , JSON.stringify(users))
            window.localStorage.setItem("status" , true)
            window.location.pathname = "./index.html"
        }else{
            throw new Error("The user already exists!")
        }
        usernameInput.value = null
        passwordInput.value = null
        ageInput.value = null
    }catch(error){
        h4.innerText = error.message + ' Please login to your account'
    }
}



