'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _win = require('./win');

var _win2 = _interopRequireDefault(_win);

var _unix = require('./unix');

var _unix2 = _interopRequireDefault(_unix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var platform = _os2.default.type().match(/^Win/) ? 'win' : 'unix';

var FallbackPort = function () {
    function FallbackPort(port) {
        _classCallCheck(this, FallbackPort);

        this.port = port;
    }

    /**
     * get pid from port
     * @returns pid or null
     */


    _createClass(FallbackPort, [{
        key: 'getPid',
        value: function getPid() {
            return platform === 'win' ? _win2.default.pid(this.port) : _unix2.default.pid(this.port);
        }

        /**
         * return an available port
         * @returns {*}
         */

    }, {
        key: 'getPort',
        value: function getPort() {
            return this.getPid() ? this.port + Math.floor(Math.random() * 1000) : this.port;
        }

        /**
         * kill background process
         * @returns {*}
         */

    }, {
        key: 'kill',
        value: function kill() {
            return platform === 'win' ? _win2.default.kill(this.port) : _unix2.default.kill(this.port);
        }
    }]);

    return FallbackPort;
}();