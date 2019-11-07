
var correct = 0;
var incorrect = 0;
var quiz = [
  ['Who is the best captain of all time?', 'NEMO', 'CAPTAIN AMERICA'],
  ['Who is the current President of the United States of America?', 'TRUMP', 'DONALD TRUMP'],
  ['Is the current President of the United States of America good at his job?', 'NO', 'HELL NO'],
];
  
function print(message) {
  document.write(message);
}  
  
 
for (var i=0; i < quiz.length; i ++){  
  var question = prompt(quiz[i][0]);
  if (question.toUpperCase() === quiz[i][1] || question.toUpperCase() === quiz[i][2]) {
    correct += 1;
    print('<p>You got "' + quiz[i][0] + '" right!</p>');
  } else {
    incorrect += 1;
    print('<p>You got "' + quiz[i][0] + '" wrong.</p>');
  }
}


if (correct === 3) {
  print('<p>You got all of the questions right! You are one smart cookie.</p>');
} else if (correct === 2) {
  print('<p>You only missed one question! That would be impressive except your finishing percent (66%) would not be considered a good grade.</p>');
} else if (correct === 1) {
  print('<p>You only got one question right. Bummer. Maybe if you pay more attention in life you will do better next time.</p>');
} else {
  print('<p>You did not get a single question right. You must have been intentionally answering incorrectly in order to disguide your immense intellect...right?</p>');
}

  




