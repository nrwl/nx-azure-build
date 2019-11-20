module.exports = {
  name: 'ng-lib2',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/lib2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
