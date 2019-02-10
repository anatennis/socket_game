/*function putResult(team, res) {

   team.innerHTML = result1;
}

let result1=0;
let result2=0;*/

var countOfFieldsteam1 = 0; // Текущее число полей
var countOfFieldsteam2 = 0; // Текущее число полей
var curFieldNameIdteam1 = 1; // Уникальное значение для атрибута name
var curFieldNameIdteam2 = 1; // Уникальное значение для атрибута name
var maxFieldLimit = 25; // Максимальное число возможных полей
function deleteFieldteam1(a) {
        if (countOfFieldsteam1 > 0)
        {
            var contDiv = a.parentNode;
            contDiv.parentNode.removeChild(contDiv);
            countOfFieldsteam1--;
            let res = document.getElementById('res1');
            res.innerHTML = countOfFieldsteam1;
        }
    // Возвращаем false, чтобы не было перехода по сслыке
    return false;
}
function deleteFieldteam2(a) {
    if (countOfFieldsteam2 > 0)
    {
        var contDiv = a.parentNode;
        contDiv.parentNode.removeChild(contDiv);
        countOfFieldsteam2--;
        let res = document.getElementById('res2');
        res.innerHTML = countOfFieldsteam2;
    }
    return false;
}

function addFieldteam1() {
    /*if (countOfFields >= maxFieldLimit) {
        alert("Число полей достигло своего максимума = " + maxFieldLimit);
        return false;
    }*/
    var div = document.createElement("div");
    div.classList.add('flex-1');
    div.classList.add('goal');
    countOfFieldsteam1++;
    curFieldNameIdteam1++;

    let res = document.getElementById('res1');
    res.innerHTML = countOfFieldsteam1;
    let min = document.getElementById("minute").innerHTML;
    let sec = document.getElementById("second").innerHTML;

    div.innerHTML = "<nobr>" +
        "<div class=\"numofgoal\">#" +countOfFieldsteam1+ "</div>"+
        "<select size=\"1\" name=\"type[" + curFieldNameIdteam1 + "]\" style=\"width:17%;\" id=\"team1goal"+ curFieldNameIdteam1 +"\">" +
        "<option value=\"text\">--гол--</option>" + "</select>" +
        "<select size=\"1\" name=\"type[" + curFieldNameIdteam1 + "]\" style=\"width:17%;\" id=\"team1assist"+ curFieldNameIdteam1 +"\">" +
        "<option value=\"text\">--ассистент1--</option>" + "</select>" +
        "<select size=\"1\" name=\"type[" + curFieldNameIdteam1 + "]\" style=\"width:17%;\" id=\"team1assist2"+ curFieldNameIdteam1 +"\">" +
        //вставка списка из базы??
        "<option value=\"text\">--ассистент2--</option>"
        + "</select>" +
        "<div class=\"timeofgoal\" id=\"timeteam1goal"+ curFieldNameIdteam1 +"\">"+min+":"+sec+"</div>"+
        "<select size=\"1\" name=\"type[" + curFieldNameIdteam1 + "]\" style=\"width:7%;\" id=\"team1powplay"+ curFieldNameIdteam1 +"\">" +
        "<option value=\"text\">-2</option>" +
        "<option value=\"text\">-1</option>" +
        "<option value=\"text\" selected>0</option>" +
        "<option value=\"text\">+1</option>" +
        "<option value=\"text\">+2</option>" +
        "</select>" +
        "<a style=\"color:red;\" onclick=\"return deleteFieldteam1(this)\" href=\"#\">[—]</a> " +
        "<a style=\"color:green;\" onclick=\"return addFieldteam1()\" href=\"#\">[+]</a></nobr>";

        document.getElementById('goalsteam1').appendChild(div);


    return false;
}


function addFieldteam2() {
    var div = document.createElement("div");
    div.classList.add('flex-1');
    div.classList.add('goal');
    countOfFieldsteam2++;
    curFieldNameIdteam2++;
    let res = document.getElementById('res2');
    res.innerHTML = countOfFieldsteam2;
    let min = document.getElementById("minute").innerHTML;
    let sec = document.getElementById("second").innerHTML;

    div.innerHTML = "<nobr>" +
        "<div class=\"numofgoal\">#" +countOfFieldsteam2+ "</div>"+
        "<select size=\"1\" name=\"type[" + curFieldNameIdteam2 + "]\" style=\"width:17%;\" id=\"team2goal"+ curFieldNameIdteam2 +"\">" +
        "<option value=\"text\">--гол--</option>" + "</select>" +
        "<select size=\"1\" name=\"type[" + curFieldNameIdteam2 + "]\" style=\"width:17%;\" id=\"team2assist"+ curFieldNameIdteam2 +"\">" +
        "<option value=\"text\">--ассистент1--</option>" + "</select>" +
        "<select size=\"1\" name=\"type[" + curFieldNameIdteam2 + "]\" style=\"width:17%;\" id=\"team2assist2"+ curFieldNameIdteam2 +"\">" +
        //вставка списка из базы??
        "<option value=\"text\">--ассистент2--</option>"
        + "</select>" +
        "<div class=\"timeofgoal\" id=\"timeteam2goal"+ curFieldNameIdteam2 +"\">"+min+":"+sec+"</div>"+
        "<select size=\"1\" name=\"type[" + curFieldNameIdteam2 + "]\" style=\"width:7%;\" id=\"team2powplay"+ curFieldNameIdteam2 +"\">" +
        "<option value=\"text\">-2</option>" +
        "<option value=\"text\">-1</option>" +
        "<option value=\"text\" selected>0</option>" +
        "<option value=\"text\">+1</option>" +
        "<option value=\"text\">+2</option>" +
        "</select>" +
        "<a style=\"color:red;\" onclick=\"return deleteFieldteam2(this)\" href=\"#\">[—]</a> " +
        "<a style=\"color:green;\" onclick=\"return addFieldteam2()\" href=\"#\">[+]</a></nobr>";

    document.getElementById('goalsteam2').appendChild(div);

    return false;
}

