// This file contains intentional issues for SonarQube testing

// Global variable - code smell
var globalCounter = 0;

// Unused function parameter
function unusedParams(a, b, c) {
  return a + b;
  // c is never used
}

// Duplicate code block
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function calculateTotal(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Function with too many parameters
function processManyParams(a, b, c, d, e, f, g, h, i) {
  return a + b + c + d + e + f + g + h + i;
}

// Complex function with high cognitive complexity
function complexConditions(a, b, c) {
  if (a > 10) {
    if (b > 20) {
      if (c > 30) {
        return a + b + c;
      } else {
        return a + b;
      }
    } else {
      if (c > 50) {
        return a + c;
      } else {
        return a;
      }
    }
  } else {
    if (b > 40) {
      return b;
    } else {
      return c;
    }
  }
}

// Unsafe equality comparison
function unsafeComparison(a) {
  if (a == null) {
    return true;
  }
  return a == 1;
}

// Magic numbers
function calculateArea(radius) {
  return 3.14159 * radius * radius;
}

// Empty catch block
function errorSuppression() {
  try {
    return JSON.parse("invalid json");
  } catch (e) {
    // Empty catch block - error is swallowed
  }
}

// Unnecessary complexity
function unnecessaryComplexity(val) {
  let result = '';
  if (val > 100) {
    result = 'large';
  } else {
    result = 'small';
  }
  return result;
}

// Potential memory leak (in browser context)
function addEventWithoutRemoval() {
  document.addEventListener('click', function() {
    console.log('Clicked!');
  });
}

// Dead code - unreachable
function deadCode(x) {
  if (x > 10) {
    return 'Greater than 10';
  }
  return 'Less than or equal to 10';
  console.log('This will never execute');
}

// Security issue - eval usage
function unsafeEval(input) {
  return eval(input);
}

// Nested callbacks (callback hell)
function callbackHell() {
  setTimeout(function() {
    console.log('First timeout');
    setTimeout(function() {
      console.log('Second timeout');
      setTimeout(function() {
        console.log('Third timeout');
        setTimeout(function() {
          console.log('Fourth timeout');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

// Function with too many lines
function tooManyLines() {
  console.log('line 1');
  console.log('line 2');
  console.log('line 3');
  // ... imagine many more lines
  console.log('line 47');
  console.log('line 48');
  console.log('line 49');
  console.log('line 50');
  return 'Done';
}

// Hardcoded credentials
const API_KEY = "1234567890abcdef";
const PASSWORD = "supersecretpassword";

// SQL Injection vulnerability
function queryDatabase(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return executeSql(query);
}

function executeSql(query) {
  return `Executed: ${query}`;
}

// Infinite loop risk
function riskyLoop(arr) {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    // i is never incremented
  }
}

// Inconsistent return types
function inconsistentReturns(value) {
  if (value > 10) {
    return "Greater than 10";
  } else if (value < 0) {
    return 0;
  }
  // missing return for other cases
}

// Duplicate switch cases
function duplicateCases(day) {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 2: // Duplicate case
      return "Thursday";
    default:
      return "Unknown";
  }
}

// Unnecessary complexity with ternary operators
function nestedTernaries(value) {
  return value > 10 ? (value > 20 ? (value > 30 ? 'Very large' : 'Large') : 'Medium') : 'Small';
}

module.exports = {
  unusedParams,
  calculateSum,
  calculateTotal,
  processManyParams,
  complexConditions,
  unsafeComparison,
  calculateArea,
  errorSuppression,
  unnecessaryComplexity,
  deadCode,
  unsafeEval,
  callbackHell,
  tooManyLines,
  queryDatabase,
  riskyLoop,
  inconsistentReturns,
  duplicateCases,
  nestedTernaries
};
