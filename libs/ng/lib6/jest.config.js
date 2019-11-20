module.exports = {
  name: 'ng-lib6',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/lib6',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
