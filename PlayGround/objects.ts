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

export {};
