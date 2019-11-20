module.exports = {
  name: 'ng-lib5',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/lib5',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
