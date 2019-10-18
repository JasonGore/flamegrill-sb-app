import { configure } from '@storybook/react';
import { configure as configureEnzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

console.log('config');

// TODO: for some reason, as soon as "yarn" is run with package.json storybook changes, the "yarn start" command breaks:
// [8:40:42 AM] ▲ no webpack.serve.config.js configuration found, skipping

// TODO: warning " > storybook-addon-specifications@2.1.5" has incorrect peer dependency "@storybook/addons@^3.0.0".

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

// storybook-addon-specifications
configureEnzyme({ adapter: new Adapter() });
