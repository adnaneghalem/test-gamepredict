import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import GameDisplay from './GameDisplay';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<GameDisplay />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<GameDisplay id="1" onOpen={() => void null} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
