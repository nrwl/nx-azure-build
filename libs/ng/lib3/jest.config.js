module.exports = {
  name: 'ng-lib3',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng/lib3',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
