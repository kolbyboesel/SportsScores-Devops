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

function getEventDay(epochTIS) {
  let milliseconds = epochTIS * 1000;
  let date = new Date(milliseconds);
  date.setHours(date.getHours() - 5);
  return date.getDate();
}

function getCurrentDay() {
  let currentDate = new Date();
  currentDate.setHours(currentDate.getHours() - 5);
  return currentDate.getDate();
}

function getCurrentDate() {
  let currentDate = new Date();
  currentDate.setHours(currentDate.getHours() - 5);
  let date = currentDate.toISOString();
  date = date.substring(0, 10);
  return date;
}

function getDatePlusOne() {
  let currentDate = new Date();
  currentDate.setHours(currentDate.getHours() - 5);
  currentDate.setDate(currentDate.getDate() + 1);
  let date = currentDate.toISOString();
  date = date.substring(0, 10);
  return date;
}

async function showNBABets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();
  let html = `<div class="bestBetHeader"><div class="headerText"> Pick Your Moneyline Bets Based on AI Data!</div></div>`;


  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/basketball/" + currentDate
    ),
    "containerNBA"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/basketball/" + nextDay
    ),
    "containerNBA"
  );

  let container = document.querySelector(".containerNBA");
  container.innerHTML = html;
}

async function showMLBBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();
  let html = `<div class="bestBetHeader"><div class="headerText"> Pick Your Moneyline Bets Based on AI Data!</div></div>`;


  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/baseball/" + currentDate
    ),
    "containerMLB"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/baseball/" + nextDay
    ),
    "containerMLB"
  );

  let container = document.querySelector(".containerMLB");
  container.innerHTML = html;
}

async function showNFLBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();
  let html = `<div class="bestBetHeader"><div class="headerText"> Pick Your Moneyline Bets Based on AI Data!</div></div>`;


  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/football/" + currentDate
    ),
    "containerNFL"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/football/" + nextDay
    ),
    "containerNFL"
  );

  let container = document.querySelector(".containerNFL");
  container.innerHTML = html;
}

async function showNHLBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();
  clear("containerNHL");
  let html = `<div class="bestBetHeader"><div class="headerText"> Pick Your Moneyline Bets Based on AI Data!</div></div>`;

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + currentDate
    ),
    "containerNHL"
  );

  html += buildBestBetBoard(
    await getBetData(
      "https://betigolo-predictions.p.rapidapi.com/icehockey/" + nextDay
    ),
    "containerNHL"
  );
  let container = document.querySelector(".containerNHL");
  container.innerHTML = html;
}

function round(value) {
  let temp = Math.round(value * 100) / 100;
  let returnValue = String(temp).slice(0, 4);
  return returnValue;
}

function buildBestBetBoard(allOdds, containerName) {
  let html = "";
  allOdds.forEach((currentGame) => {
    let homeTeam = 0;
    let awayTeam = 0;
    let homeMoneylineVal = 0;
    let awayMoneylineVal = 0;
    let currentLeague = currentGame.league_name;
    let currentDay = getCurrentDay();
    let eventDay = getEventDay(currentGame.match_dat);
    if (
      containerName === "containerMLB" &&
      currentGame.country_name === "USA" &&
      currentLeague === "MLB" &&
      currentDay === eventDay
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
    if (
      containerName === "containerNHL" &&
      currentGame.country_name === "USA" &&
      currentLeague === "NHL" &&
      currentDay === eventDay
    ) {
      homeTeam = currentGame.home_team_name;
      awayTeam = currentGame.away_team_name;
      homeMoneylineVal = round(currentGame.rank_htw_nt, 2);
      awayMoneylineVal = round(currentGame.rank_atw_nt, 2);
      html += generateBestBetsBoard(
        currentGame,
        homeTeam,
        awayTeam,
        homeMoneylineVal,
        awayMoneylineVal
      );
    }

    if (
      containerName != "containerNHL" &&
      containerName != "containerMLB" &&
      currentGame.country_name === "USA" &&
      currentDay === eventDay
    ) {
      homeTeam = currentGame.home_team_name;
      awayTeam = currentGame.away_team_name;
      homeMoneylineVal = round(currentGame.rank_htw_nt, 2);
      awayMoneylineVal = round(currentGame.rank_atw_nt, 2);
      html += generateBestBetsBoard(
        currentGame,
        homeTeam,
        awayTeam,
        homeMoneylineVal,
        awayMoneylineVal
      );
    }
  });
  return html;
}

function generateBestBetsBoard(
  currentGame,
  homeTeam,
  awayTeam,
  homeMoneylineVal,
  awayMoneylineVal
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