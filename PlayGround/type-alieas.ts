type User = {
  userName: string;
  email: string;
  isActive: boolean;
  tokenNumber: number;
};

const createUser = (user: User): User => {
  return {
    userName: "Pramod",
    email: "p@p.com",
    tokenNumber: 78,
    isActive: true,
  };
};