let countoffallsteam1 = 0;
let countoffallsteam2 = 0;
var curFallNameIdteam1 = 0; // Уникальное значение для атрибута name
var curFallNameIdteam2 = 0;

function deleteFallteam1(a) {

        var contDiv = a.parentNode;
        contDiv.parentNode.removeChild(contDiv);
        countoffallsteam1--;
        curFallNameIdteam1--;

    // Возвращаем false, чтобы не было перехода по сслыке
    return false;
}
function deleteFallteam2(a) {

        var contDiv = a.parentNode;
        contDiv.parentNode.removeChild(contDiv);
        countoffallsteam2--;
        curFallNameIdteam2--;

    return false;
}

function addFallteam1() {
    /*if (countOfFields >= maxFieldLimit) {
        alert("Число полей достигло своего максимума = " + maxFieldLimit);
        return false;
    }*/
    countoffallsteam1+=1;
    curFallNameIdteam1+=1;
    var div = document.createElement("div");
    div.classList.add('flex-1');
    div.classList.add('goal');

    let min = document.getElementById("minute").innerHTML;
    let sec = document.getElementById("second").innerHTML;

    div.innerHTML = "<nobr>" +
        "<div class=\"numofgoal\">#" +countoffallsteam1+ "</div>"+
        "<select size=\"1\" name=\"type[" + curFallNameIdteam1 + "]\" style=\"width:20%;\" id=\"team1fall"+ curFallNameIdteam1 +"\">" +
        "<option value=\"text\">--удаленный--</option>" + "</select>" +
        "<select size=\"1\" name=\"type[" + curFallNameIdteam1 + "]\" style=\"width:20%;\" id=\"team1falltype"+ curFallNameIdteam1 +"\">" +
        "<option value=\"text\">--тип удаления--</option>" + "</select>" +
        "<select size=\"1\" name=\"type[" + curFallNameIdteam1 + "]\" style=\"width:20%;\" id=\"team1falldur"+ curFallNameIdteam1 +"\">" +
        "<option value=\"text\">--длит-ть--</option>" + "</select>" +
        "<div class=\"timeofgoal\" id=\"team1falltime"+ curFallNameIdteam1 +"\">"+min+":"+sec+"</div>"+
        "<a style=\"color:red;\" onclick=\"return deleteFallteam1(this)\" href=\"#\">[—]</a> " +
        "<a style=\"color:green;\" onclick=\"return addFallteam1()\" href=\"#\">[+]</a></nobr>";

    document.getElementById('fallsteam1').appendChild(div);


    return false;
}


function addFallteam2() {
    countoffallsteam2++;
    curFallNameIdteam2++;
    var div = document.createElement("div");
    div.classList.add('flex-1');
    div.classList.add('goal');
    let min = document.getElementById("minute").innerHTML;
    let sec = document.getElementById("second").innerHTML;

    div.innerHTML = "<nobr>" +
        "<div class=\"numofgoal\">#" +countoffallsteam2+ "</div>"+
        "<select size=\"1\" name=\"type[" + curFallNameIdteam2 + "]\" style=\"width:20%;\" id=\"team2fall"+ curFallNameIdteam2 +"\">" +
        "<option value=\"text\">--удаленный--</option>" + "</select>" +
        "<select size=\"1\" name=\"type[" + curFallNameIdteam2 + "]\" style=\"width:20%;\" id=\"team2falltype"+ curFallNameIdteam2 +"\">" +
        "<option value=\"text\">--тип удаления--</option>" + "</select>" +
        "<select size=\"1\" name=\"type[" + curFallNameIdteam2 + "]\" style=\"width:20%;\" id=\"team2falldur"+ curFallNameIdteam2 +"\">" +
        "<option value=\"text\">--длит-ть--</option>" + "</select>" +
        "<div class=\"timeofgoal\" id=\"team2falltime"+ curFallNameIdteam2 +"\">"+min+":"+sec+"</div>"+
        "<a style=\"color:red;\" onclick=\"return deleteFallteam2(this)\" href=\"#\">[—]</a> " +
        "<a style=\"color:green;\" onclick=\"return addFallteam2()\" href=\"#\">[+]</a></nobr>";

    document.getElementById('fallsteam2').appendChild(div);

    return false;
}