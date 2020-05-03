module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "./utils/fixString1": "./utils/fixString2"
  }
};
