var assert = chai.assert

describe('variables', function () {
  it('givenName should equal Addison', function () {
    assert.equal('Addison', givenName)
  })
  it('candies should equal 20', function () {
    assert.equal(20, candies)
  })
  it('people should equal 6', function () {
    assert.equal(6, people)
  })
  it('leftover should equal 2', function () {
    assert.equal(2, leftover)
  })
})

describe('greeting', function () {
  it('should say hello to Chase', function () {
    assert.equal('Hello, Chase!', greeting('Chase'))
  })
  it('should say hello to Kendall', function () {
    assert.equal('Hello, Kendall!', greeting('Kendall'))
  })
  it('should say hello to Ryan', function () {
    assert.equal('Hello, Ryan!', greeting('Ryan'))
  })
})

describe('isOdd', function () {
  it('should say 3 is odd', function () {
    assert.equal(true, isOdd(3))
  })
  it('should say 10 is not odd', function () {
    assert.equal(false, isOdd(10))
  })
  it('should say -13 is odd', function () {
    assert.equal(true, isOdd(-13))
  })
  it('should say 5.5 is not odd', function () {
    assert.equal(false, isOdd(5.5))
  })
})

describe('isEven', function () {
  it('should say 3 is not even', function () {
    assert.equal(false, isEven(3))
  })
  it('should say 10 is even', function () {
    assert.equal(true, isEven(10))
  })
  it('should say -12 is even', function () {
    assert.equal(true, isEven(-12))
  })
  it('should say 4.4 is not even', function () {
    assert.equal(false, isEven(4.4))
  })
})

describe('fahrenheitToCelsius', function () {
  it('32 F should equal 0 Celsius', function () {
    assert.equal(0, fahrenheitToCelsius(32))
  })
  it('212 F should equal 100 Celsius', function () {
    assert.equal(100, fahrenheitToCelsius(212))
  })
  it('77 F should equal 25 Celsius', function () {
    assert.equal(25, fahrenheitToCelsius(77))
  })
})

describe('celsiusToFahrenheit', function () {
  it('0 C should equal 32 F', function () {
    assert.equal(32, celsiusToFahrenheit(0))
  })
  it('100 C should equal 212 F', function () {
    assert.equal(212, celsiusToFahrenheit(100))
  })
  it('25 C should equal 77 F', function () {
    assert.equal(77, celsiusToFahrenheit(25))
  })

  it('fahrenheitToCelsius(celsiusToFahrenheit(x)) should equal x', function () {
    for (var i = 0; i < 100; i++) {
      var x = Math.random() * 1000 - 500
      assert.closeTo(x, fahrenheitToCelsius(celsiusToFahrenheit(x)), 0.001)
      assert.closeTo(x, celsiusToFahrenheit(fahrenheitToCelsius(x)), 0.001)
    }
  })
})

describe('fahrenheitToKelvin', function () {
  it('32 F should equal 273.15 K', function () {
    assert.equal(273.15, fahrenheitToKelvin(32))
  })
  it('212 F should equal 373.15 K', function () {
    assert.equal(373.15, fahrenheitToKelvin(212))
  })
  it('-400 F should equal 33.15 K', function () {
    assert.closeTo(33.15, fahrenheitToKelvin(-400), 0.001)
  })
})

describe('lesser', function () {
  it('should return 1 from 1 and 2', function () {
    assert.equal(1, lesser(1, 2))
    assert.equal(1, lesser(2, 1))
  })
  it('should return -1 from -1 and 1', function () {
    assert.equal(-1, lesser(-1, 1))
    assert.equal(-1, lesser(1, -1))
  })
})

describe('multigreeting', function () {
  it('should say hello in English', function () {
    assert.equal('Hello, Julian!', multigreeting('Julian', 'en'))
  })
  it('should say hola in Spanish', function () {
    assert.equal('¡Hola, Julian!', multigreeting('Julian', 'es'))
  })
  it('should say hello in French', function () {
    assert.equal('Bonjour, Julian!', multigreeting('Julian', 'fr'))
  })
  it('should say hello in Esperanto', function () {
    assert.equal('Saluton, Julian!', multigreeting('Julian', 'eo'))
  })
  it('should return nothing for languages not supported', function () {
    assert.isUndefined(multigreeting('Julian', 'zz'))
  })
})

describe('sum', function () {
  it('returns 0 for an empty array', function () {
    assert.equal(0, sum([]))
  })

  it('works with only one number in the array', function () {
    assert.equal(5, sum([5]))
  })

  it('adds up all the numbers in an array', function () {
    assert.equal(15, sum([1, 2, 3, 4, 5]))
  })
})

describe('average', function () {
  it('returns undefined for an empty array', function () {
    assert.isUndefined(average([]))
  })

  it('works with only one number in the array', function () {
    assert.equal(5, average([5]))
  })

  it('returns the average of an array', function () {
    assert.equal(3, average([1, 2, 3, 4, 5]))
  })
})

describe('minimum', function () {
  it('returns undefined for an empty array', function () {
    assert.isUndefined(minimum([]))
  })

  it('returns the number for an array with one number', function () {
    assert.equal(1, minimum([1]))
  })

  it('returns the the minimum number in an array of numbers', function () {
    assert.equal(1, minimum([2, 1, 3]))
    assert.equal(-4, minimum([7, 31, -4, 2]))
  })
})

describe('selectionSort', function () {
  it('returns an empty array for an empty array', function () {
    assert.deepEqual([], selectionSort([]))
  })

  it('returns the same array for an array with one number', function () {
    assert.deepEqual([2], selectionSort([2]))
  })

  it('returns the same array for a sorted array', function () {
    assert.deepEqual([2, 4, 10, 12], selectionSort([2, 4, 10, 12]))
  })

  it('returns a sorted array', function () {
    assert.deepEqual([2, 4, 10, 12], selectionSort([4, 2, 12, 10]))
  })
})
