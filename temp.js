
const GITHUB_USER = "https://api.github.com/users/rajivk5"

let user = fetch(GITHUB_USER)


user.then((data)=>{

    console.log(data);
    
})