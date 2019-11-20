module.exports = {
  name: 'ng-lib10',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/lib10',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
