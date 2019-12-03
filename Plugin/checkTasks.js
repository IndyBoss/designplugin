var d = new Date();
var date = d.getFullYear() + '-' + d.getDate() + '-' + d.getMonth();
//var date = "2019-02-11";

var tasks = ["Say hello to 10 different people.","Go for a 10 minute walk.","Drink 5 glasses of water.","Sing a song out loud.","Visit the highest point in the building.","Count 20 birds.","Draw something.","Dancing in the rain.","Make a birdhouse.","Read a book.","Make up a dance.","Sing in the shower.","Learn a magic trick.","Go to the park.","Go for a bike ride.","Have a water fight.","Collect bugs.","Hide something and make a treasure map.","Plant some seeds in a garden.","Water the plants.","Walk around the block.","Do some stretches."]
var tasksLeft = tasks;



chrome.storage.local.get(['tasksCompleted'], function(resultTasks) {
  chrome.storage.local.get(['array'], function(resultArray) {
    chrome.storage.local.get(['number'], function(resultNumber) {
      if(resultNumber.number == 0) {
        chrome.storage.local.set({array:'empty'}, function() {
          console.log("empty array");
        })
      }
      if (resultArray.array == 'empty') {
        tasksLeft = tasks;
        var t = [];
        for (var i = 0; i < 4; i++) {
          var rand = Math.floor(Math.random()*tasksLeft.length);
          t.push(tasksLeft[rand]);
          var plus = rand + 1;
          tasksLeft.splice(rand,plus);
          document.getElementById(i+1).innerText = t[i];
        }
        chrome.storage.local.set({array:t}, function() {
          console.log("make array");
        })
      } else {

        var array = [];
        array = resultArray.array;
        for (var i = 0; i < 4; i++) {
          document.getElementById(i+1).innerText = array[i];
        }
        console.log(array);
      }
    })


    if(resultTasks.tasksDate==date && resultTasks.tasksCompleted==true) {
      document.getElementById('tasksDone').setAttribute('class', 'invisible');
      document.getElementById('taskDoneMsg').setAttribute('class', 'visible');
    } else if (resultTasks.tasksDate!=date && resultTasks.tasksCompleted==true) {
        chrome.storage.local.set({number:0}, function() {
          console.log("number update 0");
        })
        chrome.storage.local.set({tasksCompleted:false}, function() {
        })
    }

  })
});

chrome.storage.local.get(['number'], function(result) {
  var n = result.number;
  switch (n) {
    case 1:
      document.getElementById('task1').setAttribute('class', "taskBtn disabled");
      document.getElementById('task2').setAttribute('class', "taskBtn enabled");
      break;
    case 2:
      document.getElementById('task2').setAttribute('class', "taskBtn disabled");
      document.getElementById('task3').setAttribute('class', "taskBtn enabled");
      break;
    case 3:
      document.getElementById('task3').setAttribute('class', "taskBtn disabled");
      document.getElementById('task4').setAttribute('class', "taskBtn enabled");
      break;
    case 4:
      document.getElementById('task4').setAttribute('class', "taskBtn disabled");
      document.getElementById('tasksDone').setAttribute('class', "enabled");
      break;
    case 5:
      document.getElementById('tasksDone').setAttribute('class', "invisible");
      document.getElementById('taskDoneMsg').setAttribute('class', "visible");
      break;
    case 0:
      document.getElementById('task1').setAttribute('class', "taskBtn enabled");
      document.getElementById('taskDoneMsg').setAttribute('class', "invisible");
      break;

    default:
      console.log('switch not in use');
  }
});





document.addEventListener('DOMContentLoaded', function() {

  var checkButton = document.getElementById('tasksDone');
  checkButton.addEventListener('click', function() {
    chrome.storage.local.set({tasksCompleted:true}, function() {
      chrome.storage.local.set({number:5}, function() {
        document.getElementById('tasksDone').setAttribute('class', 'invisible');
        document.getElementById('taskDoneMsg').setAttribute('class', 'visible');
      })
    })
    console.log(date);
  }, false);




  var checkButton = document.getElementById('task1');
  checkButton.addEventListener('click', function() {
    chrome.storage.local.set({number:1}, function() {
      document.getElementById('task1').setAttribute('class', 'taskBtn disabled');
      document.getElementById('task2').setAttribute('class', 'taskBtn enabled');
    })
    console.log(date);
    chrome.storage.local.set({tasksDate:date}, function() {
    })
    console.log(date);

  }, false);

  var checkButton = document.getElementById('task2');
  checkButton.addEventListener('click', function() {
    chrome.storage.local.set({number:2}, function() {
      document.getElementById('task2').setAttribute('class', 'taskBtn disabled');
      document.getElementById('task3').setAttribute('class', 'taskBtn enabled');
    })
    console.log(date);
  }, false);

  var checkButton = document.getElementById('task3');
  checkButton.addEventListener('click', function() {
    chrome.storage.local.set({number:3}, function() {
      document.getElementById('task3').setAttribute('class', 'taskBtn disabled');
      document.getElementById('task4').setAttribute('class', 'taskBtn enabled');
    })
    console.log(date);
  }, false);

  var checkButton = document.getElementById('task4');
  checkButton.addEventListener('click', function() {
    chrome.storage.local.set({number:4}, function() {
      document.getElementById('task4').setAttribute('class', 'taskBtn disabled');
      document.getElementById('tasksDone').setAttribute('class', 'visible');
    })
    console.log(date);
  }, false);

}, false);
