module.exports = {
  name: 'ng-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
