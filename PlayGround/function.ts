// sytnax to explicitly add the type to params and function return type
function getSum(num: number): number {
  return num * 2;
}

getSum(5);

// simillarly in arrow function
const getMessage = (name: string): string => {
  return `Welcome ${name}`;
};

getMessage("Pramod");

// void type

const logError = (error: string): void => {
  console.log(error);
};

logError("404 not found");

// never type is used maintly while handling the errors where the execution will be halted

const handleError = (err: string): never => {
  throw new Error(err);
};

// to add default param

const defaultValue = (
  name: string,
  email: string,
  isPaid: boolean = false
) => {};

defaultValue("Pramod", "pramod@p.com");

export {};
