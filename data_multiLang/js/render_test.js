//-------------------- Terms and Conditons -------------------------------------
if(!localStorage.getItem("cyberwareness_terms_and_conditions")){

  //load terms and conditions if user not agreed yet
  loadTandC()

//-------------------- Test ------------------------------------------
}else{ 
  //styling adaptions
  myCss['navigation']['start']="btn-red btn-size btn-nav btn-start-test float-end";

  //multi language support
  if(locale === "en"){
    window.survey = new Survey.Model(json_test_en);
  }else{
      window.survey = new Survey.Model(json_test_de);
  }

  //survey settings
  selectQuestionsFromPool(2, 7, 5, 10, 2);
  randomizePages(survey);

  //prevent page refresh
  window.addEventListener('beforeunload', function (e) {
    e.preventDefault(); 
    e.returnValue = '';
  });

  //decrypt answers when survey is started
  survey.onStarted.add(function(){
    decryptAll(k);
  });

  //assessment + sending test data to server
  survey.onComplete.add(function (sender) {
    var data1 = getAnswers();
    drawDoughnutChart(data1);
    var data2 = getPageAnswers();

    //merge two json objects -> visitor_id + test results
    var data3 = {visitor_id:localStorage.getItem("cyberwareness_visitor_id")};
    var merge = {};
    $.extend(merge, data2, data3);

    //send to server
    var jsonString = JSON.stringify(merge);
    var xhr = new XMLHttpRequest();
    xhr.open("POST","./php/score.php");
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(jsonString);

    //German:translate labels before drawing chart
    if(locale=='de'){
      data2['Allgemein'] = data2['General'];
      delete data2['General'];
      data2['Online Umgebungen'] = data2['Online Environment'];
      delete data2['Online Environment'];
      data2['Physische Attacken'] = data2['Physical Attacks'];
      delete data2['Physical Attacks'];
    }
    drawBarChart(data2);
  });
}

//stay on top of the page, avoid scrolling to question
survey.onCurrentPageChanged.add(function(){
  $('html,body').scrollTop(0);
});

//render survey
$("#surveyContainer").Survey({model: survey, css: myCss});