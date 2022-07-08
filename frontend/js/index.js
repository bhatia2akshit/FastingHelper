let BTN_TO_MASCOT_PAGE,
BTN_TO_RELIGION_PAGE,
BTN_SUBMIT_REGISTRATION;

BTN_TO_MASCOT_PAGE =  document.getElementById("btn_to_mascot_page");
BTN_TO_RELIGION_PAGE = document.getElementById("btn_to_religion_page");
BTN_SUBMIT_REGISTRATION = document.getElementById("btn_submit_registration");
/*
var index_form = document.getElementsById("form_registration"),
mascot_form = document.getElementsById("form_choose_mascot"),
choose_religion_challenge_form = document.getElementsById("form_choose_religion_challenge");*/

BTN_TO_MASCOT_PAGE.addEventListener("click", function(){
   //check Formvalidation
});

BTN_SUBMIT_REGISTRATION.addEventListener("click", function(){
    console.log("ddfdf");
    let EMail = document.getElementsById("input_email"),
    religion = options[document.getElementsById("select_religion").selectedIndex].value,
    challenge_days = options[document.getElementsById("select_challenge_days")].value,
    div_information = document.getElementsById("informations");

    div_information.innerHTML = "E-Mail: " + EMail.value + "/n" + "religion: " + religion + "/n" + "challenge day: " + challenge_days;

    
});

