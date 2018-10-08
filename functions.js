//ES6
const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: "Anthony" };
    user["lastName"] = "Mendola";
    return user;
  }
};

module.exports = functions;
