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
}

//Funktion auto change Img
// function startChallengeProgram(){
//     console.log(input_username, input_email, input_password, input_address);
//     day_img = document.getElementById("day-img");
//     selectedChallengeDays = 3, interval = 3000;
//     changeImgInterval = setInterval(changeImg, interval);
// }
// function changeImg(){
//     challengeDays++;
//     day_img.src = "../img/test_number_"+challengeDays+".png";
//     if(challengeDays === selectedChallengeDays){
//         clearInterval(changeImgInterval);
//     }
// }

function showInChallenge(){
    console.log("mkmk");
    document.getElementById("mascotLevel").className = "d-none";
    document.getElementById("inChallengeDiv").className = "";
    document.getElementById("dailyQuestionDiv").className = "d-none";
}

function showDailyQuestion(){
    console.log("mkmdddddk");
    //hide challengeDiv, show dailyQuestionDiv
    document.getElementById("mascotLevel").className = "";
    document.getElementById("inChallengeDiv").className = "d-none";
    document.getElementById("dailyQuestionDiv").className = "d-none";
}

function challengeDayAddOne(){
    console.log("mkmk333333333333");
    //show challengeDiv, hide dailyQuestionDiv
    document.getElementById("mascotLevel").className = "d-none";
    document.getElementById("inChallengeDiv").className = "d-none";
    document.getElementById("dailyQuestionDiv").className = "";

    changeImg();
}

function changeImg(){
    day_img = document.getElementById("day-img");
    challengeDays++;
    console.log(challengeDays);
    day_img.src = "../img/test_number_"+challengeDays+".png";
}

function showInChallenge(){
    //if mascot value = 1, avatar
}