import type { PluginListenerHandle, PermissionState } from '@capacitor/core';
export interface PermissionStatus {
    readPhoneNumbers: PermissionState;
    readPhoneState: PermissionState;
    manageOwnCalls: PermissionState;
    callPhone: PermissionState;
    recordAudio: PermissionState;
}
declare type PLH = Promise<PluginListenerHandle> & PluginListenerHandle;
declare type L<T> = (t: T) => void;
declare type HandleType = 'generic' | 'number' | 'email';
declare type UUID = {
    callUUID: string;
};
declare type CallInfo = {
    callUUID: string;
    handle: string;
    name: string;
};
interface AndroidOptions {
    selfManaged?: boolean;
    imageName?: string;
    foregroundService?: {
        channelId: string;
        channelName: string;
        notificationTitle: string;
        notificationIcon: string;
    };
}
interface IOSOptions {
    appName: string;
    imageName?: string;
    supportsVideo?: boolean;
    maximumCallGroups?: string;
    maximumCallsPerCallGroup?: string;
    ringtoneSound?: string;
    includesCallsInRecents?: boolean;
}
export interface CapCallKeepPlugin {
    addListener(type: 'endCall', l: L<UUID>): PLH;
    addListener(type: 'answerCall', l: L<UUID>): PLH;
    addListener(type: 'toggleHold', l: L<UUID & {
        hold: boolean;
    }>): PLH;
    addListener(type: 'setMutedCall', l: L<UUID & {
        muted: boolean;
    }>): PLH;
    addListener(type: 'DTMFAction', l: L<UUID & {
        digits: string;
    }>): PLH;
    addListener(type: 'startCall', l: L<CallInfo>): PLH;
    addListener(type: 'activateAudioSession', l: L<void>): PLH;
    addListener(type: 'checkReachability', l: L<void>): PLH;
    /** NOTE: Only triggered if self managed */
    addListener(type: 'showIncomingCallUi', l: L<CallInfo>): PLH;
    addListener(type: 'silenceIncomingCall', l: L<CallInfo>): PLH;
    /** iOS only */
    addListener(type: 'registration', l: L<{
        token: string;
    }>): PLH;
    setupAndroid(options: AndroidOptions): PV;
    supportConnectionService(): PB;
    registerPhoneAccount(): PV;
    hasPhoneAccount(): PB;
    hasDefaultPhoneAccount(): PB;
    checkPhoneAccountEnabled(): PB;
    toggleAudioRouteSpeaker(o: {
        uuid: string;
        routeSpeaker: boolean;
    }): PV;
    setAvailable(o: {
        active: boolean;
    }): PV;
    registerAndroidEvents(): PV;
    isConnectionServiceAvailable(): PB;
    rejectCall(o: {
        uuid: string;
    }): PV;
    hasOutgoingCall(): PB;
    setForegroundServiceSettings(o: {
        settings: Obj;
    }): PV;
    canMakeMultipleCalls(o: {
        allow: boolean;
    }): PV;
    setCurrentCallActive(o: {
        callUUID: string;
    }): PV;
    backToForeground(): PV;
    setupIOS(options: IOSOptions): PV;
    reportConnectedOutgoingCallWithUUID(args: {
        uuid: string;
    }): PV;
    reportConnectingOutgoingCallWithUUID(o: {
        uuid: string;
    }): PV;
    isCallActive(o: {
        uuid: string;
    }): PB;
    setMutedCall(o: {
        uuid: string;
        muted: boolean;
    }): PV;
    getInitialEvents(): Promise<{
        name: string;
        body: string;
    }[]>;
    getCalls(): Promise<Call[]>;
    checkIfBusy(): PB;
    checkSpeaker(): PB;
    checkPermissions(): Promise<PermissionStatus>;
    requestPermissions(): Promise<PermissionStatus>;
    answerIncomingCall(o: {
        uuid: string;
    }): PV;
    displayIncomingCall(o: {
        uuid: string;
        number: string;
        callerName: string;
        handleType?: HandleType;
        hasVideo?: boolean;
        options?: IncomingCallOptions;
    }): PV;
    startCall(o: {
        uuid: string;
        handle: string;
        contactIdentifier?: string;
        handleType?: HandleType;
        hasVideo?: boolean;
    }): PV;
    updateDisplay(o: {
        uuid: string;
        displayName: string;
        handle: string;
        options?: IncomingCallOptions;
    }): PV;
    reportEndCallWithUUID(o: {
        uuid: string;
        reason: number;
    }): PV;
    endCall(o: {
        uuid: string;
    }): PV;
    endAllCalls(): PV;
    setReachable(): PV;
    getAudioRoutes(): PV;
    setAudioRoute(o: {
        uuid: string;
        inputName: string;
    }): PV;
    setOnHold(o: {
        uuid: string;
        held: boolean;
    }): PV;
    /** sendDTMF is used to send DTMF tones to the PBX. */
    sendDTMF(o: {
        uuid: string;
        key: string;
    }): PV;
}
export declare const CONSTANTS: {
    END_CALL_REASONS: {
        FAILED: number;
        REMOTE_ENDED: number;
        UNANSWERED: number;
        ANSWERED_ELSEWHERE: number;
        DECLINED_ELSEWHERE: number;
        MISSED: number;
    };
};
declare type PV = Promise<void>;
declare type PB = Promise<{
    value: boolean;
}>;
interface Call {
    callUUID: string;
    outgoing: boolean;
    onHold: boolean;
    hasConnected: boolean;
    hasEnded: boolean;
}
declare type Obj = Record<string, string>;
interface IncomingCallOptions {
    ios?: {
        supportsHolding?: boolean;
        supportsDTMF?: boolean;
        supportsGrouping?: boolean;
        supportsUngrouping?: boolean;
    };
}
export {};
