// let BTN_TO_MASCOT_PAGE,
// BTN_TO_RELIGION_PAGE,
// BTN_SUBMIT_REGISTRATION;

// BTN_TO_MASCOT_PAGE =  document.getElementById("btn_to_mascot_page");
// BTN_TO_RELIGION_PAGE = document.getElementById("btn_to_religion_page");
// BTN_SUBMIT_REGISTRATION = document.getElementById("btn_submit_registration");
// /*
// var index_form = document.getElementsById("form_registration"),
// mascot_form = document.getElementsById("form_choose_mascot"),
// choose_religion_challenge_form = document.getElementsById("form_choose_religion_challenge");*/

// BTN_TO_MASCOT_PAGE.addEventListener("click", function(){
//    //check Formvalidation
// });

// BTN_SUBMIT_REGISTRATION.addEventListener("click", function(){
//     console.log("ddfdf");
//     // let EMail = document.getElementsById("input_email"),
//     // religion = options[document.getElementsById("select_religion").selectedIndex].value,
//     // challenge_days = options[document.getElementsById("select_challenge_days")].value,
//     // div_information = document.getElementsById("informations");

//     // div_information.innerHTML = "E-Mail: " + EMail.value + "/n" + "religion: " + religion + "/n" + "challenge day: " + challenge_days;

    
// });
var input_username, input_email, input_password, input_address, 
selectedChallengeDays, challengeDays = 1, day_img,
changeImgInterval, selected_mascot; 

function saveRegistrationData(){
    input_username = document.getElementById("input_name").value;
    input_email = document.getElementById("input_email").value;
    input_password = document.getElementById("input_password").value;
    input_address = document.getElementById("input_address").value;

    data={username:input_username,email:input_email,password:input_password,address:input_address};
    fetch('http://127.0.0.1:5000/',{
        method: 'POST',
        body: JSON.stringify(data),
    }).then(response => response.json()).catch((error) => {
        console.error('Error:', error);
    });
}

function chooseTeam(){
    if(document.getElementById('avatar').checked){team_name = document.getElementById('avatar').value;}
    else{team_name = document.getElementById('fu').value;}

        data={team:team_name};
    fetch('http://127.0.0.1:5000/team',{
        method: 'POST',
        body: JSON.stringify(data),
    }).then(response => response.json()).catch((error) => {
        console.error('Error:', error);
    });
}
function choose_program(){
if(document.getElementById('1').checked){
value=1}
else if(document.getElementById('2').checked){
value=2}
else {
value=3}
data={value_input:value}
fetch('http://127.0.0.1:5000/program',{
        method: 'POST',
        body: JSON.stringify(data),
    }).then(response => response.json()).catch((error) => {
        console.error('Error:', error);
    });


}


// function showInChallenge(){
//     console.log("mkmk");
//     document.getElementById("mascotLevel").className = "d-none";
//     document.getElementById("inChallengeDiv").className = "";
//     document.getElementById("dailyQuestionDiv").className = "d-none";
// }

// function showDailyQuestion(){
//     console.log("mkmdddddk");
//     //hide challengeDiv, show dailyQuestionDiv
//     document.getElementById("mascotLevel").className = "";
//     document.getElementById("inChallengeDiv").className = "d-none";
//     document.getElementById("dailyQuestionDiv").className = "d-none";
// }

// function challengeDayAddOne(){
//     console.log("mkmk333333333333");
//     //show challengeDiv, hide dailyQuestionDiv
//     document.getElementById("mascotLevel").className = "d-none";
//     document.getElementById("inChallengeDiv").className = "d-none";
//     document.getElementById("dailyQuestionDiv").className = "";

//     changeImg();

//        data={team:team_name};
//     fetch('http://127.0.0.1:5000/increment',{
//         method: 'POST',
//         body: JSON.stringify(data),
//     }).then(response => response.json()).then(data => {console.log(data)}).catch((error) => {
//         console.error('Error:', error);
//     });
// }

// function changeImg(){
//     day_img = document.getElementById("day-img");
//     challengeDays++;
//     console.log(challengeDays);
//     day_img.src = "../img/test_number_"+challengeDays+".png";
// }

// function showInChallenge(){
//     //if mascot value = 1, avatar
// }
function showRegistration(){
    document.getElementById("welcomeDiv").classList.add("d-none");
    document.getElementById("form_registration").classList.remove("d-none");
}

function initMainPage(){
    let div_mascot_level = document.getElementById("mascotLevel"),
    div_inChallenge = document.getElementById("inChallengeDiv"),
    div_daily_question = document.getElementById("dailyQuestionDiv"),
    btn_show_challenge = document.getElementById("btn_show_challenge"),
    btn_emergency = document.getElementById("btn_emergencys"),
    btn_next_day = document.getElementById("btn_next_day"),
    btn_continue_challenge = document.getElementById("btn_continue_challenge"),
    btn_stop_challenge = document.getElementById("btn_stop_challenge"),
    day_img = document.getElementById("day-img");

    hideDiv(div_inChallenge);
    hideDiv(div_daily_question);

    btn_show_challenge.addEventListener("click", function(){
        showDiv(div_inChallenge);
        hideDiv(div_mascot_level);
    });
    btn_next_day.addEventListener("click", function(){
        showDiv(div_daily_question);
        hideDiv(div_inChallenge);
    });
    btn_continue_challenge.addEventListener("click", function(){
        showDiv(div_inChallenge);
        hideDiv(div_daily_question);
        changeImg(day_img);
        data={team:team_name};
    fetch('http://127.0.0.1:5000/increment',{
        method: 'POST',
        body: JSON.stringify(data),
    }).then(response => response.json()).then(data => {console.log(data)}).catch((error) => {
        console.error('Error:', error);
    });
    });
}

function showDiv(div){
    div.classList.remove("d-none");
}

function hideDiv(div){
    div.classList.add("d-none");
}

function changeImg(img){
    challengeDays++;
    img.src = "../static/test_number_"+challengeDays+".png";
}