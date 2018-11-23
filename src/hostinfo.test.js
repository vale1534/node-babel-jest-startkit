import hostinfo from './hostinfo';

test('?0', () => {
  expect(hostinfo.homeDir).toBeDefined();
  expect(hostinfo.hostname).toBeDefined();
  expect(hostinfo.environ).toBeDefined();
});

test('?1', () => {
  expect(hostinfo.environ).toHaveProperty('Path');
});
