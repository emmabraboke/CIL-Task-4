let singleProfile = document.querySelector(".user-container")
singleProfile.innerHTML= ''



const id = JSON.parse(localStorage.getItem("id"))

const getUser = async (id)=>{
    console.log(id)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = response.json()
    return user
}

const renderUser = async () =>{
    const user = await getUser(id)
    const address = user.address
    const company = user.company
    singleProfile.innerHTML= `
    <div class="profile" id=${user.id}>
        <p class="id"> ${user.id}</p>
        <p class="name">name: ${user.name} </p>
        <p class="username">username: ${user.username} </p>
        <p class="email">email: ${user.email} </p>
        <p class="address"><span>Address:</span> <br>${address.street}, ${address.suite}, ${address.city} </p>
        <p class="phone">phone: ${user.phone} </p>
        <p class="website">website: ${user.website} </p>
        <p class="company"> <span>Company:</span> <br>name: ${company.name}
        <br>catchPhrase: ${company.catchPhrase} <br> bs:${company.bs}  </p>
    </div>`
}

renderUser()