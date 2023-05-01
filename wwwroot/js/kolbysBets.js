function showKolbysNBA() {

  let htmlSegment = `<div class="bestBetHeader"><div class="headerText">Kolby's NBA Bets -- <a href="https://docs.google.com/spreadsheets/d/1rz1qH7BAJCdIFsAlwKhCJBKv5SgXSlcmZmICXENyqbQ/edit#gid=698726683">Click To View Past Picks</a></div></div>
  <div class="kolbyPicksFullCont">`;
  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">1. </div>
        <div class="pickName">Parlay (Celtics Ml) / (76ers/Celtics O 214.5)</div>
        <div class="pickLine">+131</div>
      </div>
    </div>
  </div>`;

  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
  <div class="pick">
       <div class="pickNo">2. </div>
       <div class="pickName">Jaylen Brown O 24.5 Points / James Harden O 8.5 Assists</div>
       <div class="pickLine">+208</div>
     </div>
   </div>
 </div>`;

 htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
  <div class="pick">
       <div class="pickNo">3. </div>
       <div class="pickName">Malcom Brogdon O 3.5 Rebounds / P.J. Tucker O 4.5 Points</div>
       <div class="pickLine">+274</div>
     </div>
   </div>
 </div>`;

 htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
  <div class="pick">
       <div class="pickNo">4. </div>
       <div class="pickName">Nikola Jokic O 8.5 Assists / Chris Paul O 1.5 Steals</div>
       <div class="pickLine">+242</div>
     </div>
   </div>
 </div>`;

 htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
  <div class="pick">
       <div class="pickNo">5. </div>
       <div class="pickName">Jamal Murray O 24.5 Points / Kevin Durant U 28.5 Points</div>
       <div class="pickLine">+264</div>
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
        <div class="pickName">Yankees Ml</div>
        <div class="pickLine">-131</div>
      </div>
    </div>
  </div>`;

  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">2. </div>
        <div class="pickName">Guardians / Yankees O 8.5</div>
        <div class="pickLine">-107</div>
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
        <div class="pickLine">TBA</div>
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
