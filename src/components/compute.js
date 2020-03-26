/* Computing function */

const compute = (str) => {
  let numRegex = /((?<!\d)[-]?)[0-9.]+/g;
  let opRegex = /(?<=\d)[+/*-](?=.)/g; //pending change
  let numArr = str.match(numRegex);
  let opArr = str.match(opRegex);

  if (opArr === null) {

    return {refine:str,result:null};

  } else {

    //cleaning repeating operators & assigning negative sign
    let cleanedArr = [];
    for (let i = 0; i < opArr.length; i++) {

        cleanedArr.push(numArr[i]);
        cleanedArr.push(opArr[i]);
    }
    cleanedArr.push(numArr[numArr.length - 1]);
    //console.log(numArr, opArr, cleanedArr);

    //multiplication, division
    const OP = [{
      op: '*',
      func: (x, y) => x * y
    }, {
      op: '/',
      func: (x, y) => x / y
    }];

    for (let i = 0; i < OP.length; i++) {
      while (cleanedArr.includes(OP[i].op)) {
        let index = cleanedArr.indexOf(OP[i].op);
        let a = Number(cleanedArr[index - 1]);
        let b = Number(cleanedArr[index + 1]);
        let result = OP[i].func(a, b);
        cleanedArr.splice(index - 1, 3, result);
        //console.log(cleanedArr);
      }
    }

    //addition, subtraction
    let result = Number(cleanedArr[0]);
    for (let i = 1; i < cleanedArr.length - 1; i += 2) {
      switch (cleanedArr[i]) {
        case '+':
          let a = Number(cleanedArr[i + 1]);
          result += a;
          break;
        case '-':
          let b = Number(cleanedArr[i + 1]);
          result -= b;
          break;
        default:
          break;
      }
    }
    //console.log(result);

    //rounding
    let integer = Math.floor(result);
    let decimal = result - integer;
    let value = '';
    if (decimal.toString().length > 6) {
      value = result.toFixed(4);
    } else {
      value = result;
    }
    //console.log(decimal.toString(), decimal.toString().length, value);
    return {refine:null,result:value};

  }
}


export default compute;
