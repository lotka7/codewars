export const twoToOne = (s1: string, s2: string) => {
    const concatenatedString = s1.concat(s2)
    console.log(concatenatedString);
    let stringArray = concatenatedString.split('').sort();
    // let findDuplicates = stringArray.filter((item, index) => stringArray.indexOf(item) != index);
    // let findDuplicates = stringArray.reduce(
    //     (previousValue, currentValue) => previousValue + currentValue,
    //     initialValue
    //   );

    console.log(stringArray);
    // console.log(findDuplicates);

    // return total;
}