function cashing(fn) {
  const cache = {}
  return function (n) {
    if (cache[n]) {
      console.log('From cache', cache[n])
      return cache[n]
    }

    let result = fn(n)
    console.log('New calculations', result)
    cache[n] = result
    return  result
  }
}

function factorial(n) {
  let result = 1
  while (n !== 1) {
    result *= n
    n -= 1
  }
  return result
}

const cashFactorial = cashing(factorial)

cashFactorial(5)
cashFactorial(4)
cashFactorial(3)
cashFactorial(5)
cashFactorial(4)
cashFactorial(5)
cashFactorial(1)
