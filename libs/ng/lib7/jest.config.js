module.exports = {
  name: 'ng-lib7',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/lib7',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
