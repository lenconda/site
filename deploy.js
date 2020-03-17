let deploy = require('ali-oss-deploy');

deploy({
  path: '../dist',
  ossConfig: {
    region: 'oss-ap-northeast-1',
    accessKeyId: process.env.ACCESS_KEY_ID,
    accessKeySecret: process.env.ACCESS_KEY_SECRET,
  },
  bucket: {
    pro: {
      name: 'lenconda-site',
      refreshPath: '',
    },
    test: {
      name: 'lenconda-site',
      projectPath: '',
    },
  },
});
