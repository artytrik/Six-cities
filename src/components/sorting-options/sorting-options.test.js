import React from 'react';
import renderer from 'react-test-renderer';
import SortingOptions from './sorting-options.jsx';

it(`SortingOptions should render correctly`, () => {
  const tree = renderer
    .create(<SortingOptions
      currentSortType={`Popular`}
      onSortTypeClick={() => {}}
      onToggleClick={() => {}}
      isActive={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
