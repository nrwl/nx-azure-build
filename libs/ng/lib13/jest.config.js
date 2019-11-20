module.exports = {
  name: 'ng-lib13',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/lib13',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
