module.exports = {
  name: 'app2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
