module.exports = function toReadable (number) {
  let copyNumber = number;
  let count = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let count10 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let countDecimal = ['0', '1', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let str = '';



  if(copyNumber / 100 >= 1) {
    str = count[Math.floor(copyNumber / 100)] + ' hundred ';
    copyNumber = copyNumber % 100;
    if(copyNumber % 100 === 0) {
      return str.trim();
    }
  }

  if (copyNumber < 10) {
    return str = str + count[copyNumber];
  }

  if (copyNumber < 20) {
    str = str + count10[copyNumber % 10];
  }

  if (copyNumber >= 20) {
    str = str + countDecimal[Math.floor(copyNumber / 10)];
    if(countDecimal % 10 != 0) {
      if(copyNumber % 10 != 0) {
        str = str + " " + count[copyNumber % 10];
      }
    }
  }

  return str;
}
