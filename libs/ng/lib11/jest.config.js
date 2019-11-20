module.exports = {
  name: 'ng-lib11',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/lib11',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
