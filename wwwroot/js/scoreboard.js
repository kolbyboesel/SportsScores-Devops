//API KEY-9f3436bf65c47b3988484cb92d3cb3be

function clear(elementID) {
  let container = document.querySelector("." + elementID);
  container.innerHTML = "";
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7c01195a20mshbc9188a6ca4f5a5p1ce61cjsn5e640810eca6",
    "X-RapidAPI-Host": "odds.p.rapidapi.com",
  },
};

async function getData(url) {
  try {
    let res = await fetch(url, options);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function showNBAScores() {
  buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/basketball_nba/scores?daysFrom=1"
    ),
    "containerNBA"
  );
}

async function showMLBScores() {
  buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores?daysFrom=1"
    ),
    "containerMLB"
  );
}

async function showNFLScores() {
  buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/scores?daysFrom=1"
    ),
    "containerNFL"
  );
}

async function showNHLScores() {
  buildScoreboard(
    await getData(
      "https://odds.p.rapidapi.com/v4/sports/icehockey_nhl/scores?daysFrom=1"
    ),
    "containerNHL"
  );
}

async function buildScoreboard(allScores, containerName) {
  clear(containerName);

  let html = "";
  allScores.forEach((currentScore) => {
    let awayScore = 0;
    let homeScore = 0;

    try {
      let awayScoreRaw = currentScore.scores[1].score;
      let homeScoreRaw = currentScore.scores[0].score;

      awayScoreRaw === null
        ? (awayScore = 0)
        : (awayScore = Number(awayScoreRaw));
      homeScoreRaw === null
        ? (homeScore = 0)
        : (homeScore = Number(homeScoreRaw));
    } catch (error) {
      homeScore = 0;
      awayScore = 0;
    }

    let winningTeam =
      awayScore < homeScore ? currentScore.home_team : currentScore.away_team;
    let completedDate = formatDate(currentScore.commence_time);

    html += generateScoreboard(
      currentScore,
      awayScore,
      homeScore,
      winningTeam,
      completedDate
    );
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

function generateScoreboard(
  currentScore,
  awayScore,
  homeScore,
  winningTeam,
  dateTimeValue
) {
  let htmlSegment = `<div class="outer mobileScreen"><div class="scoreboard">`;
  let gameStatus;

  if (currentScore.completed) {
    gameStatus = "FINAL";
  } else {
    gameStatus = "INP/TBD";
  }

  if (winningTeam === currentScore.away_team) {
    htmlSegment += `<div class="header">
    <div class="headerDate" style="width: 75%; justify-content: left">${dateTimeValue}</div>
    <div class="headerElement" style="width: 5%; justify-content: center; margin: 10%"">${gameStatus}</div>
  </div>
      <div class="team win divider" style="border-left: none; border-top:none; border-right:none;">
        <div class="team">${currentScore.away_team}</div>
        <div class="score">${awayScore}</div>
      </div>
      <div class="team lose">
        <div class="team">${currentScore.home_team}</div>
        <div class="score">${homeScore}</div>
      </div>`;
  } else {
    htmlSegment += `<div class="header">
    <div class="headerDate" style="width: 75%; justify-content: left">${dateTimeValue}</div>
    <div class="headerElement" style="width: 5%; justify-content: center; margin: 10%">${gameStatus}</div>
  </div>
      <div class="team lose divider" style="border-left: none; border-top:none; border-right:none;">
        <div class="team">${currentScore.away_team}</div>
        <div class="score">${awayScore}</div>
      </div>
      <div class="team win">
        <div class="team">${currentScore.home_team}</div>
        <div class="score">${homeScore}</div>
      </div>`;
  }

  htmlSegment += `</div>
  </div>`;

  return htmlSegment;
}
