import React from 'react';
import renderer from 'react-test-renderer';
import SortingOptions from './sorting-options.jsx';

it(`SortingOptions should render correctly`, () => {
  const tree = renderer
    .create(<SortingOptions
      currentSortType={`Popular`}
      onSortTypeClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
