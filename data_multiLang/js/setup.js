//style 
var myCss = {
    root: "sv_main poppins-font",
    container: "sv_container bg-white",
    body:"sv_body border-top-none fs-responsive px-0 pt-0 mb-5",
    header: "sv_header header p-3",
    headerText: "sv_header__text w-100-xs text-center-xs header-text",
    logo:"w-100-xs",
    logoImage: "logo mx-auto-xs",
    footer: "sv_nav px-3 fixed-bottom pb-2 pt-0",
    navigation: {
		start: "btn-red btn-size btn-nav btn-start-info float-end",
        prev:"btn-red btn-size  btn-nav btn-prev float-start",
        next: "btn-red btn-size  btn-nav btn-next float-end",
        complete: "btn-red btn-size btn-nav btn-complete float-end",
	},
    row: "sv_row border-bottom-none",
    page: {
        mainRoot: "sv_q sv_qstn pb-0",
        title: "sv_page_title px-3 pb-3 border-bottom mb-0",
      },
    question: {
        mainRoot: "sv_q sv_qstn pt-0",
    },
    boolean: {
        switch: "sv-boolean__switch bg-red pt-0",
    },
    dropdown: {
        control: "sv_q_dropdown_control border-red-focus bg-grey",
    },
    text: "sv_q_text_root border-red-focus bg-grey",
    progress:"sv_progress mx-3 mt-3",
    progressBar: "sv_progress_bar bg-red",
};

//display no text under progress bar
/*function noProgressText(){
    var locale_array = ['en','de'];
    locale_array.forEach(element => {
        var localizedStrs = Survey.surveyLocalization.locales[element];
        localizedStrs.progressText = "";
    });
};*/
    function noProgressText(){
        var localizedStrs = Survey.surveyLocalization.locales[Survey.surveyLocalization.defaultLocale];
        localizedStrs.progressText = "";
    };
    


// randomize test pages 
function randomizePages(survey) {
    let pages = [];
    survey.pages.forEach(function(page) {
        pages.push(page);
    });
    let randomizationGroups = {};
    let randomizationSpots = {};
    for (let i = 0; i < pages.length; i++) {
        let group = pages[i].randomizationGroup;
        if (typeof group != 'undefined') {
            if (typeof randomizationGroups[group] == 'undefined') {
                randomizationGroups[group] = [];
                randomizationSpots[group] = [];
            }
            randomizationGroups[group].push({
                page: pages[i],
                order: Math.random(),
            });
            randomizationSpots[group].push(i);
        }
    }

    for (let group in randomizationSpots) {
        randomizationGroups[group].sort(function(a, b) {
            // We ignore equal order values
            return a.order < b.order ? -1 : 1;
        });
        randomizationSpots[group].forEach(function(index) {
            pages[index] = randomizationGroups[group].pop().page;
        });
    }
    survey.pages.splice(0, survey.pages.length);
    pages.forEach(function(page) {
        survey.pages.push(page);
    });
    survey.currentPageNo = 0;
};

Survey.Serializer.addProperty('page', 'randomizationGroup');

//collect data
function getAnswers() {
    var questions = survey.getQuizQuestions();
    var correct = 0; 
    var incorrect = 0;
    questions.forEach(function(question) {
        if(question.isAnswerCorrect()){
            correct ++;
        } else {
            incorrect ++;
        };
    });
    return [correct, incorrect];
};

function getPageAnswers(){
    var questions = survey.getQuizQuestions();
    var correct = 0;
    var total = 0;
    var categories = ['General','Phishing','Online Environment','Physical Attacks'];
    var obj = {};
    for(i=0;i<categories.length;i++){
        questions.forEach(function(question){
            var str = String(question.page);
            if(str.indexOf(categories[i])!=-1) {
                total ++;
                if(question.isAnswerCorrect()){
                    correct ++;
                }
            }
        });
        obj[categories[i]] = (correct/total)*100;
        correct = 0;
        total = 0;
    };
    return obj;
};

//encrypt/decrypt
var k = 'TjWnZr4u7xSAnDwG';
function crypto(val,key,dir) {
    switch(dir) {
        case 'encr':
            var encr = CryptoJS.AES.encrypt(val,key);
            return encr.toString();
        case 'decr':
            var decr = CryptoJS.AES.decrypt(val,key);
            return decr.toString(CryptoJS.enc.Utf8);
    };  
};

function decryptAll(crypto_key){
    var questions = survey.getQuizQuestions();
    for(var i = 0; i < questions.length; i ++){
        //multiple choice questions
        if(Array.isArray(questions[i].correctAnswer)){
            var decr_arr = [];
            questions[i].correctAnswer.forEach(function(answer){
                answer = crypto(answer,crypto_key,'decr');
                decr_arr.push(answer);
            })
            questions[i].correctAnswer = decr_arr;
        //single choice questions
        } else {
            questions[i].correctAnswer = crypto(questions[i].correctAnswer,crypto_key,'decr');
        }
    };
}

