const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

console.log('jest');

jest.mock('../.storybook/facade');

// Configure enzyme.
configure({ adapter: new Adapter() });
