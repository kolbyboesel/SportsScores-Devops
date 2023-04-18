function showKolbysNBA() {
  clear("containerNBA");
  let htmlSegment = `<div class="kolbyPicksFullCont">`;
  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">1. </div>
        <div class="pickName">No NBA Today</div>
        <div class="pickLine">TBD</div>
      </div>`;

  htmlSegment += `
      </div>
    </div>
    </div>`;

  let container = document.querySelector(".containerNBA");
  console.log(htmlSegment);
  container.innerHTML = htmlSegment;
}

function showKolbysMLB() {
  clear("containerMLB");

  let htmlSegment = `<div class="kolbyPicksFullCont">`;
  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">1. </div>
        <div class="pickName">Check back later for today's picks</div>
        <div class="pickLine">TBD</div>
      </div>`;

  htmlSegment += `</div>
    </div>
    </div>`;

  let container = document.querySelector(".containerMLB");
  container.innerHTML = htmlSegment;
}

function showKolbysNHL() {
  clear("containerNHL");

  let htmlSegment = `<div class="kolbyPicksFullCont">`;
  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">1. </div>
        <div class="pickName">No Picks Today</div>
        <div class="pickLine">TBD</div>
      </div>`;

  htmlSegment += `</div>
    </div>
    </div>`;

  let container = document.querySelector(".containerNHL");
  container.innerHTML = htmlSegment;
}

function showKolbysNFL() {
  clear("containerNFL");

  let htmlSegment = `<div class="kolbyPicksFullCont">`;
  htmlSegment += `<div class="outerKolbysPicks"><div class="kolbysPicks">
   <div class="pick">
        <div class="pickNo">1. </div>
        <div class="pickName">Come back during the NFL season</div>
        <div class="pickLine">TBD</div>
      </div>`;

  htmlSegment += `</div>
    </div>
    </div>`;

  let container = document.querySelector(".containerNFL");
  container.innerHTML = htmlSegment;
}
