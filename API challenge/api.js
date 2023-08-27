function getPosts(userId){
    let request = new XMLHttpRequest()
    request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    request.send()
    request.responseType = "json"
    request.onload = function(){
        if(request.status == 200 && request.status < 300){
            let posts = request.response
            document.querySelector(".information").innerHTML = ""
            for(post of posts){
                let content = 
                `
                    <div class="user-info">
                        <h1 class="user-title">${post.title}</h1>
                        <p class="user-body">${post.body}</p>
                    </div>
                `
                document.querySelector(".information").innerHTML += content
            }
        }
        else{
            alert("Error")
        }
    }
}

function getUsers(){
    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.send()
    request.responseType = "json"
    request.onload = function(){
        if(request.status == 200 && request.status < 300){
            let users = request.response
            for(user of users){
                let content = 
                `
                    <div class="user" id="user1" onclick="clicked(${user.id})">
                        <h1 class="username">${user.name}</h1>
                    </div>
                `
                document.querySelector(".profiles").innerHTML += content
            }
        }
        else{
            alert("Error")
        }
    }
}


window.onload = function(){
    getUsers()
}
function clicked(id){
    getPosts(id)
}
getPosts(1)
