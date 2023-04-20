//API KEY-9f3436bf65c47b3988484cb92d3cb3be
const MLB_URL =
  "https://odds.p.rapidapi.com/v4/sports/baseball_mlb/odds?regions=us&oddsFormat=american&markets=spreads,totals,h2h&dateFormat=iso";
const NBA_URL =
  "https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds?regions=us&oddsFormat=american&markets=spreads,totals,h2h&dateFormat=iso";
const NFL_URL =
  "https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/odds?regions=us&oddsFormat=american&markets=spreads,totals,h2h&dateFormat=iso";
const NHL_URL =
  "https://odds.p.rapidapi.com/v4/sports/icehockey_nhl/odds?regions=us&oddsFormat=american&markets=spreads,totals,h2h&dateFormat=iso";
let awaySpread = 0;
let homeSpread = 0;
let homeSpreadOdds = 0;
let awaySpreadOdds = 0;
let awayMoneyline = 0;
let homeMoneyline = 0;
let overValue = 0;
let underValue = 0;
let overOdds = 0;
let underOdds = 0;
let completedDate = 0;

async function getHomeMoneylinePrice(teamName, league) {
  let neededURL;
  if (league === "MLB") {
    neededURL = MLB_URL;
  }
  if (league === "NBA") {
    neededURL = NBA_URL;
  }
  if (league === "NHL") {
    neededURL = NHL_URL;
  }
  if (league === "NFL") {
    neededURL = NFL_URL;
  }

  let tempDataSet = await getData(neededURL);
  tempDataSet.forEach((currentGame) => {
    if (currentGame.home_team === teamName) {
      setValues(currentGame);
      return Number(homeMoneyline);
    }
  });
}

async function getAwayMoneylinePrice(teamName, league) {
  let neededURL;
  if (league === "MLB") {
    neededURL = MLB_URL;
  }
  if (league === "NBA") {
    neededURL = NBA_URL;
  }
  if (league === "NHL") {
    neededURL = NHL_URL;
  }
  if (league === "NFL") {
    neededURL = NFL_URL;
  }

  let tempDataSet = await getData(neededURL);
  tempDataSet.forEach((currentGame) => {
    if (currentGame.away_team === teamName) {
      setValues(currentGame);
      return Number(awayMoneyline);
    }
  });
}

async function showNBAOdds() {
  buildOddsBoard(await getData(NBA_URL), "containerNBA");
}
async function showMLBOdds() {
  buildOddsBoard(await getData(MLB_URL), "containerMLB");
}
async function showNFLOdds() {
  buildOddsBoard(await getData(NFL_URL), "containerNFL");
}
async function showNHLOdds() {
  buildOddsBoard(await getData(NHL_URL), "containerNHL");
}

async function buildOddsBoard(allOdds, containerName) {
  clear(containerName);

  let html = "";
  allOdds.forEach((currentGame) => {
    setValues(currentGame);

    completedDate = formatDate(currentGame.commence_time);

    html += generateOddsBoard(currentGame);
  });
  let container = document.querySelector("." + containerName);
  container.innerHTML = html;
}

