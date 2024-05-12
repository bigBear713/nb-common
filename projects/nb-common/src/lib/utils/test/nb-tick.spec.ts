import { nbTick } from '../nb-tick';

describe('nb-tick', () => {
  [
    {
      title: 'when time is 100ms',
      time: 100,
      expectTimeDiff: 118,
    },
    {
      title: 'when time is 0',
      time: 0,
      expectTimeDiff: 10,
    },
    {
      title: 'when time is undefined',
      time: undefined,
      expectTimeDiff: 10,
    },
  ].forEach(item => {
    it(item.title, async () => {
      const startTime = performance.now();
      await nbTick(item.time);
      const endTime = performance.now();

      expect(endTime - startTime).toBeLessThanOrEqual(item.expectTimeDiff);
    });
  });
});
