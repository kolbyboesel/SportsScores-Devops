function showKolbysNBA() {

  let htmlSegment = `<div class="bestBetHeader"><div class="headerText">Kolby's NBA Bets -- Record Since 4/27: 1-2</div></div>
  <div class="kolbyPicksFullCont">`;
  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">1. </div>
        <div class="pickName">De'Andre Hunter O 13.5 Points / Dejounte Murray O 20.5 Points</div>
        <div class="pickLine">+169</div>
      </div>
    </div>
  </div>`;

  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
  <div class="pick">
       <div class="pickNo">2. </div>
       <div class="pickName">Trae Young O 8.5 Assists / Al Horford O 6.5 Rebounds</div>
       <div class="pickLine">+190</div>
     </div>
   </div>
 </div>`;

 htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
  <div class="pick">
       <div class="pickNo">3. </div>
       <div class="pickName">Derrick White O 14.5 Points / Malcom Brogdon O 2.5 Assists</div>
       <div class="pickLine">+113</div>
     </div>`;

  htmlSegment += `
      </div>
    </div>
    </div>`;

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = htmlSegment;
}

function showKolbysMLB() {

  let htmlSegment = `<div class="bestBetHeader"><div class="headerText">Kolby's MLB Bets -- Record Since 4/27: 3-2</div></div>
  <div class="kolbyPicksFullCont">`;
  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">1. </div>
        <div class="pickName">Pirates Ml</div>
        <div class="pickLine">+131</div>
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
        <div class="pickName">Moneyline Parlay (Twins Ml, Rays Ml)</div>
        <div class="pickLine">+151</div>
      </div>
    </div>
  </div>`;

  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">4. </div>
        <div class="pickName">Moneyline Parlay (Angels Ml, Yankees Ml)</div>
        <div class="pickLine">+115</div>
      </div>
    </div>
  </div>`;

  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">5. </div>
        <div class="pickName">Moneyline Parlay (Angels Ml, Braves Ml)</div>
        <div class="pickLine">+118</div>
      </div>`;

  htmlSegment += `</div>
    </div>
    </div>`;

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = htmlSegment;
}

function showKolbysNHL() {

  let htmlSegment = `<div class="bestBetHeader"><div class="headerText">Kolby's NHL Bets -- Record Since 4/27: 1-0</div></div>
  <div class="kolbyPicksFullCont">`;
  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">1. </div>
        <div class="pickName">Lightning Ml</div>
        <div class="pickLine">+135</div>
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
