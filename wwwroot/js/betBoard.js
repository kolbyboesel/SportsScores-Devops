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

async function showNBAOdds() {
  let html = "";
  html += buildOddsBoard(await getData(NBA_URL));
  let container = document.querySelector("." + "containerNBA");
  container.innerHTML = html;
}
async function showMLBOdds() {
  let html = "";
  html += buildOddsBoard(await getData(MLB_URL));
  let container = document.querySelector("." + "containerMLB");
  container.innerHTML = html;
}
async function showNFLOdds() {
  let html = "";
  html += buildOddsBoard(await getData(NFL_URL));
  let container = document.querySelector("." + "containerNFL");
  container.innerHTML = html;
}
async function showNHLOdds() {
  let html = "";
  html += buildOddsBoard(await getData(NHL_URL));
  let container = document.querySelector("." + "containerNHL");
  container.innerHTML = html;
}

async function showAllOdds() {
  let html = `<div style="width: 100%; height: 1%; padding-top: 2%; text-align: center; display: inline-block; font-size: 4vh; font-family: Impact, Haettenschweiler, Arial Narrow Bold, sans-serif;">Thanks for subscribing to Kolby's Picks!</div>`;
  html += `<div style="width: 100%; height: 1%; padding-top: 2%; text-align: center; display: inline-block; font-size: 3vh; font-family: Impact, Haettenschweiler, Arial Narrow Bold, sans-serif;">Click one of the buttons above to view AI moneyline bets or my daily picks</div>`;

  html += `<br><div style="width: 100%; height: 1%; padding-top: 2%; text-align: center; display: inline-block; font-size: 3vh; font-family: Impact, Haettenschweiler, Arial Narrow Bold, sans-serif;text-decoration: underline">NBA Odds</div>`;
  html += buildOddsBoard(await getData(NBA_URL));
  html += `<br><div style="width: 100%; height: 1%; padding-top: 2%; text-align: center; display: inline-block; font-size: 3vh; font-family: Impact, Haettenschweiler, Arial Narrow Bold, sans-serif;text-decoration: underline">MLB Odds</div>`;

  html += buildOddsBoard(await getData(MLB_URL));
  html += `<br><div style="width: 100%; height: 1%; padding-top: 2%; text-align: center; display: inline-block; font-size: 3vh; font-family: Impact, Haettenschweiler, Arial Narrow Bold, sans-serif;text-decoration: underline">NFL Odds</div>`;

  html += buildOddsBoard(await getData(NFL_URL));
  html += `<br><div style="width: 100%; height: 1%; padding-top: 2%; text-align: center; display: inline-block; font-size: 3vh; font-family: Impact, Haettenschweiler, Arial Narrow Bold, sans-serif;text-decoration: underline">NHL Odds</div>`;

  html += buildOddsBoard(await getData(NHL_URL));

  let container = document.querySelector("." + "AccountContainer");
  container.innerHTML = html;
}

function buildOddsBoard(allOdds) {

  let html = "";
  allOdds.forEach((currentGame) => {
    setValues(currentGame);

    completedDate = formatDate(currentGame.commence_time);

    html += generateOddsBoard(currentGame);
  });
  return html;
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

function checkValues() {
  if (awaySpread == 0) {
    awaySpread = "NA";
  }
  if (homeSpread == 0) {
    homeSpread = "NA";
  }
  if (homeSpreadOdds == 0) {
    homeSpreadOdds = "NA";
  }
  if (awaySpreadOdds == 0) {
    awaySpreadOdds = "NA";
  }
  if (awayMoneyline == 0) {
    awayMoneyline = "NA";
  }
  if (homeMoneyline == 0) {
    homeMoneyline = "NA";
  }
  if (overValue == 0) {
    overValue = "NA";
  }
  if (underValue == 0) {
    underValue = "NA";
  }
  if (overOdds == 0) {
    overOdds = "NA";
  }
  if (underOdds == 0) {
    underOdds = "NA";
  }
}

function generateOddsBoard(currentGame) {
  checkValues(
    awaySpread,
    homeSpread,
    homeSpreadOdds,
    awaySpreadOdds,
    awayMoneyline,
    homeMoneyline,
    overValue,
    underValue,
    overOdds,
    underOdds
  );

  let htmlSegment = `<div class="outerBetBoard"><div class="betBoard">`;
  let gameStatus;

  htmlSegment += `<div class="header">
        <div class="headerDate mobileText">Date: ${completedDate}</div>
        <div class="headerElement">Spread</div>
        <div class="headerElement">O/U</div>
        <div class="headerElement">ML</div>
      </div>
      <div class="team win divider" style="border-left: none; border-top:none; border-right:none;">
        <div class="betteam">${currentGame.away_team}</div>
        <div class="betTeamElement mobileText">${
          awaySpread + "(" + awaySpreadOdds + ")"
        }</div>
        <div class="betTeamElement mobileText">${overValue + "(" + overOdds + ")"}</div>
        <div class="betTeamElement mobileText">${awayMoneyline}</div>
      </div>
      <div class="team lose">
        <div class="betteam">${currentGame.home_team}</div>
        <div class="betTeamElement mobileText">${
          homeSpread + "(" + homeSpreadOdds + ")"
        }</div>
        <div class="betTeamElement mobileText">${underValue + "(" + underOdds + ")"}</div>
        <div class="betTeamElement mobileText">${homeMoneyline}</div>
      </div>`;

  htmlSegment += `
      </div>
    </div>`;

  return htmlSegment;
}

function setValues(currentGame) {
  awaySpread =
    homeSpread =
    homeSpreadOdds =
    awaySpreadOdds =
    awayMoneyline =
    homeMoneyline =
    overValue =
    underValue =
    overOdds =
    underOdds =
      0;

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
