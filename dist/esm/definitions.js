// NOTE: better, but messes up docgen:
// export interface CapCallKeepPlugin extends Listeners, AndroidOnly, IOSOnly, IOSOrAndroid {}
export const CONSTANTS = {
    END_CALL_REASONS: {
        FAILED: 1,
        REMOTE_ENDED: 2,
        UNANSWERED: 3,
        ANSWERED_ELSEWHERE: 4,
        DECLINED_ELSEWHERE: 5 | 2,
        MISSED: 2 | 6,
    },
};
//# sourceMappingURL=definitions.js.map