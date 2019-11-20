module.exports = {
  name: 'ng-lib8',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/lib8',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
