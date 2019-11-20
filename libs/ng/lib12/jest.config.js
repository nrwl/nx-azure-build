module.exports = {
  name: 'ng-lib12',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/lib12',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
