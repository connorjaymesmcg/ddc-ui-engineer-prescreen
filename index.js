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
  let newText = inputTextArea.value.split(/[\n]/).filter(element => element != '');
  console.log(newText);


});