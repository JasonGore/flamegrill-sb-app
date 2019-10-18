console.log('__mocks__/facade');

// TODO: Don't think this approach is working with "new" storybook stories
export const storiesOf = function storiesOf() {
  var api = {};
  var story;
  console.log('storiesOf');
  api.add = (name, func)=> {
    console.log('add');
    story = func();
    snapshot(name, story);
    return api;
  };
  api.addWithInfo = (name, func)=> {
    console.log('addWithInfo');
    story = func();
    snapshot(name, story);
    return api;
  };
  return api;
};

export const action = () => {};

export const linkTo = () => {};

export const specs = (spec) => {
  console.log('spec');
  spec()
};

export const snapshot = (name, story) => {
  console.log('snapshot');
  it(name, function () {
    let renderer = require("react-test-renderer");
    const tree = renderer.create(story).toJSON();
    expect(tree).toMatchSnapshot();
  });
};

export const describe = jasmine.currentEnv_.describe;
export const it = jasmine.currentEnv_.it;
