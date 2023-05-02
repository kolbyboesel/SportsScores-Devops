function showKolbysNBA() {

  let htmlSegment = `<div class="bestBetHeader"><div class="headerText">Kolby's NBA Bets -- <a href="https://docs.google.com/spreadsheets/d/1rz1qH7BAJCdIFsAlwKhCJBKv5SgXSlcmZmICXENyqbQ/edit#gid=698726683">Click To View Past Picks</a></div></div>
  <div class="kolbyPicksFullCont">`;

 htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
  <div class="pick">
       <div class="pickNo">1. </div>
       <div class="pickName">Kolby's Picks Available in Google Sheet Above</div>
       <div class="pickLine">TBA</div>
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
        <div class="pickName">Kolby's Picks Available in Google Sheet Above</div>
        <div class="pickLine">TBA</div>
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
        <div class="pickName">Kolby's Picks Available in Google Sheet Above</div>
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
