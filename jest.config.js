let path = require('path');

const jestConfig = path.resolve(path.join(__dirname, 'config', 'jest.js'));

console.log(`jest.config = ${jestConfig}`);

module.exports = {
  automock: false,
  setupFiles: [jestConfig],
  clearMocks: true,
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)', 
    '<rootDir>/src/**/?(*.)+(spec|test).[tj]s?(x)',
    // TODO: come up with standard for file patterns (spec? stories?)
    '<rootDir>/**/stories/**/*flamegrill.*.[jt]s?(x)', 
  ]
};
