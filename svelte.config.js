import adapter from '@sveltejs/adapter-cloudflare';

const config = {
  kit: {
    adapter: adapter({
      routes: {
        include: ['/*'],
        exclude: ['/icons/*']
      }
    })
  }
};

export default config;
