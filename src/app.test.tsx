import React from 'react';
import Component from './app';
import renderer from 'react-test-renderer';
import snapshotDiff from 'snapshot-diff';

// Ideal API (doesn't serialize)
test('Ideal', () => {
  expect(<Component />).toMatchDiffSnapshot(<Component isError />);
})

// works except for [object Object] for component
test('Using react-rest-render', () => {
  expect(
    renderer
    .create(<Component />)
    .toJSON()
  ).toMatchDiffSnapshot(renderer
    .create(<Component isError />)
    .toJSON());
})

// works except for [object Object] for component
test('using snapshotDiff() func', () => {
  const treeA =  renderer
    .create(<Component />)
    .toJSON()

  const treeB = renderer
    .create(<Component isError />)
    .toJSON()
  expect(snapshotDiff(treeA, treeB)).toMatchSnapshot()
})
