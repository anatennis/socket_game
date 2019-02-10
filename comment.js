'use strict';

let socket = new WebSocket("ws:\\localhost:8077");

socket.onopen = function () {
    console.log('Connection is stabled');
};

socket.onclose = function (event) {
    console.log('Connection is closed because '+ event.reason + " Event code: " + event.code);
};

socket.onerror = function (event) {
    console.log('Error '+ event.message);
};

socket.onmessage = function (event) {
  console.log("Data from server "+ event.data);
  let data = JSON.parse(event.data);
  let comment_div = document.getElementById('comment_div');

  let div = document.createElement('div');
  let forName = document.createElement('h4');
    let forNameNode = document.createTextNode(data.name);
  forName.appendChild(forNameNode);

  let forText = document.createElement('p');
  let forTextNode = document.createTextNode(data.comment);
  forText.appendChild(forTextNode);

  div.appendChild(forName);
  div.appendChild(forText);

  comment_div.appendChild(div);
};

let form = document.forms.comment;
form.addEventListener('submit', addComment);

function addComment(event) {
    event.preventDefault();
    let name = form.author.value;
    let comment = form.commentText.value;
    let data = {
        'name':name,
        'comment':comment
    };
    socket.send(JSON.stingify(data));
    return;
}