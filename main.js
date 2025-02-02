const url = "https://my-json-server.typicode.com/melanieporley/database/posts";
const tweetsList = document.querySelector('.feed');

document.addEventListener('DOMContentLoaded', ()=> {
fetch(url)
.then(res => res.json()
.then(data => showTweets(data))
.catch(error => { 
    console.log('Error:', error)
}) 
)});

function lowerCaseName(string) { 
    return string.toLowerCase().replace(/ /g, '_');
}
 
function showTweets(array) { 

    array.forEach(element => {
        let name = element.name;
        let text = element.text;
    
        const tweet = document.createElement("div");
        const body =  `
        <div class="post">
        </div>
        <div class="tweets">
          <div class="profile-pic"><img src="https://picsum.photos/10" /></div>
          <div class="content">
            <div class="names">
              <p class="full-name">${name}</p>
              <p class="user-name">@${lowerCaseName(name)}</p>
              <p class="time"> 27mins</p>
            </div>
          </div>
          <div class="tweet-content">
            <p>${text}</p>
          </div><br>
          <div class="tweet-icons">
            <i class="fa fa-comment" aria-hidden="true"></i>
            <i class="fa fa-heart" aria-hidden="true"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
          </div>
        </div>
      </div>
        `
    tweet.innerHTML += body;
    tweetsList.appendChild(tweet);
    
})};
