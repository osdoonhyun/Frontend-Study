enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답');
  }
  if (answer === Answer.No) {
    console.log('오답');
  }
}

// askQuestion('Y'); // 에러 : Answer 형식의 매개변수에 할당할 수 없다.
askQuestion(Answer.Yes);
