'use strict';

let socket = new WebSocket("ws:\\localhost:8080");

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

    let result1 = document.getElementById('result1');
    let result2 = document.getElementById('result2');
    result1.innerHTML = data.res1;
    result2.innerHTML = data.res2;

    let goalsteam1 = document.getElementById('goalsteam1');
    goalsteam1.innerHTML = '';
    let goalsteam2 = document.getElementById('goalsteam2');
    goalsteam2.innerHTML = '';

    for (let i=0; i<data.goalsteam1.length; i++) {
        let div = document.createElement('div');
        div.classList.add('flex-1');
        div.classList.add('goal');
        let g = document.createTextNode('#'+(i+1)+' '+data.goalsteam1[i]+" "+
            data.assistteam1[i]+" "+data.assist2team1[i]+" "+data.timeofgoalteam1[i]+" "+
            data.powplayteam1[i]);
        /*if (data.powplayteam1[i] != 0) {
            g= g+ data.powplayteam1[i];
        }*/

        div.appendChild(g);
        goalsteam1.appendChild(div);
    }
    for (let i=0; i<data.goalsteam2.length; i++) {
        let div = document.createElement('div');
        div.classList.add('flex-1');
        div.classList.add('goal');
        let g = document.createTextNode('#'+(i+1)+' '+data.goalsteam2[i]+" "+
            data.assistteam2[i]+" "+data.assist2team2[i]+" "+data.timeofgoalteam2[i]+" "+
            data.powplayteam2[i]);
        /*if (data.powplayteam1[i] != 0) {
            g= g+ data.powplayteam1[i];
        }*/
        div.appendChild(g);
        goalsteam2.appendChild(div);
    }

    let fallsteam1 = document.getElementById('team1falls');
    fallsteam1.innerHTML = '';
    let fallsteam2 = document.getElementById('team2falls');
    fallsteam2.innerHTML = '';

    for (let i=0; i<data.fallsteam1.length; i++) {
        let div = document.createElement('div');
        div.classList.add('flex-1');
        div.classList.add('goal');
        let f = document.createTextNode('#'+(i+1)+' '+data.fallsteam1[i]+" "+
            data.fallstypeteam1[i]+data.fallsdurteam1[i]+data.fallstimeteam1[i]);
        div.appendChild(f);
        fallsteam1.appendChild(div);
    }
    for (let i=0; i<data.fallsteam2.length; i++) {
        let div = document.createElement('div');
        div.classList.add('flex-1');
        div.classList.add('goal');
        let f = document.createTextNode('#'+(i+1)+' '+data.fallsteam2[i]+" "+
            data.fallstypeteam2[i]+data.fallsdurteam2[i]+data.fallstimeteam2[i]);
        div.appendChild(f);
        fallsteam2.appendChild(div);
    }

};

let form = document.forms.game;
form.addEventListener('submit', addResult);

function addResult(event) {
    event.preventDefault();

    let res1=document.getElementById('res1').innerText;
    let res2=document.getElementById('res2').innerText;

    let goalsteam1 = [];
    let assistteam1 = [];
    let assist2team1 = [];
    let goalsteam2 = [];
    let assistteam2 = [];
    let assist2team2 = [];
    let timeofgoalteam1 = [];
    let timeofgoalteam2 = [];
    let powplayteam1 = [];
    let powplayteam2 = [];

    let fallsteam1 = [];
    let fallsteam2 = [];
    let fallstimeteam1 = [];
    let fallstimeteam2 = [];
    let fallstypeteam1 = [];
    let fallstypeteam2 = [];
    let fallsdurteam1 = [];
    let fallsdurteam2 = [];


    for (let i=0; i<parseInt(res1, 10); i++) {
        getGoals(1, i, goalsteam1, assistteam1, assist2team1, timeofgoalteam1, powplayteam1);
    }
    for (let i=0; i<parseInt(res2, 10); i++) {
        getGoals(2, i, goalsteam2, assistteam2, assist2team2, timeofgoalteam2, powplayteam2);
    }

    for (let i=0; i<countoffallsteam1; i++) {
        getFalls(1, i, fallsteam1, fallstypeteam1, fallsdurteam1, fallstimeteam1);
    }
    for (let i=0; i<countoffallsteam2; i++) {
        getFalls(2, i, fallsteam2, fallstypeteam2, fallsdurteam2, fallstimeteam2);
    }

    let data = {
        'res1': res1,
        'res2': res2,
        'goalsteam1':goalsteam1,
        'goalsteam2':goalsteam2,
        'assistteam1': assistteam1,
        'assistteam2': assistteam2,
        'assist2team1': assist2team1,
        'assist2team2': assist2team2,
        'timeofgoalteam1': timeofgoalteam1,
        'timeofgoalteam2': timeofgoalteam2,
        'powplayteam1':powplayteam1,
        'powplayteam2':powplayteam2,
        'fallsteam1': fallsteam1,
        'fallsteam2': fallsteam2,
        'fallstimeteam1': fallstimeteam1,
        'fallstimeteam2': fallstimeteam2,
        'fallstypeteam1': fallstypeteam1,
        'fallstypeteam2': fallstypeteam2,
        'fallsdurteam1': fallsdurteam1,
        'fallsdurteam2': fallsdurteam2
    };
    socket.send(JSON.stringify(data));
    return;
}

function getGoals(team, i, goals, assist1, assist2, timegoal, powplay) {
    let id1 = "team"+team+"goal"+(i+2);
    let id2 = "team"+team+"assist"+(i+2);
    let id3 = "team"+team+"assist2"+(i+2);
    let id4 = "timeteam"+team+"goal"+(i+2);
    let id5 = "team"+team+"powplay"+(i+2);
    let selectgoal1 = document.getElementById(id1);
    let selectassist1 = document.getElementById(id2);
    let selectassist2 = document.getElementById(id3);
    let timeofgoal = document.getElementById(id4);
    let powerplay = document.getElementById(id5);
    goals.push(selectgoal1.options[selectgoal1.selectedIndex].text);
    assist1.push(selectassist1.options[selectassist1.selectedIndex].text);
    assist2.push(selectassist2.options[selectassist2.selectedIndex].text);
    timegoal.push(timeofgoal.innerText);
    powplay.push(powerplay.options[powerplay.selectedIndex].text);
}

function getFalls(team, i, falls, typeoffalls, duroffalls, timeoffalls) {
    let id1 = "team"+team+"fall"+(i+1);
    let id2 = "team"+team+"falltype"+(i+1);
    let id3 = "team"+team+"falldur"+(i+1);
    let id4 = "team"+team+"falltime"+(i+1);
    let selectfallpl = document.getElementById(id1);
    let selectfalltype = document.getElementById(id2);
    let selectfalldur = document.getElementById(id3);
    let selectfalltime = document.getElementById(id4);
    falls.push(selectfallpl.options[selectfallpl.selectedIndex].text);
    typeoffalls.push(selectfalltype.options[selectfalltype.selectedIndex].text);
    duroffalls.push(selectfalldur.options[selectfalldur.selectedIndex].text);
    timeoffalls.push(selectfalltime.innerText);
}