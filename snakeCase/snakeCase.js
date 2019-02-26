const snakeCase = function (string) {
  let filter = /[@.,/#!$%^&*;:{}=/-_`~()]/g
  let filteredString = string.toLowerCase().replace(filter, '_')
  return filteredString
}

module.exports = snakeCase
