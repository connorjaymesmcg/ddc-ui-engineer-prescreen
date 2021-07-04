const inputTextArea = document.querySelector('.prescreen-input');
const outputTextArea = document.querySelector('.prescreen-output');
const totalButton = document.querySelector('.prescreen-button');

inputTextArea.value =
  `
John: 2
Jane: 3
John: 4
Jane: 5
`;



totalButton.addEventListener('click', () => {
  const newText = inputTextArea.value.split(/[\n]/).filter(element => element != '').map(element => element.trim());
  console.log(newText);
  const buildObject = arr => {
    const obj = {};
    for (el of arr) {
      let [a, b] = el.split(':');
      console.log(parseInt(b) + parseInt(b));
      obj[a] = b;
      console.log(obj);
    }
    return obj;

    // let arrayObj = [];
    // for (let i = 0; i < arr.length; i += 2) {
    //   const obj = {};
    //   obj[arr[i]] = arr[i + 1];
    //   arrayObj.push(obj);
    // }
    // console.log(Object.values(arrayObj))
    // return arrayObj;
  };

  console.log(buildObject(newText));
});