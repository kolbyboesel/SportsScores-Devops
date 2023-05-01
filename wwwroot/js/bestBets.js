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
  let html = `<div class="bestBetHeader"><div class="headerText"> Pick Your Bets Based on AI Data!</div></div>`;


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

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

async function showMLBBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();
  let html = `<div class="bestBetHeader"><div class="headerText"> Pick Your Bets Based on AI Data!</div></div>`;


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

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

async function showNFLBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();
  let html = `<div class="bestBetHeader"><div class="headerText"> Pick Your Bets Based on AI Data!</div></div>`;


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

  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

async function showNHLBets() {
  let currentDate = getCurrentDate();
  let nextDay = getDatePlusOne();
  
  let html = `<div class="bestBetHeader"><div class="headerText"> Pick Your Bets Based on AI Data!</div></div>`;

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
  let container = document.querySelector(".AccountContainer");
  container.innerHTML = html;
}

function round(value) {
  let temp = Math.ceil(value * 100) / 100;
  let returnValue = temp.toString().substring(0,4);
  returnValue = returnValue * 100;
  let newVal = returnValue.toString().substring(0,2);
  return newVal;
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
      homeMoneylineVal = round(currentGame.rank_htw_nt, 2);
      awayMoneylineVal = round(currentGame.rank_atw_nt, 2);
      firstOver = round(currentGame.rank_to_65_nt, 2);
      secondOver = round(currentGame.rank_to_75_nt, 2);
      thirdOver = round(currentGame.rank_to_85_nt, 2);
      fourthOver = round(currentGame.rank_to_95_nt, 2);
      fifthOver = round(currentGame.rank_to_105_nt, 2);
      html += generateMLBBestBetsBoard(
        currentGame,
        homeTeam,
        awayTeam,
        homeMoneylineVal,
        awayMoneylineVal,
        firstOver,
        secondOver,
        thirdOver,
        fourthOver,
        fifthOver
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
      firstOver = round(currentGame.rank_to_35_nt, 2);
      secondOver = round(currentGame.rank_to_45_nt, 2);
      thirdOver = round(currentGame.rank_to_55_nt, 2);
      fourthOver = round(currentGame.rank_to_65_nt, 2);
      fifthOver = round(currentGame.rank_to_75_nt, 2);
      html += generateNHLBestBetsBoard(
        currentGame,
        homeTeam,
        awayTeam,
        homeMoneylineVal,
        awayMoneylineVal,
        firstOver,
        secondOver,
        thirdOver,
        fourthOver,
        fifthOver
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
      firstOver = round(currentGame.rank_to_lvl1_nt, 2);
      secondOver = round(currentGame.rank_to_lvl2_nt, 2);
      thirdOver = round(currentGame.rank_to_lvl3_nt, 2);
      fourthOver = round(currentGame.rank_to_lvl4_nt, 2);
      fifthOver = round(currentGame.rank_to_lvl5_nt, 2);
      html += generateNBABestBetsBoard(
        currentGame,
        homeTeam,
        awayTeam,
        homeMoneylineVal,
        awayMoneylineVal,
        firstOver,
        secondOver,
        thirdOver,
        fourthOver,
        fifthOver
      );
    }
  });
  return html;
}

function generateNBABestBetsBoard(
  currentGame,
  homeTeam,
  awayTeam,
  homeMoneylineVal,
  awayMoneylineVal,
  firstOver,
  secondOver,
  thirdOver,
  fourthOver,
  fifthOver
) {
  let htmlSegment = `<div class="outerBestBets mobileScreen"><div class="bestBets">`;

  htmlSegment += `<div class="header" style="height:12.5%">
        <div class="headerElement-team">Team Name</div>
        <div class="headerElement-best">Moneyline</div>
      </div>
      <div class="team divider" style="border-left: none; border-top:none; border-right:none; height:25%">
        <div class="bestBetTeam">${awayTeam}</div>
        <div class="bestBetElement">${awayMoneylineVal}%</div>
      </div>
     
      <div class="team" style="height:25%">
        <div class="bestBetTeam">${homeTeam}</div>
        <div class="bestBetElement">${homeMoneylineVal}%</div>
      </div>
      
      <div class="header" style="height:17.5%">
        <div class="headerElement-over">Over 197.5</div>
        <div class="headerElement-over">Over 205.5</div>
        <div class="headerElement-over">Over 213.5</div>
        <div class="headerElement-over">Over 221.5</div>
        <div class="headerElement-over">Over 229.5</div>
      </div>
      
      <div class="team" style="height:20%">
        <div class="bestBetOver">${firstOver}%</div>
        <div class="bestBetOver">${secondOver}%</div>
        <div class="bestBetOver">${thirdOver}%</div>
        <div class="bestBetOver">${fourthOver}%</div>
        <div class="bestBetOver">${fifthOver}%</div>

      </div>`;

  htmlSegment += `
      </div>
    </div>`;

  return htmlSegment;
}

