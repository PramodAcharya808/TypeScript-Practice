// let nums: number[] = [];
// or
let nums: Array<number> = [];
nums.push(10);

// let names: string[] = [];
// or
let names: Array<string> = [];
names.push("Pramod");

type User = {
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let userData: Array<User> = [
  {
    name: "",
    email: "",
    isActive: false,
  },
  {
    name: "",
    email: "",
    isActive: false,
    creditCardDetails: 1234567890,
  },
];

// multi dimentional array

let pixels: number[][] = [
  [255, 255, 255],
  [222, 222, 222],
];
