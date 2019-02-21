const button = document.getElementsByClassName('button')[0];
let textArea = document.getElementById('textArea');
//let texAreaValue;
const list = document.getElementById('list');

button.addEventListener('click',function(){
       
    const inputValue = textArea.value;
    let tweets = [];
        
    if (inputValue) {
        //tweetsArray $ let tweetsArray = [inputValue] : tweetsArray.push(inputValue);
        if (localStorage.length===0) {
            tweets.push(inputValue);
            localStorage.setItem('tweets', JSON.stringify(tweets));
        
        } else {
            tweets = JSON.parse(localStorage.getItem('tweets', (tweets)));
            tweets.push(inputValue);
            localStorage.setItem('tweets', JSON.stringify(tweets));
        }
        blanck();
        createTweet(inputValue);
    } else {
        alert(`'You didn't enter any tweet`);
    }

});


const blanck = function(){
    textArea.value='';
}

const createTweet = function(value){
    let listTweet = document.createElement('li');
    let listTweetNode = document.createTextNode(value);
    let newButton = document.createElement('button');
    
    newButton.innerText='X';
    newButton.className='deleteButton';

    listTweet.appendChild(listTweetNode);
    listTweet.appendChild(newButton);
    list.appendChild(listTweet);
    console.log(listTweet);
}



//var node = document.createElement("LI");                 // Create a <li> node
//var textnode = document.createTextNode("Water");         // Create a text node
//node.appendChild(textnode);                              // Append the text to <li>
//document.getElementById("myList").appendChild(node); 