const { m } = require('./Demo.bs')

process.argv.forEach(a => {
  console.log('========================')
  console.log('each', a)
  console.log('------------------------')
  m(a)
  console.log('========================')
})
