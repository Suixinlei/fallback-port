
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unix = {
    pid: function pid(port) {
        var result = _shelljs2.default.exec('lsof -i tcp:' + port, { silent: true }).stdout;
        return result ? result.split(/\s+/)[10] : null;
    },

    kill: function kill(port) {
        var pid = unix.pid(port);
        return _shelljs2.default.exec('kill -9 ' + pid, { silent: true }).stdout;
    }
};

exports.default = unix;
module.exports = exports['default'];