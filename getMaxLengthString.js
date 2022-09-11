const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  
  if (arrayOfString === null || arrayOfString === undefined) {
    return undefined
  } 
  
  //check

  let items = []
  let MaxLength = arrayOfString[0]

  for (let i = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i].length > MaxLength.length) {
      MaxLength = arrayOfString[i]
    } else if (arrayOfString[i].length === MaxLength.length) {
      items.push(arrayOfString.length[i])
    }
    return items
  }
}
module.exports = getMaxLengthString
