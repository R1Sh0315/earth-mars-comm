import { ICharToNum, IObj } from "./common.interface";

const charToNum = {
  a: "2",
  b: "22",
  c: "222",
  d: "3",
  e: "33",
  f: "333",
  g: "4",
  h: "44",
  i: "444",
  j: "5",
  k: "55",
  l: "555",
  m: "6",
  n: "66",
  o: "666",
  p: "7",
  q: "77",
  r: "777",
  s: "7777",
  t: "8",
  u: "88",
  v: "888",
  w: "9",
  x: "99",
  y: "999",
  z: "9999",
  " ": " ",
  "*": "*",
  "#": "#",
};

const earthMarsMsgConv = (earthText: string) => {
  let martianMsg = "";
  let CHARTONUMBER: ICharToNum = charToNum;

  for (const char of earthText) {
    const lowerCaseChar = char.toLowerCase();
    if (charToNum.hasOwnProperty(lowerCaseChar)) {
      martianMsg += CHARTONUMBER[lowerCaseChar];
    }
  }

  const msg = {
    "response from earth": earthText,
    "nokia translation": martianMsg,
  };

  console.log("earth-sender and mars-receiver");
  return msg;
};

const marsEarthMsgConv = (martianText: string) => {
  let CHARTONUMBER: ICharToNum = charToNum;

  const numArr: string[] = [];
  let currentGroup = "";

  for (let i = 0; i < martianText.length; i++) {
    if (i === 0 || martianText[i] === martianText[i - 1]) {
      currentGroup += martianText[i];
    } else {
      if (martianText[i] !== ".") {
        numArr.push(currentGroup);
        currentGroup = martianText[i];
      }
    }
  }

  if (currentGroup !== "") {
    numArr.push(currentGroup);
  }

  let numbToChar: { [key: string]: string } = convertNumbToChar(CHARTONUMBER);

  const outputText = convertToText(numArr, numbToChar);

  const msg = {
    "response from Mars": outputText,
    "nokia translation": martianText,
  };

  console.log("mars-sender and earth-receiver");
  return msg;
};

const convertNumbToChar = (object: IObj) => {
  const newObject: { [key: string]: string } = {};

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const value = object[key];
      newObject[value] = key;
    }
  }
  return newObject;
};

const convertToText = (input: string[], charArr: IObj): string => {
  return input.map((item) => charArr[item] || "").join(""); // Join the converted items to form the text
};

export { earthMarsMsgConv, marsEarthMsgConv };
