"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _api = require('./api'); var _api2 = _interopRequireDefault(_api);

_api2.default.listen('3333', () => {
    console.log('Api iniciada');
});