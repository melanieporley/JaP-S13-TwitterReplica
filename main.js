const url = "https://my-json-server.typicode.com/melanieporley/database/posts";
const tweetsList = document.getElementById('tweetsList');

document.addEventListener('DOMContentLoaded', ()=> {
fetch(url)
.then(res => res.json()
.then(data => showTweets(data))
.catch(error => { 
    console.log('Error:', error)
}) 
)});

function lowerCaseName(string) { 
    return string.toLowerCase();
}

function showTweets(array) { 

    array.forEach(element => {
        let name = element.name;
        let text = element.text;
    
        const tweet = document.createElement("li");
        tweet.classList.add('list-group-item');
        const body =  `
        <div>
        <div class="profile-pic"><img src="https://picsum.photos/10"/></div>
              <div class="content">
                <div class="names">
                  <p class="full-name">${name}</p>
                  <p class="user-name">${lowerCaseName(name)}</p>
                  <p class="time">27mins</p>
                </div>
              </div>
              <div class="tweet-content">
                <p>${text}</p>
              </div>
              <div class="tweet-icons">
                <i class="fa fa-comment" aria-hidden="true"></i>
                <i class="fa fa-heart" aria-hidden="true"></i>
                <i class="fa fa-retweet" aria-hidden="true"></i>
              </div>
              </div>
        `
    tweet.innerHTML += body;
    tweetsList.append(tweet);
    
})};
