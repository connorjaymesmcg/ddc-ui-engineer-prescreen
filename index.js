// Establish DOM elements
const inputTextArea = document.querySelector('.prescreen-input');
const outputTextArea = document.querySelector('.prescreen-output');
const totalButton = document.querySelector('.prescreen-button');

inputTextArea.innerHTML = `
John: 2
Jane: 3
John: 4
Jane: 5
`;

// Pre-Palindrome
const palindromeChecker = (string) => {
  let sanitizedArray = string.toLowerCase().replace(/\W/g, '').split('');
  let reversedCheck = string.toLowerCase().replace(/\W/g, '').split('').reverse().join('');
  if (sanitizedArray.join('') === reversedCheck) {
    outputTextArea.classList.add('prescreen-palindrome');
  } else {
    outputTextArea.classList.remove('prescreen-palindrome');
  }
};

// Click listener for totaling sums of keys
totalButton.addEventListener('click', () => {
  // Refresh output on every click
  outputTextArea.innerHTML = '';

  let inputArray = inputTextArea.value.trim().split(/\n/);
  let newTextString = JSON.stringify(inputArray);
  let nameParser = newTextString.match(/(?<=")(\w+)(?=:)/gi);
  let uniqueNameKeys = [...new Set(nameParser)];

  const buildUserObject = (arr) => {
    let obj = {};
    for (const el of arr) {
      obj[el] = 0;
    }
    return obj;
  };

  let usersObject = buildUserObject(uniqueNameKeys);

  // Modify the userObject
  inputArray.forEach((el) => {
    let name = el.match(/([A-Z])+(?=:)/gi);
    palindromeChecker(name[0]);
    let number = el.match(/(\d)+/gi);
    usersObject[name] += parseInt(number);
  });

  // Create the output string
  for (const name in usersObject) {
    if (isNaN(usersObject[name])) {
      outputTextArea.innerHTML += `${name}: Not valid number \n`;
    } else {
      outputTextArea.innerHTML += `The total for ${name} is ${usersObject[name]} \n`;
    }
  }
});
