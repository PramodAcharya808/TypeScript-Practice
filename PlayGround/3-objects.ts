// object type

function getUserInfo({ name, email, isActive }): {
  name: string;
  email: string;
  isActive: boolean;
} {
  return {
    name: "Pramod",
    email: "pramod@p.com",
    isActive: true,
  };
}

// type aliases

type User = {
  name: string;
  email: string;
  isActive: boolean;
  expiresIn: number;
};

function userData(user: User): User {
  return user;
}

let userDetailes = userData({
  name: "Pramod",
  email: "pramod@gmail.com",
  isActive: true,
  expiresIn: 10,
});

console.log(userDetailes);

export {};
