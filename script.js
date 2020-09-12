//You can edit ALL of the code here
// Setup function
function setup() {
  // some variables to display data
 //  allEpisodes = onlineallEpisodes;
    allShows = getAllShows();
 // makePageForEpisodes(allEpisodes);

  // id = 8;
   fetch(`https://api.tvmaze.com/shows/527/episodes`)
     .then((response) => response.json())
     .then((onlineallEpisodes) => makePageForEpisodes(onlineallEpisodes))
     .catch((err) => console.log(err));
   
  //episodeData(allEpisodes);
 
}
var allEpisodes;
var allShows;

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

  //console.log(myP);
  for (i = 0; i < myP.length; i++) {
    //b = rootElem.getElementsByTagName("p");
    let getDivs = document.querySelectorAll("#test");
    // console.log(getDivs);

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
  var i, myP;
  document.getElementById("#test");
  const rootElem = document.getElementById("root");
  let getSelect = document.querySelector("select").selectedIndex;
  //console.log(getSelect);

  myP = document.querySelectorAll("#test");

  //console.log(myP);
  for (i = 0; i < myP.length; i++) {
    //b = rootElem.getElementsByTagName("p");
    let getDivs = document.querySelectorAll("#test");
    // console.log(getDivs);

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
  document.getElementById("#test");
  const rootElem = document.getElementById("root");
  var input, filter, myP, i, txtValue;
  input = document.getElementById("myInput");
  //console.log(input);
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
// function to make upper page  functionalities //search//select//all episodes button
function makePageForEpisodes(episodeList,id) {
  
 
      // title of the project // logo// title
      const rootElem = document.getElementById("root");
      document.body.style.backgroundColor = "gray";
      let createTitle = document.createElement("h2");
      createTitle.textContent = "Ali Haider TV Project";

      createTitle.style.margin = "1.5% 1%";
      createTitle.style.color = "black";
      rootElem.append(createTitle);

      //select button to go to specific episode
      let createSelect = document.createElement("select");
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

      //All episodes button
      let allButton = document.createElement("button");
      allButton.textContent = "All Episodes";
      allButton.style.width = "6%";
      allButton.style.height = "7.6vh";
      allButton.style.margin = "1% 0.5%";
      allButton.style.padding = "0 0.2%";
      allButton.style.borderRadius = "10px";
      allButton.style.border = "0.5px solid coral";
      allButton.id = "allButton";
      rootElem.append(allButton);

      allButton.addEventListener("click", myFunctionAllEpisodesButton);

      // Search box // create Input
      let createInput = document.createElement("input");
      createInput.style.width = "15%";
      createInput.style.height = "7vh";
      createInput.id = "myInput";
      createInput.type = "text";
      createInput.addEventListener("keyup", function (e) {
        myFunctionSearch();
      });
      createInput.placeholder = "search for movies";
      createInput.style.margin = "1% 0.5%";
      createInput.style.padding = "0 0.5%";
      createInput.style.border = "0.5px solid coral";
      rootElem.append(createInput);

      let createTotalepisodes = document.createElement("p");
      createTotalepisodes.textContent = `Displaying ${episodeList.length} episodes`;
      createTotalepisodes.style.width = "20%";
      createTotalepisodes.style.margin = "2% 0.5%";
      rootElem.append(createTotalepisodes);
    
    
  //some variables declare and did some styling
 // const rootElem = document.getElementById("root");
  rootElem.style.backgroundColor = "lightgray";
  rootElem.style.borderRadius = "10px";
  rootElem.style.border = "1px solid silver";
  rootElem.style.display = "flex";
  rootElem.style.flexDirection = "row";
  rootElem.style.flexWrap = "wrap";
  rootElem.style.justifyContent = "space-around";
  rootElem.style.margin = "1%";
  // console.log(episodeList);
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
    console.log(episode);
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

    //reference
    let createReference = document.createElement("a");
    createReference.style.width = "70%";
    createReference.innerHTML = "The data has originally come from TVMaze.com";
    createReference.href = episode.url;
    createCard.append(createReference);
  })}

// function Shows(getAllShows){
//   const rootElem = document.getElementById("root");
//    console.log(allShows[0].name);
//   //select button to go to specific episode
//   let createSelectShows = document.createElement("select");
//   createSelectShows.style.width = "15%";
//   createSelectShows.style.height = "7.6vh";
//   createSelectShows.style.margin = "1% 0.5%";
//   createSelectShows.style.padding = "0 0.2%";
//   createSelectShows.style.border = "0.5px solid coral";
//   createSelectShows.id = "select";
//    let getShowNames = [];
//   for (let i = 0; i < allShows.length; i++) {
//     getShowNames.push(allShows[i].name);
//   }
 
//       let sortedShowNames = getShowNames.sort();
//   console.log(sortedShowNames);
//    for (let i = 0; i < allShows.length; i++) {
    
//     let option = document.createElement("option");
//     option.text = sortedShowNames[i];
//     createSelectShows.append(option);
//   }

//   rootElem.append(createSelectShows);
//   //createSelectShows.addEventListener("click", myFunctionSelectShows);

// }


window.onload = setup;
