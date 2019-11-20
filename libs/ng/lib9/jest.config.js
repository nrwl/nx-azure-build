module.exports = {
  name: 'ng-lib9',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/lib9',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
