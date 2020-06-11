import React from 'react';
import Component from './app';
import snapshotDiff from 'snapshot-diff';

/* this doesn't work (it doesn't serialize) */
test('snapshot difference using snapshotdiff directly', () => {
  expect(snapshotDiff(<Component />, <Component isError/>)).toMatchSnapshot();
});
