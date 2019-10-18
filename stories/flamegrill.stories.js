import React from 'react';

import { mount } from 'enzyme';
import expect from 'expect';
import { action } from '@storybook/addon-actions';

// import { storiesOf } from '@storybook/react';
// import { specs, describe, it } from 'storybook-addon-specifications';

import { storiesOf, specs, describe, it } from '../.storybook/facade';

export default {
  title: 'Flamegrill',
};

const stories = storiesOf('Button', module);

stories.add('Hello World', function () {
  const story =
    <button onClick={action('Hello World')}>
      Hello World
    </button>;

  specs(() => describe('Hello World', function () {
    it('Should have the Hello World label', function () {
      let output = mount(story);
      expect(output.text()).toContain('Hello World');
    });
  }));

  return story;
});

export const SampleSpec = () => {
  const story =
    <button onClick={action('Hello World')}>
      Hello World
    </button>;

  specs(() => describe('Hello World', function () {
    it('Should have the Hello World label', function () {
      let output = mount(story);
      expect(output.text()).toContain('Hello World');
    });
  }));

  return story;
};
