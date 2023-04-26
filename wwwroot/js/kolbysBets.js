function showKolbysNBA() {

  let htmlSegment = `<div class="bestBetHeader"><div class="headerText">Kolby's NBA Bets</div></div>
  <div class="kolbyPicksFullCont">`;
  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">1. </div>
        <div class="pickName">Darius Garland O 20.5 Points / Gabe Vincent U 2.5 3s</div>
        <div class="pickLine">+161</div>
      </div>
    </div>
  </div>`;

  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
  <div class="pick">
       <div class="pickNo">2. </div>
       <div class="pickName">Giannis O 47.5 PRA / Julius Randle O 2.5 Assists</div>
       <div class="pickLine">+157</div>
     </div>
   </div>
 </div>`;

 htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
  <div class="pick">
       <div class="pickNo">3. </div>
       <div class="pickName">Jalen Brunson O 5.5 Assists / Harrison Barnes O 13.5 Points</div>
       <div class="pickLine">+179</div>
     </div>`;

  htmlSegment += `
      </div>
    </div>
    </div>`;

  let container = document.querySelector(".AccountContainer");
  console.log(htmlSegment);
  container.innerHTML = htmlSegment;
}

function showKolbysMLB() {

  let htmlSegment = `<div class="bestBetHeader"><div class="headerText">Kolby's MLB Bets</div></div>
  <div class="kolbyPicksFullCont">`;
  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">1. </div>
        <div class="pickName">Royals Ml</div>
        <div class="pickLine">+219</div>
      </div>
    </div>
  </div>`;

  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">2. </div>
        <div class="pickName">Mariners Ml</div>
        <div class="pickLine">-114</div>
      </div>
    </div>
  </div>`;

  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">3. </div>
        <div class="pickName">Moneyline Parlay (Angels Ml, Brewers Ml)</div>
        <div class="pickLine">+118</div>
      </div>`;

  htmlSegment += `</div>
    </div>
    </div>`;

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = htmlSegment;
}

function showKolbysNHL() {

  let htmlSegment = `<div class="bestBetHeader"><div class="headerText">Kolby's NHL Bets</div></div>
  <div class="kolbyPicksFullCont">`;
  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">1. </div>
        <div class="pickName">Kraken Ml</div>
        <div class="pickLine">+155</div>
      </div>`;

  htmlSegment += `</div>
    </div>
    </div>`;

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = htmlSegment;
}

function showKolbysNFL() {

  let htmlSegment = `<div class="bestBetHeader"><div class="headerText">Kolby's NFL Bets</div></div>
  <div class="kolbyPicksFullCont">`;
  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">1. </div>
        <div class="pickName">Come back during the NFL season</div>
        <div class="pickLine">TBD</div>
      </div>`;

  htmlSegment += `</div>
    </div>
    </div>`;

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = htmlSegment;
}
