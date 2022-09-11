const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {

  let MaxLength = [arrayOfString[0]]
  
    for (let i = 1; i < arrayOfString.length; i++){
    if (arrayOfString[i].length > MaxLength[0].length) {
      MaxLength = [arrayOfString[i]]
    }
    else if(arrayOfString[i].length === MaxLength[0].length) {
      MaxLength.push(arrayOfString[i]) 
    } if (arrayOfString === null || arrayOfString === undefined) {
      return undefined
    }
  } 
  return MaxLength
}
module.exports = getMaxLengthString