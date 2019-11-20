module.exports = {
  name: 'ng-lib1',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/lib1',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
