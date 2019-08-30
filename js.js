var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn=document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest= new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' +pageCounter + '.json');
    ourRequest.onload = function(){
        if (ourRequest.status >= 200 && ourRequest.status <400){
            var ourData= JSON.parse(ourRequest.responseText);
            renderHtml(ourData);
        }
        else
        {
            console.log("We connected to the server, but it returned oan error.");

        }
      
    };
    ourRequest.onerror = function() {
        console.log("Connection error");
    }

    ourRequest.send();
    pageCounter++;
    if(pageCounter > 3){
        btn.classList.add("hide-me");
    }
});

function renderHtml(e){
    var htmlString="";
    for(i=0;i<e.length;i++){
 htmlString += "<p>" + e[i].name + "is a " + e[i].species + " that likes to eat ";
 for(ii=0; ii< e[i].foods.likes.length;ii++){

    if(ii == 0){
        htmlString += e[i].foods.likes[ii];
    }else{
        htmlString += " and " + e[i].foods.likes[ii];
    }
 htmlString += ' and dislikes ';

    for(ii=0; ii< e[i].foods.dislikes.length;ii++){

        if(ii == 0){
            htmlString += e[i].foods.dislikes[ii];
        }else{
            htmlString += " and " + e[i].foods.dislikes[ii];
        }
 }
}
   htmlString += '.</p>'
}
    animalContainer.insertAdjacentHTML('beforeend',htmlString);

}


