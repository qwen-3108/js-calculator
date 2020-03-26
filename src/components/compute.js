/*Computing function*/

const compute = (str) => {
  let numRegex = /((?<!\d)[-]?)[0-9.]+/g;
 	let opRegex = /(?<=\d)[+/*-](?=.)/g;
  let numArr = str.match(numRegex);
  let opArr = str.match(opRegex);


  if (opArr===null) {
    return str;
  } else {

    //cleaning repeating operators & assigning negative sign
    let cleanedArr = [];
    for (let i = 0; i < opArr.length; i++) {
        cleanedArr.push(numArr[i]);
        cleanedArr.push(opArr[i]);
    }
    cleanedArr.push(numArr[numArr.length - 1]);
    //console.log(numArr, opArr, cleanedArr);

    //performing multiplication, division, addition and subtraction in order
    const OP = [
      { op: '*', func: (x, y) => x * y},
      { op: '/', func: (x, y) => x / y},
      { op: '+', func: (x, y) => x + y},
      { op: '-', func: (x, y) => x - y}];

    for (let i = 0; i < OP.length; i++) {
      while (cleanedArr.includes(OP[i].op)) {
        let index = cleanedArr.indexOf(OP[i].op);
        let a = Number(cleanedArr[index - 1]);
        let b = Number(cleanedArr[index + 1]);
        let result = OP[i].func(a, b);
        cleanedArr.splice(index-1, 3, result);
      }
    }
    //console.log(cleanedArr);

    //rounding
    let integer = Math.floor(cleanedArr[0]);
    let decimal = cleanedArr[0] - integer;
    let value = '';
    if(decimal.toString().length>6){
        value = cleanedArr[0].toFixed(4);
    }else{
        value = cleanedArr[0];
    }
    return value;
  }
}

export default compute;
