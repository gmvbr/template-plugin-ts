import Plugin from './index';
import fastify from 'fastify';

describe('test plugin', () => {
  it('register plugin', async () => {
    expect(async () => {
      const app = fastify().register(Plugin, {name: 'test'});
      await app.listen(0);
      await app.close();
    }).not.toThrow();
  });
});
