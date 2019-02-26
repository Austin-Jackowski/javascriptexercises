const palindromes = function (string) {
  let filter = /[@.,\/#!$%\^&\*;:{}=/-_`~()\s]/g
  let filteredString = string.toLowerCase().replace(filter, '')
  let reverseString = filteredString.split('').reverse().join('')

  if (filteredString === reverseString) {
    return true
  }
  return false
}

module.exports = palindromes
