/*function changeTime() {
    let m = document.getElementById('minute').innerText;
    let s = document.getElementById('second').innerText;

    if (!(s<1 && m<1)) {
        if (s<1) { m-=1; s=59; }
        else { s-=1; }
        if (m < 10) m = "0" + m;
        if (s < 10) s = "0" + s;
        /!*htmlTime.innerHTML = m + ":" + s;*!/
        document.getElementById('minute').innerText = m;
        document.getElementById('second').innerText = s;
    } else {
        clearInterval(matchTimer);
        document.getElementById('minute').innerText = "Матч";
        document.getElementById('second').innerText = "окончен";
    }
}

var matchTimer = setTimeout(changeTime(),1000);*/
function startTimer() {
   /* var my_timer = document.getElementById("my_timer");*/
    //var hour = document.getElementById("hour").innerHTML;
    var min = document.getElementById("minute").innerHTML;
    var sec = document.getElementById("second").innerHTML;
   /* var time = my_timer.innerHTML;
    var arr = time.split(":");*/
   // var h = hour;
    var m = min;
    var s = sec;
    if (s == 0) {
        if (m == 0) {
                alert("Время вышло");
                window.location.reload();
                return;
        }
        m--;
        if (m < 10) m = "0" + m;
        s = 59;
    }
    else s--;
    if (s < 10) s = "0" + s;
    //document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
    //document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s;

    //setInterval(startTimer, 1000);
    //setTimeout(startTimer, 1000);
}


// clearInterval(startTimer());
var but;
var startstop = document.getElementById("startstop");
startstop.addEventListener('click', StopStart);
function StopStart() {
    if (startstop.value == "Стоп") {
        startstop.value = "Старт";
        clearInterval(but);
    } else {
        startstop.value = "Стоп";
        but = setInterval(startTimer, 1000);
    }
}


let players = createPlArr();//  данные для вывода в таблицу
function createPlArr() {
    let arr = [];
    for (let i = 0; i < 28; i++){
        arr.push(
            {
                id: i,
                name: "Какое-то имя",
                role: "Амплуа",
                phone: "№",
                position: "К"
            }
        )
    }
    return arr;
}

//console.log(users);

function createTable (usersData, tableID) {
    let tab = document.getElementById (tableID);
    tab.classList.add('tab');

    for (i = 0; i < usersData.length; i++)
    {
        trow =  tab.insertRow ();
        for (key in usersData[i]) {
            let cell = trow.insertCell ();
            cell.innerHTML = usersData[i][key];
        }
    }

}
tableID1 = 'team1';
tableID2 = 'team2';
createTable(players, tableID1);
createTable(players, tableID2);


/*createlist(players, 'listteam2');*/

function AddStat(s1, s2, rs1, rs2, fm1, fm2) {
    let shots1 = Math.floor(s1*100/(s1+s2));
    let shots2 = Math.floor(s2*100/(s1+s2));
    new Chartist.Pie('#chart1', {
        series: [shots1, shots2]
    }, {
        startAngle: 0,
        total: shots1+shots2,
        donut: true,
        donutWidth: 20,
        donutSolid: true,
        showLabel: false

    });
    new Chartist.Pie('#chart2', {
        series: [rs1, rs2]
    }, {
        startAngle: 0,
        donut: true,
        donutWidth: 20,
        donutSolid: true,
        showLabel: false,
        total: rs1+rs2

    });
    new Chartist.Pie('#chart3', {
        series: [fm1, fm2]
    }, {
        startAngle: 0,
        donut: true,
        donutWidth: 20,
        donutSolid: true,
        showLabel: false,
        total: fm1+fm2

    });
/*    let stat1 = document.getElementById("shots");
    let stat2 = document.getElementById("refshots");
    let stat3 = document.getElementById("fminutes");
    console.log(stat1);
    let statg = document.createElement('p');
    statg.innerHTML = 'Голы '+ g;
    let statp = document.createElement('p');
    statp.innerHTML = 'Передачи '+ p;
    statg.classList.add("sts");
    statp.classList.add("sts");
    stat1.appendChild(statg);
    stat2.appendChild(statp);*/
}

AddStat(23, 12, 95, 96, 12, 10);


