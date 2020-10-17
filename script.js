// Setup function
let allShows;
let allepisodes;
let realid;

allShows = fetch(`https://api.tvmaze.com/shows`)
  .then((response) => response.json())
  .then((data) => (allShows = data))
  .catch((err) => console.log(err));

function setup() {  
   fetch(`https://api.tvmaze.com/shows`)
     .then((response) => response.json())
     .then((onlineallEpisodes) => makePageForEpisodes(onlineallEpisodes))
     .catch((err) => console.log(err));     
}
// function created to display season numbers in required format
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
//function created to perform all episodes button functionality
function myFunctionAllEpisodesButton() {
  var i, myP;
  document.getElementById("#test");
  const rootElem = document.getElementById("root");
  myP = document.querySelectorAll("#test");
  for (i = 0; i < myP.length; i++) {
    let getDivs = document.querySelectorAll("#test");
    myP[i].style.display = "";
    myP[i].style.margin = "1%";
    myP[i].style.padding = "0.5%";
    myP[i].style.display = "flex";
    myP[i].style.flexDirection = "column";
    myP[i].style.alignItems = "center";
    myP[i].style.alignItems = "center";
    myP[i].style.width = "30%";
    myP[i].style.borderRadius = "20px";
  }
}
// function created to perform  select functionality 
function myFunctionSelect() {
 
    allButton.style.visibility="visible";

  var i, myP;
  document.getElementById("#test");
  const rootElem = document.getElementById("root");
  let getSelect = document.getElementById("select").selectedIndex;
  myP = document.querySelectorAll("#test");
  for (i = 0; i < myP.length; i++) {
    let getDivs = document.querySelectorAll("#test");
    myP[i].style.display = "none";
  }
  myP[getSelect].style.display = "";
  myP[getSelect].style.margin = "1%";
  myP[getSelect].style.padding = "0.5%";
  myP[getSelect].style.display = "flex";
  myP[getSelect].style.flexDirection = "column";
  myP[getSelect].style.alignItems = "center";
  myP[getSelect].style.alignItems = "center";
  myP[getSelect].style.width = "30%";
  myP[getSelect].style.borderRadius = "20px";
}
//function created to perform search functionality
function myFunctionSearch() {
  const rootElem = document.getElementById("root");
  var input, filter,myP, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  myP = document.querySelectorAll("#test");
  for (i = 0; i < myP.length; i++) {
    
    let filterText = document.querySelectorAll("#test");
    txtValue = filterText.textContent || filterText[i].innerText;
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
  console.log(count);
  
 

}
function mybackButton(){

  window.location.reload();
}
// function to make
let createTitle = document.createElement("h2"); 
let change = "shows";
let changer = "All Shows"
 let createSelectShows = document.createElement("select");
 let backButton = document.createElement("button");
 let allButton = document.createElement("button");
  let createInput = document.createElement("input");
  let createTotalepisodes = document.createElement("p");

  
function makePageForEpisodes(episodeList) {
  let createSelect = document.createElement("select");
  // title of the project // logo// title
  const rootElem = document.getElementById("root");
  document.body.style.backgroundColor = "gray";

  createTitle.textContent = "Ali Haider TV Project";
  createTitle.style.margin = "1.5% 1%";
  createTitle.style.color = "black";
  rootElem.append(createTitle);
  //test 2nd select

  createSelectShows.style.width = "15%";
  createSelectShows.style.height = "7.6vh";
  createSelectShows.style.margin = "1% 0.5%";
  createSelectShows.style.padding = "0 0.2%";
  createSelectShows.style.border = "0.5px solid coral";
  createSelectShows.id = "selectshows";

  let getShowNames = [];
  for (let i = 0; i < allShows.length; i++) {
    getShowNames.push(allShows[i].name);
    //push({name: allShows[i].name, id: allShows[i].id})
  }
  //console.log(getShowNames);
  let sortedShowNames = getShowNames.sort();
  // console.log(sortedShowNames);
  for (let i = 0; i < allShows.length; i++) {
    let option = document.createElement("option");
    option.text = sortedShowNames[i];
    createSelectShows.append(option);
  }

  rootElem.append(createSelectShows);
  createSelectShows.addEventListener("change", function () {
    change = "Episodes";
    changer = "All Episodes";

  
    // console.log("i am changed");
    //displayEpisodes();
     let removeCard = document.querySelectorAll("#test");
     removeCard.forEach((element) => {
       // console.log(element);
       element.remove(element);
     });
     let removeOption = document.getElementById("select");
     //console.log(removeOption);
     removeOption.remove();

     let displayoption = document.querySelector("#selectshows");
     let showvalue = displayoption.value;
     //console.log(showvalue);
     const getid = allShows.filter((show) => showvalue === show.name);
    // console.log(getid[0].id);
   
     realid = getid[0].id;
     fetch(`https://api.tvmaze.com/shows/${realid}/episodes`)
       .then((response) => response.json())
       .then((onlineallEpisodes) => makePageForEpisodes(onlineallEpisodes))
       .catch((err) => console.log(err));

    //  console.log(allShows);


  });

  //select button to go to specific episode
  createSelect.style.width = "15%";
  createSelect.style.height = "7.6vh";
  createSelect.style.margin = "1% 0.5%";
  createSelect.style.padding = "0 0.2%";
  createSelect.style.border = "0.5px solid coral";
  createSelect.id = "select";
  for (let i = 0; i < episodeList.length; i++) {
    let option = document.createElement("option");
    
    option.text = episodeList[i].name;
    createSelect.append(option);
    
  }
  
  rootElem.append(createSelect);
  createSelect.addEventListener("change", myFunctionSelect);
  
   backButton.textContent = "Back";
  backButton.style.width = "5%";
  backButton.style.height = "7.6vh";
  backButton.style.margin = "1% 0.5%";
  backButton.style.padding = "0 0.2%";
  backButton.style.borderRadius = "10px";
  backButton.style.border = "0.5px solid coral";
  backButton.id = "allButton";
  rootElem.append(backButton);
  backButton.addEventListener("click", mybackButton);

  //All episodes button
  allButton.style.visibility = "hidden";
  allButton.textContent = `${changer}`;
  allButton.style.width = "5%";
  allButton.style.height = "7.6vh";
  allButton.style.margin = "1% 0.5%";
  allButton.style.padding = "0 0.2%";
  allButton.style.borderRadius = "10px";
  allButton.style.border = "0.5px solid coral";
  allButton.id = "allButton";
  rootElem.append(allButton);
  allButton.addEventListener("click", myFunctionAllEpisodesButton);

  // Search box // create Input

  createInput.style.width = "15%";
  createInput.style.height = "7vh";
  createInput.id = "myInput";
  createInput.type = "text";
  createInput.addEventListener("keyup", function (e) {
    myFunctionSearch();
    
  });
  
     

  createInput.placeholder = "search ";
  createInput.style.margin = "1% 0.5%";
  createInput.style.padding = "0 0.5%";
  createInput.style.border = "0.5px solid coral";
  rootElem.append(createInput);

  //total episodes
    
      
    
     
  
 
  createTotalepisodes.textContent = `Displaying ${episodeList.length} ${change}`;
  createTotalepisodes.id="cte";
  createTotalepisodes.style.width = "20%";
  createTotalepisodes.style.margin = "2% 0.5%";
  rootElem.append(createTotalepisodes);

  //some variables declare and did some styling
  rootElem.style.backgroundColor = "lightgray";
  rootElem.style.borderRadius = "10px";
  rootElem.style.border = "1px solid silver";
  rootElem.style.display = "flex";
  rootElem.style.flexDirection = "row";
  rootElem.style.flexWrap = "wrap";
  rootElem.style.justifyContent = "space-around";
  rootElem.style.margin = "1%";

  // for each is used to display all episode cards
  episodeList.forEach((episode) => {
    //create Card
    let createCard = document.createElement("div");
    createCard.id = "test";
    createCard.style.backgroundColor = "white";
    createCard.style.margin = "1%";
    createCard.style.padding = "0% 0.5%";
    createCard.style.display = "flex";
    createCard.style.flexDirection = "column";
    createCard.style.alignItems = "center";
    createCard.style.alignItems = "center";
    createCard.style.width = "30%";
    createCard.style.borderRadius = "10px";
    createCard.style.border = "0.5px solid silver";
    rootElem.append(createCard);

    // season number
    let seasonNumber = document.createElement("p");
    seasonNumber.style.color = "black";
    seasonNumber.style.fontWeight = "700";
    seasonNumber.style.border = "1px solid black";
    seasonNumber.style.borderRadius = "10px";
    seasonNumber.style.margin = "5% 2%";
    seasonNumber.style.padding = "2% 15%";
    seasonNumber.width = "100%";
    seasonNumber.style.height = "auto";
    seasonNumber.style.fontSize = "0.9rem";
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

    // link on images are created
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
    summary.style.width = "70%";
    summary.style.color = "black";
    createCard.append(summary);

   if( episode && episode.rating ){
    let createGenre = document.createElement("h5");
    createGenre.style.width = "80%";
    createGenre.innerHTML = `<span style="color:red">Genre:</span> ${episode.genres}`;
    createGenre.style.color = "black";
    createCard.append(createGenre);

     let createStatus = document.createElement("h5");
    createStatus.style.width = "80%";
    createStatus.innerHTML = `<span style="color:red">Status:</span> ${episode.status}`;
    createStatus.style.color = "black";
    createCard.append(createStatus);

    let createRating = document.createElement("h5");
    createRating.style.width = "80%";
    createRating.innerHTML = `<span style="color:red">Rating:</span> ${episode.rating.average}`;
    createRating.style.color = "black";
    createCard.append(createRating);

    let createRuntime = document.createElement("h5");
    createRuntime.style.width = "80%";
    createRuntime.innerHTML = `<span style="color:red">Runtime:</span> ${episode.runtime} mins`;
    createRuntime.style.color = "black";
    createCard.append(createRuntime);}
    //reference
    let createReference = document.createElement("a");
    createReference.style.width = "70%";
    createReference.innerHTML = "The data has originally come from TVMaze.com";
    createReference.href = episode.url;
    createCard.append(createReference);


  });
} // for each end


window.onload = setup;