function generateMLBBestBetsBoard(
  currentGame,
  homeTeam,
  awayTeam,
  homeMoneylineVal,
  awayMoneylineVal,
  firstOver,
  secondOver,
  thirdOver,
  fourthOver
) {
  let htmlSegment = `<div class="outerBestBets mobileScreen"><div class="bestBets">`;

  htmlSegment += `<div class="header" style="height:12.5%">
        <div class="headerElement-team">Team Name</div>
        <div class="headerElement-best">Moneyline</div>
      </div>
      <div class="team divider" style="border-left: none; border-top:none; border-right:none; height:25%"">
        <div class="bestBetTeam">${awayTeam}</div>
        <div class="bestBetElement">${awayMoneylineVal}%</div>
      </div>
     
      <div class="team" style="height:25%">
        <div class="bestBetTeam">${homeTeam}</div>
        <div class="bestBetElement">${homeMoneylineVal}%</div>
      </div> 

      <div class="header" style="height:17.5%">
      <div class="headerElement-over">Over 6.5</div>
      <div class="headerElement-over">Over 7.5</div>
      <div class="headerElement-over">Over 8.5</div>
      <div class="headerElement-over">Over 9.5</div>
      <div class="headerElement-over">Over 10.5</div>
      </div>
      
      <div class="team" style="height:20%">
        <div class="bestBetOver">${firstOver}%</div>
        <div class="bestBetOver">${secondOver}%</div>
        <div class="bestBetOver">${thirdOver}%</div>
        <div class="bestBetOver">${fourthOver}%</div>
        <div class="bestBetOver">${fifthOver}%</div>

      </div>`;

  htmlSegment += `
      </div>
    </div>`;

  return htmlSegment;
}

function generateNHLBestBetsBoard(
  currentGame,
  homeTeam,
  awayTeam,
  homeMoneylineVal,
  awayMoneylineVal,
  firstOver,
  secondOver,
  thirdOver,
  fourthOver
) {
  let htmlSegment = `<div class="outerBestBets mobileScreen"><div class="bestBets">`;

  htmlSegment += `<div class="header" style="height:12.5%">
        <div class="headerElement-team">Team Name</div>
        <div class="headerElement-best">Moneyline</div>
      </div>
      <div class="team divider" style="border-left: none; border-top:none; border-right:none; height:25%"">
        <div class="bestBetTeam">${awayTeam}</div>
        <div class="bestBetElement">${awayMoneylineVal}%</div>
      </div>
     
      <div class="team" style="height:25%">
        <div class="bestBetTeam">${homeTeam}</div>
        <div class="bestBetElement">${homeMoneylineVal}%</div>
      </div> 
      
    <div class="header" style="height:17.5%">
      <div class="headerElement-over">Over 3.5</div>
      <div class="headerElement-over">Over 4.5</div>
      <div class="headerElement-over">Over 5.5</div>
      <div class="headerElement-over">Over 6.5</div>
      <div class="headerElement-over">Over 7.5</div>
    </div>
    
    <div class="team" style="height:20%">
      <div class="bestBetOver">${firstOver}%</div>
      <div class="bestBetOver">${secondOver}%</div>
      <div class="bestBetOver">${thirdOver}%</div>
      <div class="bestBetOver">${fourthOver}%</div>
      <div class="bestBetOver">${fifthOver}%</div>

    </div>`;

  htmlSegment += `
      </div>
    </div>`;

  return htmlSegment;
}