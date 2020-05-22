export const sortFunction = (arr, target) =>
  arr.sort((a, b) => {
    if (typeof a[target] == "string") {
      // console.log("The Target", a[target]);
      return (
        parseInt(a[target]) - parseInt(b[target]) ||
        a[target].length - b[target].length ||
        a[target].localeCompare(b[target])
      );
    } else {
      // console.log("The Target", a[target], " Not A string");
      return parseInt(a[target]) - parseInt(b[target]);
    }
  });

export default sortFunction;
