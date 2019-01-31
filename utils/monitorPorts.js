const portastic = require('portastic')

const PORT = 3000

portastic.test(PORT)
    .then(function(isOpen){
        const status = isOpen ? 'open' : 'closed'
        console.log(`Port ${PORT} is ${status}.`)
    })