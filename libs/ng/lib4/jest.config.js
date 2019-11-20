module.exports = {
  name: 'ng-lib4',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/lib4',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
