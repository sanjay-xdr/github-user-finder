const APIURL= 'https://api.github.com/users/'

const form =document.getElementById('form');
const search =document.getElementById('search');
const main =document.getElementById('id');

async function getUser(username){
 try {
    const {data}= await axios(APIURL + username)
    createUserCard(data);
    getRepos(username);
     
 } catch (error) {
     createErrorCard('Oops something went wrong Enter the username correctly ');
     
 }
    
}
async function getRepos(username){
    try {
        const {data}= await axios(APIURL + username + '/repos?sort=created')
        addRepos(data);
         
     } catch (error) {
         createErrorCard('Repos Not found ');
         
     }
}





function createUserCard(user){
    const cardHTML=`        
    <div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar" >
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>repos</strong></li>
        </ul>

        <div id="repos"></div>
    </div>
</div>`

main.innerHTML=cardHTML;
}


function createErrorCard(msg){
    const cardHTML=`<div class="card"><h1> ${msg} </div>`
    main.innerHTML=cardHTML;
}


function addRepos(repos){
    const reposEl=document.getElementById('repos');
    repos.slice(0,10).forEach(repo=>{const repoEl=document.createElement('a')
    repoEl.classList.add('repo')
    repoEl.target="_blank"
    repoEl.innerHTML=repo.name

    reposEl.appendChild(repoEl)



})
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const user=search.value

    if(user){
        getUser(user)
        search.value='';
    }

})