function formatDate(rawDate) {
  let dateTimeValue = Date.parse(rawDate);
  let dateRaw = new Date(dateTimeValue);

  return (
    dateRaw.toLocaleDateString() +
    " Start Time: " +
    dateRaw.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
}

function generateOddsBoard(currentGame) {
  let htmlSegment = `<div class="outerBetBoard"><div class="betBoard">`;
  let gameStatus;

  htmlSegment += `<div class="header">
        <div class="headerDate">Date: ${completedDate}</div>
        <div class="headerElement">Spread</div>
        <div class="headerElement">O/U</div>
        <div class="headerElement">ML</div>
      </div>
      <div class="team win">
        <div class="betteam">${currentGame.away_team}</div>
        <div class="betTeamElement">${
          awaySpread + "(" + awaySpreadOdds + ")"
        }</div>
        <div class="betTeamElement">${overValue + "(" + overOdds + ")"}</div>
        <div class="betTeamElement">${awayMoneyline}</div>
      </div>
      <div class="betdivider"></div>
      <div class="team lose">
        <div class="betteam">${currentGame.home_team}</div>
        <div class="betTeamElement">${
          homeSpread + "(" + homeSpreadOdds + ")"
        }</div>
        <div class="betTeamElement">${underValue + "(" + underOdds + ")"}</div>
        <div class="betTeamElement">${homeMoneyline}</div>
      </div>`;

  htmlSegment += `
      </div>
    </div>`;

  return htmlSegment;
}

function setValues(currentGame) {
  if (currentGame.bookmakers[0].markets.length === 1) {
    let currentMarket = currentGame.bookmakers[0].markets[0].key;
    if (currentMarket === "spreads") {
      if (
        currentGame.away_team ==
        currentGame.bookmakers[0].markets[0].outcomes[0].name
      ) {
        awaySpread = currentGame.bookmakers[0].markets[0].outcomes[0].point;
        awaySpreadOdds = currentGame.bookmakers[0].markets[0].outcomes[0].price;
        homeSpread = currentGame.bookmakers[0].markets[0].outcomes[1].point;
        homeSpreadOdds = currentGame.bookmakers[0].markets[0].outcomes[1].price;
      } else {
        awaySpread = currentGame.bookmakers[0].markets[0].outcomes[1].point;
        awaySpreadOdds = currentGame.bookmakers[0].markets[0].outcomes[1].price;
        homeSpread = currentGame.bookmakers[0].markets[0].outcomes[0].point;
        homeSpreadOdds = currentGame.bookmakers[0].markets[0].outcomes[0].price;
      }
    }
    if (currentMarket === "h2h") {
      if (
        currentGame.away_team ==
        currentGame.bookmakers[0].markets[0].outcomes[0].name
      ) {
        awayMoneyline = currentGame.bookmakers[0].markets[0].outcomes[0].price;
        homeMoneyline = currentGame.bookmakers[0].markets[0].outcomes[1].price;
      }
    }
    if (currentMarket === "totals") {
      if (currentGame.bookmakers[0].markets[0].outcomes[0].name == "Over") {
        overValue = currentGame.bookmakers[0].markets[0].outcomes[0].point;
        overOdds = currentGame.bookmakers[0].markets[0].outcomes[0].price;
        underValue = currentGame.bookmakers[0].markets[0].outcomes[1].point;
        underOdds = currentGame.bookmakers[0].markets[0].outcomes[1].price;
      } else {
        overValue = currentGame.bookmakers[0].markets[i].outcomes[1].point;
        overOdds = currentGame.bookmakers[0].markets[i].outcomes[1].price;
        underValue = currentGame.bookmakers[0].markets[i].outcomes[0].point;
        underOdds = currentGame.bookmakers[0].markets[i].outcomes[0].price;
      }
    }
  }
  if (currentGame.bookmakers[0].markets.length === 2) {
    for (let i = 0; i < 2; i++) {
      let currentMarket = currentGame.bookmakers[0].markets[i].key;
      setMultipleValues(currentGame, currentMarket, i);
    }
  }
  if (currentGame.bookmakers[0].markets.length === 3) {
    for (let i = 0; i < 3; i++) {
      let currentMarket = currentGame.bookmakers[0].markets[i].key;
      setMultipleValues(currentGame, currentMarket, i);
    }
  }

  function setMultipleValues(currentGame, currentMarket, i) {
    if (currentMarket === "spreads") {
      if (
        currentGame.away_team ==
        currentGame.bookmakers[0].markets[i].outcomes[0].name
      ) {
        awaySpread = currentGame.bookmakers[0].markets[i].outcomes[0].point;
        awaySpreadOdds = currentGame.bookmakers[0].markets[i].outcomes[0].price;
        homeSpread = currentGame.bookmakers[0].markets[i].outcomes[1].point;
        homeSpreadOdds = currentGame.bookmakers[0].markets[i].outcomes[1].price;
      } else {
        awaySpread = currentGame.bookmakers[0].markets[i].outcomes[1].point;
        awaySpreadOdds = currentGame.bookmakers[0].markets[i].outcomes[1].price;
        homeSpread = currentGame.bookmakers[0].markets[i].outcomes[0].point;
        homeSpreadOdds = currentGame.bookmakers[0].markets[i].outcomes[0].price;
      }
    } else if (currentMarket === "h2h") {
      if (
        currentGame.away_team ==
        currentGame.bookmakers[0].markets[i].outcomes[0].name
      ) {
        awayMoneyline = currentGame.bookmakers[0].markets[i].outcomes[0].price;
        homeMoneyline = currentGame.bookmakers[0].markets[i].outcomes[1].price;
      }
    } else if (currentMarket === "totals") {
      if (currentGame.bookmakers[0].markets[i].outcomes[0].name == "Over") {
        overValue = currentGame.bookmakers[0].markets[i].outcomes[0].point;
        overOdds = currentGame.bookmakers[0].markets[i].outcomes[0].price;
        underValue = currentGame.bookmakers[0].markets[i].outcomes[1].point;
        underOdds = currentGame.bookmakers[0].markets[i].outcomes[1].price;
      } else {
        overValue = currentGame.bookmakers[0].markets[i].outcomes[1].point;
        overOdds = currentGame.bookmakers[0].markets[i].outcomes[1].price;
        underValue = currentGame.bookmakers[0].markets[i].outcomes[0].point;
        underOdds = currentGame.bookmakers[0].markets[i].outcomes[0].price;
      }
    }
  }
}
