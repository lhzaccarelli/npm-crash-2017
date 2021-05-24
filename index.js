const _ = require('lodash')

const numbers = [33,22,55,23,76,23]

_.each(numbers, (number, i) => {
    console.log(number)
})