const negate = a => {
  // your code here
  if (a === true) {
    return false;
  }
  if (a === false) {
    return true;
  }
};

const both = (a, b) => {
  // your code here
  if (a == true && b == true) {
    return true;
  } else {
    return false;
  }
};

const either = (a, b) => {
  // your code here
  if (a == true || b == true) {
    return true;
  } else  {
    return false;
  }
  
};

const none = (a, b) => {
  // your code here
  if (a != true && b != true) {
    return true;
  } else {
    return false;
  }

};

const one = (a, b) => {
  // your code here
  if (a == true && b != true) {
    return true;
  } else if (a != true && b == true) {
      return true;
    } else {
    return false;
  } 
};

const truthiness = a => {
  // your code here
  return Boolean(a);
};

const isEqual = (a, b) => {
  // your code here
  if (a == b) {
    return true;
  } else {
    return false;
  }
};

const isGreaterThan = (a, b) => {
  // your code here
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

const isLessThanOrEqualTo = (a, b) => {
  // your code here
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

const isOdd = a => {
  // your code here
  if (a % 2 !== 0) {
    return true;
  } else {
    return false;
  }
};

const isEven = a => {
  // your code here
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const isSquare = a => {
  // your code here
  a = Math.sqrt(a);
  if (Number.isInteger(a)) {
    return true;
  } else {
    return false;
  }
};

const startsWith = (char, string) => {
  // your code here
  if (string.startsWith(char)) {
    return true;
  } else {
    return false;
  }
};

const containsVowels = string => {
  // your code here
  if (string.includes("a") || string.includes("A") || string.includes("e") || string.includes("E") 
  || string.includes("i") || string.includes("I") || string.includes("o") || string.includes("O") || string.includes("u") 
  || string.includes("U")) {
    return true;
  } else {
    return false;
  }
};

const isLowerCase = string => {
  // your code here
  if (string == string.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
