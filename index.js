// Establish DOM elements 
const inputTextArea = document.querySelector('.prescreen-input');
const outputTextArea = document.querySelector('.prescreen-output');
const totalButton = document.querySelector('.prescreen-button');

inputTextArea.innerHTML =
  `
John: 2
Jane: 3
John: 4
Jane: 5
`;


// Click listener for totaling sums of keys
totalButton.addEventListener('click', () => {
  // const newText = inputTextArea.value.split(/[\n]/).filter(element => element != '').map(element => element.trim());
  // console.log(newText);
  console.log(inputTextArea.innerHTML);
  // let array = inputTextArea.value.split(/[\n]/).filter(element => element != '');
  let inputArray = inputTextArea.value.trim().split(/\n/)
  let newTextString = JSON.stringify(array);
  let nameParser = newTextString.match(/(?<=")(\w+)(?=:)/gi);
  let uniqueNameKeys = [...new Set(nameParser)];

  const buildUserObject = arr => {
    let obj = {};
    for (el of arr) {
      obj[el] = 0;
    }
    return obj;
  };

  let usersObject = buildUserObject(uniqueNameKeys);

  inputArray.forEach((el) => {
    let name = el.match(/([A-Z])+(?=:)/gi);
    let number = el.match(/(\d)+/gi);
    usersObject[name] = usersObject[name] + parseInt(number);
    console.log(usersObject[name]);
  });

  console.log("Object:", usersObject);
});
