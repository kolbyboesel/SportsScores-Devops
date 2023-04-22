//API KEY-9f3436bf65c47b3988484cb92d3cb3be

const getBets = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7c01195a20mshbc9188a6ca4f5a5p1ce61cjsn5e640810eca6",
    "X-RapidAPI-Host": "betigolo-predictions.p.rapidapi.com",
  },
};

async function getBetData(url) {
  try {
    let res = await fetch(url, getBets);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function showNBABets() {
  let currentDate = new Date().toJSON().slice(0, 10);

  buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/basketball/" + currentDate
    ),
    "containerNBA"
  );
}

async function showMLBBets() {
  let currentDate = new Date().toJSON().slice(0, 10);

  buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/baseball/" + currentDate
    ),
    "containerMLB"
  );
}

async function showNFLBets() {
  let currentDate = new Date().toJSON().slice(0, 10);

  buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/football/" + currentDate
    ),
    "containerNFL"
  );
}

async function showNHLBets() {
  let currentDate = new Date().toJSON().slice(0, 10);

  buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + currentDate
    ),
    "containerNHL"
  );
}

function round(value) {
  let temp = Math.round(value * 100) / 100;
  let returnValue = String(temp).slice(0, 4);
  return returnValue;
}

async function buildBestBetBoard(allOdds, containerName) {
  clear(containerName);

  let html = `<div class="bestBetHeader"><div class="headerText"> Pick Your Moneyline Bets Based on AI Data!</div></div>`;
  allOdds.forEach((currentGame) => {
    let homeTeam = 0;
    let awayTeam = 0;
    let homeMoneylineVal = 0;
    let awayMoneylineVal = 0;
    let currentLeague = currentGame.league_name;
    if (
      containerName === "containerMLB" &&
      currentGame.country_name === "USA" &&
      currentLeague === "MLB"
    ) {
      homeTeam = currentGame.home_team_name;
      awayTeam = currentGame.away_team_name;
      homeMoneylineVal = round(currentGame.rank_htw_nt);
      awayMoneylineVal = round(currentGame.rank_atw_nt);
      html += generateBestBetsBoard(
        currentGame,
        homeTeam,
        awayTeam,
        homeMoneylineVal,
        awayMoneylineVal
      );
    }
    if (containerName != "containerMLB" && currentGame.country_name === "USA") {
      homeTeam = currentGame.home_team_name;
      awayTeam = currentGame.away_team_name;
      homeMoneylineVal = round(currentGame.rank_htw_nt, 2);
      awayMoneylineVal = round(currentGame.rank_atw_nt, 2);
      html += generateBestBetsBoard(
        currentGame,
        homeTeam,
        awayTeam,
        homeMoneylineVal,
        awayMoneylineVal,
      );
    }
  });
  let container = document.querySelector("." + containerName);
  container.innerHTML = html;
}

function generateBestBetsBoard(
  currentGame,
  homeTeam,
  awayTeam,
  homeMoneylineVal,
  awayMoneylineVal,
) {
  let htmlSegment = `<div class="outerBestBets mobileScreen"><div class="bestBets">`;

  htmlSegment += `<div class="header">
        <div class="headerElement-team">Team Name</div>
        <div class="headerElement-best">% Chance to Hit</div>
      </div>
      <div class="team divider" style="border-left: none; border-top:none; border-right:none;">
        <div class="bestBetTeam">${awayTeam}</div>
        <div class="bestBetElement">${awayMoneylineVal * 100}</div>
      </div>
     
      <div class="team">
        <div class="bestBetTeam">${homeTeam}</div>
        <div class="bestBetElement">${homeMoneylineVal * 100}</div>
      </div>`;

  htmlSegment += `
      </div>
    </div>`;

  return htmlSegment;
}
