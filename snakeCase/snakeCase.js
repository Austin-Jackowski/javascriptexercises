const snakeCase = function (string) {
  let filter = /[@.,/#!$%^&*;:{}=/-_`~()]/g
  let filteredString = string.toLowerCase().replace(filter, '')
  return filteredString
}

module.exports = snakeCase
