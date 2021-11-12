export const myFunctionRevealed = function () {
  const myProperty = ['value1', 'value2'];

  function printPropertyValue() {
    return myProperty;
  }

  return {
    name: 'revealed',
    print: printPropertyValue,
  };
};
