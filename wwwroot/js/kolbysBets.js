function showKolbysNBA() {

  let htmlSegment = `<div class="bestBetHeader"><div class="headerText">Kolby's NBA Bets -- <a href="https://docs.google.com/spreadsheets/d/1rz1qH7BAJCdIFsAlwKhCJBKv5SgXSlcmZmICXENyqbQ/edit#gid=698726683">Click To View Past Picks</a></div></div>
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

  let htmlSegment = `<div class="bestBetHeader"><div class="headerText">Kolby's MLB Bets -- <a href="https://docs.google.com/spreadsheets/d/1rz1qH7BAJCdIFsAlwKhCJBKv5SgXSlcmZmICXENyqbQ/edit#gid=0">Click To View Past Picks</a></div></div>
  <div class="kolbyPicksFullCont">`;
  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">1. </div>
        <div class="pickName">Cubs Ml</div>
        <div class="pickLine">+112</div>
      </div>
    </div>
  </div>`;

  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">2. </div>
        <div class="pickName">Blue Jays Ml</div>
        <div class="pickLine">-106</div>
      </div>
    </div>
  </div>`;

  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">3. </div>
        <div class="pickName">Braves Ml</div>
        <div class="pickLine">-131</div>
      </div>
    </div>
  </div>`;

  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">4. </div>
        <div class="pickName">Rays Ml</div>
        <div class="pickLine">-147</div>
      </div>
    </div>
  </div>`;

  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">5. </div>
        <div class="pickName">Red Sox Ml</div>
        <div class="pickLine">+104</div>
      </div>
    </div>
  </div>`;

  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">6. </div>
        <div class="pickName">Yankees Ml</div>
        <div class="pickLine">+188</div>
      </div>
    </div>
  </div>`;

  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">7. </div>
        <div class="pickName">Brewers Ml</div>
        <div class="pickLine">-129</div>
      </div>`;

  htmlSegment += `</div>
    </div>
    </div>`;

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = htmlSegment;
}

function showKolbysNHL() {

  let htmlSegment = `<div class="bestBetHeader"><div class="headerText">Kolby's NHL Bets -- <a href="https://docs.google.com/spreadsheets/d/1rz1qH7BAJCdIFsAlwKhCJBKv5SgXSlcmZmICXENyqbQ/edit#gid=195711033">Click To View Past Picks</a></div></div>
  <div class="kolbyPicksFullCont">`;
  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">1. </div>
        <div class="pickName">No NHL Today</div>
        <div class="pickLine"></div>
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
