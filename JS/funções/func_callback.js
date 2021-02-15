// callback function

function sayMyName(name) {
  name()
}

sayMyName(
  () => {
    console.log('essa é uma callback')
  }
)
