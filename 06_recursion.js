const factorial = (n) => { // for example factorial 5 = 1*2*3*4*5
  if (n === 1) {
    return 1
  }

  return n * factorial(n - 1)
}

console.log('factorial   =', factorial(5))

// fibonachi row = 1, 1, 2, 3, 5, 8, 13, 21 (every next number is equal to sum of the previous two numbers)

const fibonachi = (n) => { // function found n number in fibonachi row
  if (n === 1 || n === 2) {
    return 1
  }

  return fibonachi(n - 1) + fibonachi(n - 2)
}

console.log('fibonachi   =', fibonachi(7))
