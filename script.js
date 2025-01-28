// document.addEventListener('DOMContentLoaded', function() {
//   const navbar = document.getElementById("navbar");
//   let lastScrollTop = 0;
  
//   window.addEventListener('scroll', function() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop && scrollTop > 100) {
//       // Scroll Down
//       navbar.classList.add('collapsed');
//     } else {
//       // Scroll Up
//       navbar.classList.remove('collapsed');
//     }
//     lastScrollTop = scrollTop;
//   });
//   const dropdownBtn = document.createElement('button');
//   dropdownBtn.id = 'dropdown-btn';
//   dropdownBtn.textContent = 'Menu';
  
//   navbar.parentNode.insertBefore(dropdownBtn, navbar.nextSibling);
  
//   dropdownBtn.addEventListener('click', function() {
//     const menu = document.querySelector('#navbar ul');
//     menu.style.display = menu.style.display ==='flex' ? 'none' : 'flex';
//   });
// });
  
function show() {
document.getElementById("reveal").innerHTML = "turnt";
}

// index
const gaming = document.getElementById("gaming");
const cinema = document.getElementById("cinema");
const streaming = document.getElementById("streaming");
const music = document.getElementById("music");
const sports = document.getElementById("sports");
const comics = document.getElementById("comics");

function gamingStone() {
  document.getElementById("universe").innerHTML = gaming.innerHTML;
}
function cinemaStone() {
  document.getElementById("universe").innerHTML = cinema.innerHTML;
}
function streamingStone() {
  document.getElementById("universe").innerHTML = streaming.innerHTML;
}
function musicStone() {
  document.getElementById("universe").innerHTML = music.innerHTML;
}
function sportsStone() {
  document.getElementById("universe").innerHTML = sports.innerHTML;
}
function comicsStone() {
  document.getElementById("universe").innerHTML = comics.innerHTML;
}

// gaming
  
const xbox = document.getElementById("xbox");
const ps5 = document.getElementById("playstation");
const nswitch = document.getElementById("switch");

function sourceXbox() {
  document.getElementById("gameSide").innerHTML = xbox.innerHTML;
}
function sourcePs() {
  document.getElementById("gameSide").innerHTML = ps5.innerHTML;
}
function sourceSwitch() {
  document.getElementById("gameSide").innerHTML = nswitch.innerHTML;
}

function pokemon() {
  const pokemonRating = document.querySelector("#pokemonRating");
  const pokemon = document.getElementById("pokemon").value;
    pokemonRating.innerHTML = pokemon + " Game";
}
function palworld() {
  const palworldRating = document.querySelector("#palworldRating");
  const palworld = document.getElementById("palworld").value;
    palworldRating.innerHTML = palworld + " Game";
}
function starfield() {
  const starfieldRating = document.querySelector("#starfieldRating");
  const starfield = document.getElementById("starfield").value;
    starfieldRating.innerHTML = starfield + " Game";
}
function spiderMan() {
  const spiderManRating = document.querySelector("#spiderManRating");
  const spiderMan = document.getElementById("spiderMan").value;
    spiderManRating.innerHTML = spiderMan + " Game";
}
function godOf() {
  const godOfRating = document.querySelector("#godOfRating");
  const godOf = document.getElementById("godOf").value;
    godOfRating.innerHTML = godOf + " Game";
}
function hogwarts() {
  const hogwartsRating = document.querySelector("#hogwartsRating");
  const hogwarts = document.getElementById("hogwarts").value;
    hogwartsRating.innerHTML = hogwarts + " Game";
}
function finalFantasy() {
  const finalFantasyRating = document.querySelector("#finalFantasyRating");
  const finalFantasy = document.getElementById("finalFantasy").value;
    finalFantasyRating.innerHTML = finalFantasy + " Game";
}

function gameCount() {
  const gameCount = document.getElementsByClassName("gamePlayed");
  const gamesPlayed = document.getElementById("gamesPlayed");
    gamesPlayed.innerHTML = gameCount.length + " games played";
  const bestGame = document.getElementById("bestGame");
    bestGame.innerText = "Best 2024 Game: " + gameCount[6].innerHTML;
}

