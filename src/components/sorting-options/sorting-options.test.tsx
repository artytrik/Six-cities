import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SortingOptions from './sorting-options';
import {noop} from '../../utils';

it(`SortingOptions should render correctly`, () => {
  const tree = renderer
    .create(<SortingOptions
      currentSortType={`Popular`}
      onSortTypeClick={noop}
      onToggleClick={noop}
      isActive={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
