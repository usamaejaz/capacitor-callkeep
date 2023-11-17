import { registerPlugin } from '@capacitor/core';
const CapCallKeep = registerPlugin('CapCallKeep', {
    web: () => {
        throw Error('not implemented on web');
    },
});
export * from './definitions';
export { CapCallKeep };
//# sourceMappingURL=index.js.map