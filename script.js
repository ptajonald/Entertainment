document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById("navbar");
    let lastScrollTop = 0;
  
    window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll Down
        navbar.classList.add('collapsed');
      } else {
        // Scroll Up
        navbar.classList.remove('collapsed');
      }
      lastScrollTop = scrollTop;
    });
    const dropdownBtn = document.createElement('button');
    dropdownBtn.id = 'dropdown-btn';
    dropdownBtn.textContent = 'Menu';
  
    navbar.parentNode.insertBefore(dropdownBtn, navbar.nextSibling);
  
    dropdownBtn.addEventListener('click', function() {
      const menu = document.querySelector('#navbar ul');
      menu.style.display = menu.style.display ==='flex' ? 'none' : 'flex';
    });
  });
  
  function show() {
  document.getElementById("reveal").innerHTML = "turnt";
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
  function meanGirls() {
    const meanGirlsRating = document.querySelector("#meanGirlsRating");
    const meanGirls = document.getElementById("meanGirls").value;
    meanGirlsRating.innerHTML = "Movie was " + meanGirls;
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
  function kongVs() {
    const kongVsRating = document.querySelector("#kongVsRating");
    const kongVs = document.querySelector("#kongVs").value;
    kongVsRating.innerHTML = "Movie was " + kongVs;
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
  function gameCount() {
    const gameCount = document.getElementsByClassName("gamePlayed");
    const gamesPlayed = document.getElementById("gamesPlayed");
    gamesPlayed.innerHTML = gameCount.length + " games played";
    const bestGame = document.getElementById("bestGame");
    bestGame.innerText = "Best 2024 Game: " + gameCount[6].innerHTML;
  }
  function movieCount() {
    const movieCount = document.getElementsByClassName("movieSeen");
    const moviesSeen = document.getElementById("moviesSeen");
    moviesSeen.innerHTML = movieCount.length + " movies seen";
    const bestMovie = document.getElementById("bestMovie");
    bestMovie.innerText = "Best Movie: " + movieCount[3].innerHTML;
  }
  function showCount() {
    const showCount = document.getElementsByClassName("showSeen");
    const showsSeen = document.getElementById("showsSeen");
    showsSeen.innerHTML = showCount.length + " shows watched";
    const bestShow = document.getElementById("bestShow");
    bestShow.innerText = "Best Show: " + showCount[7].innerHTML;
  }