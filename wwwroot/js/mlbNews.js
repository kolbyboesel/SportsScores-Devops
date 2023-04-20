//API KEY-9f3436bf65c47b3988484cb92d3cb3be

const mlbNews = {
  method: "GET",
  url: "https://api.sportsdata.io/v3/mlb/scores/json/News",
  headers: {
    "X-RapidAPI-Key": "7c01195a20mshbc9188a6ca4f5a5p1ce61cjsn5e640810eca6",
    "X-RapidAPI-Host": "nba-latest-news.p.rapidapi.com",
  },
};

async function getMLBNewsData(url) {
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function showMLBNews() {
  buildMLBHomepage(
    await getMLBNewsData(
      "https://api.sportsdata.io/v3/mlb/scores/json/News?key=cfd056f739b1468db12353517381ca4d"
    ),
    "containerMLB"
  );
}

async function buildMLBHomepage(allNews, containerName) {
  clear(containerName);

  let html =
    '<div style="width: 100%; height: 1%; padding-top: 2%; text-align: center; display: inline-block; font-size: 4vh; font-family: Impact, Haettenschweiler, Arial Narrow Bold, sans-serif;">Click Any Of The Boxes Below To View The Latest Stories!</div>';
  allNews.forEach((currentGame) => {
    let newsTitle = currentGame.Title;
    let url = currentGame.Url;
    let src = currentGame.source;
    let img = 0;

    html += generateMLBHomepage(newsTitle, url, img);
  });

  let container = document.querySelector("." + containerName);
  container.innerHTML = html;
}

function generateMLBHomepage(newsTitle, url, img) {
  let htmlSegment = `<a class="sportsLink" href="${url}"><div class="outerNews"><div class="sportsNews"`;

  htmlSegment += `
      <div class="article">
        <div class="sourceLogo"><img class="imageStyle" src="${img}"></img></div>
        <div class="newsTitle">${newsTitle}</div>
      </div>`;
  htmlSegment += `
      </div>
    </div>
    </a>`;

  return htmlSegment;
}