//get url paramters 
function getURLParams(url_string, param){
    var url = new URL(url_string);
    var x = url.searchParams.get(param);  
    return x;
};

//get result from single page
var result;

function getPageResult(){
    var pageResult = false;
    var total = 0;
    var correct = 0;
    var questions = survey.getQuizQuestions();
    questions.forEach(function(question) {
        if(survey.currentPage === question.page){
            total ++
            if(question.isAnswerCorrect()){
                correct ++;
            }
        };
    });
    if(total > 0 && correct == total){
        var pageResult = (locale == "de") ? 'korrekt' : 'correct';
    }else if(total > 0 && correct != total) {
        var pageResult = (locale == "de") ? 'falsch' : 'incorrect';
    }
    return pageResult;
}

//select from pool of questions
function selectQuestionsFromPool(gen, phis, oe, pa , m){ // gen, phis, oe, pa: number of questions per category; m: number of multiple choice questions 
    //get pages by categories
    var pages_gen = survey.getPagesByNames(['General 1', 'General 2', 'General 3','General 4']);
    var pages_phis = survey.getPagesByNames(['Phishing 1', 'Phishing 2', 'Phishing 3','Phishing 4','Phishing 5','Phishing 6','Phishing 7', 'Phishing 8', 'Phishing 9', 'Phishing 10', 'Phishing 11', 'Phishing 12', 'Phishing 13', 'Phishing 14', 'Phishing 15', 'Phishing 16', 'Phishing 17', 'Phishing 18' ]);
    var pages_oe = survey.getPagesByNames(['Online Environment 1', 'Online Environment 2', 'Online Environment 3','Online Environment 4', 'Online Environment 5', 'Online Environment 6', 'Online Environment 7', 'Online Environment 8', 'Online Environment 9', 'Online Environment 10', 'Online Environment 11', 'Online Environment 12', 'Online Environment 13', 'Online Environment 14', 'Online Environment 15']);
    var pages_pa = survey.getPagesByNames(['Physical Attacks 1', 'Physical Attacks 2', 'Physical Attacks 3','Physical Attacks 4', 'Physical Attacks 5', 'Physical Attacks 6','Physical Attacks 7', 'Physical Attacks 8', 'Physical Attacks 9', 'Physical Attacks 10', 'Physical Attacks 11', 'Physical Attacks 12', 'Physical Attacks 13', 'Physical Attacks 14','Physical Attacks 15','Physical Attacks 16','Physical Attacks 17','Physical Attacks 18','Physical Attacks 19', 'Physical Attacks 20', 'Physical Attacks 21','Physical Attacks 22','Physical Attacks 23','Physical Attacks 24','Physical Attacks 25','Physical Attacks 26']);
    var pages_multiple = survey.getPagesByNames(["Physical Attacks multiple 1", "Phishing Online Environment Physical Attacks multiple 2", "Phishing multiple 3", "Physical Attacks multiple 4"]);

    var categories = [pages_gen,pages_phis, pages_oe, pages_pa, pages_multiple];
    var number = [gen, phis, oe, pa, m];
    
    for (i = 0; i < categories.length; i ++){
        var removedCount = categories[i].length - number[i];
        var index_arr =[];
        for(j = 0; j < removedCount; j ++) {
            do
                var index = Math.floor(Math.random() * categories[i].length);
            while(index_arr.includes(index))
            index_arr.push(index);
            categories[i][index].delete();
        }
    }

}

//load terms and conditions
function loadTandC(){
  //selected survey = terms and conditions
  //multi language support
  if(locale=="en"){
    window.survey = new Survey.Model(json_terms_conditions_en);
  }else{
      window.survey = new Survey.Model(json_terms_conditions_de);
  }
  
  //adjustments needed when terms and conditions displayed
  $('body').attr('onkeydown','return true');
  myCss["row"]="sv_row border-bottom-none bg-white";

  survey.onComplete.add(function (sender){
    //save consent in localstorage
    localStorage.setItem("cyberwareness_terms_and_conditions","agreed");
   
    //send data to server
    var jsonString = JSON.stringify(sender.data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST","./php/visitor.php");
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(jsonString);

    //receive data from server
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var id = this.response;
            localStorage.setItem("cyberwareness_visitor_id",id);
        }
    }
  });
}

//multi language support
//default locale
var locale="en";

if(window.location.hash){
  //if selected language is German
  if(window.location.hash === "#de"){
    //set german locale
    locale = "de";
    //display german flag  (language button in navbar)
    var langBtn = document.getElementById("lang-btn");
    langBtn.src = "../img/german-flag.png";
    
    //href: redirecting to german page
    var logo = document.getElementById("logo");
    logo.setAttribute("href","../index.html#de");
    var nav_info = document.getElementById("nav_info");
    nav_info.setAttribute("href","info.html#de");
    var nav_test = document.getElementById("nav_test");
    nav_test.setAttribute("href","test.html#de");

  }
}

//reload page after changing language
function load(hashVar){
    window.location.hash = hashVar;
    location.reload();
  }