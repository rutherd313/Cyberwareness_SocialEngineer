//-------------------- Terms and Conditons -------------------------------------
if(!localStorage.getItem("cyberwareness_terms_and_conditions")){

  //load terms and conditions if user not agreed yet
  loadTandC()

//-------------------- Info ------------------------------------------
}else{ 
  //display no text under progress bar
  noProgressText();

  //multi language support
  if(locale === "en"){
      window.survey = new Survey.Model(json_info_en);
  }else{
      window.survey = new Survey.Model(json_info_de);
  }

  //decrypt answers when survey is started
  survey.onStarted.add(function(){
    decryptAll(k);
  });

  //display intermediate result
  survey.onCurrentPageChanging.add(function(){
    result = getPageResult();
    if(document.getElementsByClassName('d-none')){
      if(document.getElementsByClassName('btn-next')[0].classList.contains('d-none')){
        document.getElementsByClassName('btn-next')[0].classList.remove('d-none');
      } else {
        document.getElementsByClassName('btn-complete')[0].classList.remove('d-none');
      }
    }
  });
  survey.onAfterRenderQuestion.add(function(options){
    if(result){
      var img = document.getElementById('resImg');
      if(document.getElementById('result')){
        if(result=='correct' || result=='korrekt'){
          var text = (result == 'correct') ? "Your answer is <b>correct</b>." : "Ihre Antwort ist <b>korrekt</b>."; 
          document.getElementById('result').innerHTML = text;
          img.src = './img/info/correct.png';
        }else{
          var text = (result == 'incorrect') ? "Your answer is <b>incorrect</b>." : "Ihre Antwort ist <b>falsch</b>."; 
          document.getElementById('result').innerHTML = text;
          img.src = './img/info/incorrect.png';
          document.getElementsByClassName('btn-next')[0].classList.add('d-none');
          document.getElementsByClassName('btn-complete')[0].classList.add('d-none');
        }
      } else if (document.getElementById('result0')){
        if(result=='correct' || result=='korrekt'){
          var text = (result == 'correct') ? "Your answers are <b>correct</b>." : "Ihre Antworten sind <b>korrekt</b>."; 
          document.getElementById('result0').innerHTML = text;
          img.src = './img/info/correct.png';
        }else{
          var text = (result == 'incorrect') ? "At least one answer is <b>incorrect</b>." : "Mindestens eine Frage wurde <b>falsch</b> beantwortet."; 
          document.getElementById('result0').innerHTML = text;
          img.src = './img/info/incorrect.png';
          document.getElementsByClassName('btn-next')[0].classList.add('d-none');
        }
      }
    }
  });
};

//stay on top of the page, avoid scrolling to question
survey.onCurrentPageChanged.add(function(){
  $('html,body').scrollTop(0);
});

//render survey
$("#surveyContainer").Survey({model: survey, css: myCss});