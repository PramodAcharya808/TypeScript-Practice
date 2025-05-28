type User = {
  readonly _id: string;
  email: string;
  phone: number;
  isActive?: boolean; //optional field
};

let userData: User = {
  _id: "ed24",
  email: "pramod@gmail.com",
  phone: 9999999999,
};

userData.email = "Pramod";
// userData._id = "123"

export {};