//cinema
function meanGirls() {
  const meanGirlsRating = document.querySelector("#meanGirlsRating");
  const meanGirls = document.getElementById("meanGirls").value;
    meanGirlsRating.innerHTML = "Movie was " + meanGirls;
}
function wonka() {
  const wonkaRating = document.querySelector("#wonkaRating");
  const wonka = document.getElementById("wonka").value;
    wonkaRating.innerHTML = "Movie was " + wonka;
}
function beekeeper() {
  const beekeeperRating = document.querySelector("#beekeeperRating");
  const beekeeper = document.getElementById("beekeeper").value;
    beekeeperRating.innerHTML = "Movie was " + beekeeper;
}
function americanFiction() {
  const americanFictionRating = document.querySelector("#americanFictionRating");
  const americanFiction = document.getElementById("americanFiction").value;
    americanFictionRating.innerHTML = "Movie was " + americanFiction;
}
function argyle() {
  const argyleRating = document.querySelector("#argyleRating");
  const argyle = document.getElementById("argyle").value;
    argyleRating.innerHTML = "Movie was " + argyle;
}
function madameWeb() {
  const madameWebRating = document.querySelector("#madameWebRating");
  const madameWeb = document.querySelector("#madameWeb").value;
    madameWebRating.innerHTML = "Movie was " + madameWeb;
}
function dune() {
  const duneRating = document.querySelector("#duneRating");
  const dune = document.querySelector("#dune").value;
    duneRating.innerHTML = "Movie was " + dune;
}
function kungFu() {
  const kungFuRating = document.querySelector("#kungFuRating");
  const kungFu = document.querySelector("#kungFu").value;
    kungFuRating.innerHTML = "Movie was " + kungFu;
}
function ghostbusters() {
  const ghostbustersRating = document.querySelector("#ghostbustersRating");
  const ghostbusters = document.querySelector("#ghostbusters").value;
    ghostbustersRating.innerHTML = "Movie was " + ghostbusters;
}
function boyAnd() {
  const boyAndRating = document.querySelector("#boyAndRating");
  const boyAnd = document.getElementById("boyAnd").value;
    boyAndRating.innerHTML = "Movie was " + boyAnd;
}
function kongVs() {
  const kongVsRating = document.querySelector("#kongVsRating");
  const kongVs = document.querySelector("#kongVs").value;
    kongVsRating.innerHTML = "Movie was " + kongVs;
}
function monkeyMan() {
  const monkeyManRating = document.querySelector("#monkeyManRating");
  const monkeyMan = document.getElementById("monkeyMan").value;
    monkeyManRating.innerHTML = "Movie was " + monkeyMan;
}
function civilWar() {
  const civilWarRating = document.querySelector("#civilWarRating");
  const civilWar = document.querySelector("#civilWar").value;
    civilWarRating.innerHTML = "Movie was " + civilWar;
}
function planetOf() {
  const planetOfRating = document.querySelector("#planetOfRating");
  const planetOf = document.querySelector("#planetOf").value;
    planetOfRating.innerHTML = "Movie was " + planetOf;
}
function theFall() {
  const theFallRating = document.querySelector("#theFallRating");
  const theFall = document.querySelector("#theFall").value;
    theFallRating.innerHTML = "Movie was " + theFall;
}
function watchers() {
  const watchersRating = document.querySelector("#watchersRating");
  const watchers = document.getElementById("watchers").value;
    watchersRating.innerHTML = "Movie was " + watchers;
}
function badBoys() {
  const badBoysRating = document.querySelector("#badBoysRating");
  const badBoys = document.getElementById("badBoys").value;
    badBoysRating.innerHTML = "Movie was " + badBoys;
}
function insideOut() {
  const insideOutRating = document.querySelector("#insideOutRating");
  const insideOut = document.getElementById("insideOut").value;
    insideOutRating.innerHTML = "Movie was " + insideOut;
}
function quietPlace() {
  const quietPlaceRating = document.querySelector("#quietPlaceRating");
  const quietPlace = document.getElementById("quietPlace").value;
    quietPlaceRating.innerHTML = "Movie was " + quietPlace;
}
function despicable() {
  const despicableRating = document.querySelector("#despicableRating");
  const despicable = document.getElementById("despicable").value;
    despicableRating.innerHTML = "Movie was " + despicable;
}
function deadpool() {
  const deadpoolRating = document.querySelector("#deadpoolRating");
  const deadpool = document.getElementById("deadpool").value;
    deadpoolRating.innerHTML = "Movie was " + deadpool;
}
function blinkTwice() {
  const blinkTwiceRating = document.querySelector("#blinkTwiceRating");
  const blinkTwice = document.getElementById("blinkTwice").value;
    blinkTwiceRating.innerHTML = "Movie was " + blinkTwice;
}
function speakNoEvil() {
  const speakNoEvilRating = document.querySelector("#speakNoEvilRating");
  const speakNoEvil = document.getElementById("speakNoEvil").value;
    speakNoEvilRating.innerHTML = "Movie was " + speakNoEvil;
}
function megalopolis() {
  const megalopolisRating = document.querySelector("#megalopolisRating");
  const megalopolis = document.getElementById("megalopolis").value;
    megalopolisRating.innerHTML = "Movie was " + megalopolis;
}
function transformers() {
  const transformersRating = document.querySelector("#transformersRating");
  const transformers = document.getElementById("transformers").value;
    transformersRating.innerHTML = "Movie was " + transformers;
}
function joker() {
  const jokerRating = document.querySelector("#jokerRating");
  const joker = document.getElementById("joker").value;
    jokerRating.innerHTML = "Movie was " + joker;
}
function smile() {
  const smileRating = document.querySelector("#smileRating");
  const smile = document.getElementById("smile").value;
    smileRating.innerHTML = "Movie was " + smile;
}
function pieceByPiece() {
  const pieceByPieceRating = document.querySelector("#pieceByPieceRating");
  const pieceByPiece = document.getElementById("pieceByPiece").value;
    pieceByPieceRating.innerHTML = "Movie was " + pieceByPiece;
}
function venom() {
  const venomRating = document.querySelector("#venomRating");
  const venom = document.getElementById("venom").value;
    venomRating.innerHTML = "Movie was " + venom;
}
function heretic() {
  const hereticRating = document.querySelector("#hereticRating");
  const heretic = document.getElementById("heretic").value;
    hereticRating.innerHTML = "Movie was " + heretic;
}
function redOne() {
  const redOneRating = document.querySelector("#redOneRating");
  const redOne = document.getElementById("redOne").value;
    redOneRating.innerHTML = "Movie was " + redOne;
}
function gladiator() {
  const gladiatorRating = document.querySelector("#gladiatorRating");
  const gladiator = document.getElementById("gladiator").value;
    gladiatorRating.innerHTML = "Movie was " + gladiator;
}
function wicked() {
  const wickedRating = document.querySelector("#wickedRating");
  const wicked = document.getElementById("wicked").value;
    wickedRating.innerHTML = "Movie was " + wicked;
}
function moana() {
  const moanaRating = document.querySelector("#moanaRating");
  const moana = document.getElementById("moana").value;
    moanaRating.innerHTML = "Movie was " + moana;
}

function movieCount() {
  const movieCount = document.getElementsByClassName("movieSeen");
  const moviesSeen = document.getElementById("moviesSeen");
    moviesSeen.innerHTML = movieCount.length + " movies seen";
  const bestMovie = document.getElementById("bestMovie");
    bestMovie.innerText = "Best Movie: " + movieCount[6].innerHTML;
}

//streaming
function showCount() {
  const showCount = document.getElementsByClassName("showSeen");
  const showsSeen = document.getElementById("showsSeen");
    showsSeen.innerHTML = showCount.length + " shows watched";
  const bestShow = document.getElementById("bestShow");
    bestShow.innerText = "Best Show: " + showCount[9].innerHTML;
}

//music

//sports

//comics
const marvelComics = document.getElementById("marvel");
const dcComics = document.getElementById("dc");

