const calcOutput = (text: string, output: string) => {
  switch (text) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (output === '0'){
        return text;
      } else {

        return output + text;
      }
    case '.':
      if (!output.includes('.')) {
        return output + text;
      }
      return output;
    case '+':
      return output;
    case '-':
      return output;
    case '删除':
      if (output.length <= 1) {
        return '';
      } else {
        return output.slice(0, -1);
      }
    default:
      return output;
  }
}

export {calcOutput};