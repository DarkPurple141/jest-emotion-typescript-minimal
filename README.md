# jest-emotion-typescript-minimal
Minimal jest-emotion snapshot-diff test repo

This repo is the minimal configuration suggested by snapshot-diff / jest-emotion for snapshot testing.
Unfortunately I can't get the two to play nicely together.

You can see in `src/__snapshots__` it's close, but not quite providing the correct usable diffs.

It's either:

1. Producing non-deterministic output which can't be relied upon in CI (hashing styles (jest-emotion) not working?)
2. Producing deterministic style output but not producing output for the react-tree.
