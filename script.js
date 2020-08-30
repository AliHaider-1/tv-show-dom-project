//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  episodeData(allEpisodes);
  
  
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  let createTitle = document.createElement("h2");
  createTitle.textContent = "Ali Haider TV Project";
  createTitle.style.color="black";
  rootElem.append(createTitle);


  //test select
  let createSelect = document.createElement("select");
  createSelect.style.width = "20%";
  createSelect.style.height = "7.6vh";
  createSelect.style.margin ="1% 0.5%";
  createSelect.style.padding = "0 0.2%";
  createSelect.id ="select";
  for (let i = 0; i < episodeList.length; i++) {
    let option = document.createElement("option");
    option.text = episodeList[i].name;
    createSelect.append(option);
  }

  rootElem.append(createSelect);
//
createSelect.addEventListener("click", myFunction1);


//test all episodes button

let allButton = document.createElement("button"); 
allButton.textContent = "All Episodes";
  allButton.style.width = "5%";
  allButton.style.height = "7.6vh";
  allButton.style.margin = "1% 0.5%";
  allButton.style.padding = "0 0.2%";
  allButton.id = "allButton";
  rootElem.append(allButton);

  allButton.addEventListener("click", myFunction2);


 // <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name"></input>
  let createInput = document.createElement("input");
  createInput.style.width ="30%";
  createInput.style.height="7vh";
  createInput.id = "myInput";
  createInput.type="text";
  createInput.addEventListener("keyup",function(e){
   myFunction();
  });
  createInput.placeholder = "search for movies";
  createInput.style.margin="1% 0.5%";
  createInput.style.padding="0 0.2%";
  rootElem.append(createInput);
 
  
  let createTotalepisodes = document.createElement("p"); 
  createTotalepisodes.textContent = `Displaying ${episodeList.length} episodes`;
  createTotalepisodes.style.width="20%";
  createTotalepisodes.style.margin ="2% 0.5%";
  rootElem.append(createTotalepisodes);

 
}

function episodeData(episodeList) {
  const rootElem = document.getElementById("root");
 // let createCard = document.createElement("div");
  //createCard.id = "test";
  rootElem.style.backgroundColor = "lightgray";
  rootElem.style.display = "flex";
  rootElem.style.flexDirection = "row";
  rootElem.style.flexWrap="wrap";
  rootElem.style.justifyContent="space-around";
  rootElem.style.margin="1%";
 // createCard.style.width = "41.8%";
  


  

  episodeList.forEach((episode) => {


    // upper test card
    //select
    

    //create Card
    let createCard = document.createElement("div");
    createCard.id = "test";
    createCard.style.backgroundColor= "white";
    createCard.style.margin = "1%";
    createCard.style.padding="0% 0.5%";
    createCard.style.display ="flex";
    createCard.style.flexDirection = "column";
    createCard.style.alignItems = "center";
    createCard.style.alignItems = "center";
    createCard.style.width = "30%";
    createCard.style.borderRadius="10px";
    
    rootElem.append(createCard);

    

    
    // season number
    let seasonNumber = document.createElement("p");
    seasonNumber.style.color="black";
    seasonNumber.style.fontWeight="700";
    seasonNumber.style.border="1px solid black"
    seasonNumber.style.borderRadius="10px";
    seasonNumber.style.margin="5% 2%";
    seasonNumber.style.padding="2% 15%";
    seasonNumber.width="100%";
    seasonNumber.style.height="auto";
    seasonNumber.style.fontSize="0.9rem";
    seasonNumber.textContent = seasonStringProcessor(
      episode.name,
      episode.season,
      episode.number
    );
    createCard.append(seasonNumber);
    //image card
    let imgCard = document.createElement("div");
    imgCard.style.width = "50%";
    createCard.append(imgCard);
    //
    //test link
    let createLinks = document.createElement("a");
    imgCard.append(createLinks);
    createLinks.href = episode.url;
    // img element
    let createImg = document.createElement("img");
    createImg.src = episode.image.medium;
    createImg.style.width = "100%";
    createLinks.append(createImg);

    

    // summary

    let summary = document.createElement("p");
    summary.innerHTML = episode.summary;
    summary.style.width="70%";
    summary.style.color="black";
    createCard.append(summary);

    //reference
    let createReference = document.createElement("a");
    createReference.style.width="70%";
    createReference.innerHTML = "The data has originally come from TVMaze.com";
    createReference.href = episode.url;
    createCard.append(createReference);

    
    
  });
}



function seasonStringProcessor(episodeName, seasonNumber, episodeNumber) {
  if (seasonNumber < 10 && episodeNumber < 10) {
    return `${episodeName} - S0${seasonNumber} E0${episodeNumber}`;
  } else if (seasonNumber < 10) {
    return `${episodeName} - S0${seasonNumber} E${episodeNumber}`;
  } else if (episodeNumber < 10) {
    return `${episodeName} - S${seasonNumber} E0${episodeNumber}`;
  } else {
    return `${episodeName} - S${seasonNumber} E${episodeNumber}`;
  }
}
//

//
function myFunction2() {
  var i, myP;
  document.getElementById("#test");
  const rootElem = document.getElementById("root");

  myP = document.querySelectorAll("#test");

  //console.log(myP);
  for (i = 0; i < myP.length; i++) {
    //b = rootElem.getElementsByTagName("p");
    let getDivs = document.querySelectorAll("#test");
    // console.log(getDivs);

    myP[i].style.display = "";
  

  }
 
}


function myFunction1() {
  var i, myP;
  document.getElementById("#test");
  const rootElem = document.getElementById("root");
  let getSelect = document.querySelector("select").selectedIndex;
  console.log(getSelect);

  myP = document.querySelectorAll("#test");
 
  //console.log(myP);
  for (i = 0; i < myP.length; i++) {
    //b = rootElem.getElementsByTagName("p");
    let getDivs = document.querySelectorAll("#test");
   // console.log(getDivs);
         

      myP[i].style.display = "none";

  }
  myP[getSelect].style.display = "";
}

//testing search
function myFunction() {
  document.getElementById("#test");
  const rootElem = document.getElementById("root");
  var input, filter, myP, i, txtValue;
  input = document.getElementById("myInput");
  console.log(input);
  filter = input.value.toUpperCase();
  //console.log(filter);
  //ul = document.getElementById("myUL");
  myP = document.querySelectorAll("#test");
  //console.log(myP);
  for (i = 0; i < myP.length; i++) {
    //b = rootElem.getElementsByTagName("p");
    let filterText = document.querySelectorAll("#test");
    //console.log(filterText);
    txtValue = filterText.textContent || filterText[i].innerText;
    //console.log(txtValue);
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      myP[i].style.display = "";
      myP[i].style.margin = "1%";
      myP[i].style.padding = "0.5%";
      myP[i].style.display = "flex";
      myP[i].style.flexDirection = "column";
      myP[i].style.alignItems = "center";
      myP[i].style.alignItems = "center";
      myP[i].style.width = "30%";
      myP[i].style.borderRadius = "20px";
    } else {
      myP[i].style.display = "none";
    }
  }
}

window.onload = setup;
