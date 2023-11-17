'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

// NOTE: better, but messes up docgen:
// export interface CapCallKeepPlugin extends Listeners, AndroidOnly, IOSOnly, IOSOrAndroid {}
const CONSTANTS = {
    END_CALL_REASONS: {
        FAILED: 1,
        REMOTE_ENDED: 2,
        UNANSWERED: 3,
        ANSWERED_ELSEWHERE: 4,
        DECLINED_ELSEWHERE: 5 | 2,
        MISSED: 2 | 6,
    },
};

const CapCallKeep = core.registerPlugin('CapCallKeep', {
    web: () => {
        throw Error('not implemented on web');
    },
});

exports.CONSTANTS = CONSTANTS;
exports.CapCallKeep = CapCallKeep;
//# sourceMappingURL=plugin.cjs.js.map
