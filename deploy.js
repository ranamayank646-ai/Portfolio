const ghpages = require('gh-pages');

ghpages.publish(
  'build',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/ranamayank646-ai/Portfolio.git',
    message: 'Deploy clean build',
    dotfiles: true,
    add: true,
  },
  err => {
    if (err) {
      console.error('❌ Deployment failed:', err);
    } else {
      console.log('✅ Deployed successfully! Visit: https://ranamayank646-ai.github.io/Portfolio');
    }
  }
);
