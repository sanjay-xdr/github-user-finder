const url= "https://api.github.com/users/"



  function grabthetxt(){


    var clear=document.getElementById("placehere");
    var clear2=document.getElementById("details");
    

    clear.innerText="";    
    var userName=document.querySelector("#input").value;

    var result=url.concat(userName);
    var translatedtext="";
    var name=fetch(result)
    .then(response => response.json())
    .then(json=>{

   
    


        var translatedtext = json.avatar_url;
        var elem = document.createElement("img");
        elem.src = String(translatedtext);
   
    elem.setAttribute("alt", "img");
    clear.appendChild(elem);
    var spanTag=document.createElement("p");
    spanTag.classList.add("user-name");
    var quoteTag=document.createTextNode("Name: "+ json.name);
   spanTag.appendChild(quoteTag);
    clear.appendChild(spanTag);
  
    var spanTag=document.createElement("span");
    spanTag.classList.add("user-name");
    var quoteTag=document.createTextNode("Follwers: "+ json.followers);
   spanTag.appendChild(quoteTag);
    clear.appendChild(spanTag);
  

  
    // var translatedtext1 = json.name;
    // console.log(translatedtext1);
    
    })

     
 

  }



//   var name=fetch("https://api.github.com/users/sanjay-xdr/followers")
//     .then(response => response.json())
//     .then(json=>{
//        json.forEach( element =>{console.log(element)})
// });
