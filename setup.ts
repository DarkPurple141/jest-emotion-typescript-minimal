import serializer from 'jest-emotion'
import snapshotDiff, { toMatchDiffSnapshot } from 'snapshot-diff';

snapshotDiff.setSerializers([...snapshotDiff.defaultSerializers, serializer as any])
expect.extend({ toMatchDiffSnapshot });

expect.addSnapshotSerializer(serializer)
