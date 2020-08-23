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
 // <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name"></input>
  let createInput = document.createElement("input");
  createInput.style.width ="100%";
  createInput.id = "myInput";
  createInput.type="text";
  createInput.addEventListener("keyup",function(e){
   myFunction();
  });
  createInput.placeholder = "search for movies";
  createInput.style.margin="0.5% 20%";
  createInput.style.padding="0.5%";
  rootElem.append(createInput);

 // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
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

//testing search
function myFunction() {
  document.getElementById("#test");
  const rootElem = document.getElementById("root");
  var input, filter, myP,b, i, txtValue;
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
