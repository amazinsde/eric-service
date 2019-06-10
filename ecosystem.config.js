module.exports = {
  apps: [{
    name: 'amazin',
    script: 'server'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-208-230-170.compute-1.amazonaws.com',
      key: '~/.ssh/amazin.pem',
      ref: 'origin/master',
      repo: 'https://github.com/amazinsde/eric-service',
      path: '/home/ubuntu/amazin',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}