# capacitor-callkeep

There is a working example app in the /example folder with its own [README](example/README.md) file. That is a great place to start if you consider using this plugin.

Capacitor port of react-native callkeep. iOS CallKit framework and Android ConnectionService for Capacitor. VoIP, FCM tokens, APNS tokens.

We're aiming to publish to npm by roughly September 23, 2021.

## Install

```bash
npm install capacitor-callkeep
npx cap sync
```

## API

<docgen-index>

* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [`setupAndroid(...)`](#setupandroid)
* [`supportConnectionService()`](#supportconnectionservice)
* [`registerPhoneAccount()`](#registerphoneaccount)
* [`hasPhoneAccount()`](#hasphoneaccount)
* [`hasDefaultPhoneAccount()`](#hasdefaultphoneaccount)
* [`checkPhoneAccountEnabled()`](#checkphoneaccountenabled)
* [`toggleAudioRouteSpeaker(...)`](#toggleaudioroutespeaker)
* [`setAvailable(...)`](#setavailable)
* [`registerAndroidEvents()`](#registerandroidevents)
* [`isConnectionServiceAvailable()`](#isconnectionserviceavailable)
* [`rejectCall(...)`](#rejectcall)
* [`hasOutgoingCall()`](#hasoutgoingcall)
* [`setForegroundServiceSettings(...)`](#setforegroundservicesettings)
* [`canMakeMultipleCalls(...)`](#canmakemultiplecalls)
* [`setCurrentCallActive(...)`](#setcurrentcallactive)
* [`backToForeground()`](#backtoforeground)
* [`setupIOS(...)`](#setupios)
* [`reportConnectedOutgoingCallWithUUID(...)`](#reportconnectedoutgoingcallwithuuid)
* [`reportConnectingOutgoingCallWithUUID(...)`](#reportconnectingoutgoingcallwithuuid)
* [`isCallActive(...)`](#iscallactive)
* [`setMutedCall(...)`](#setmutedcall)
* [`getInitialEvents()`](#getinitialevents)
* [`getCalls()`](#getcalls)
* [`checkIfBusy()`](#checkifbusy)
* [`checkSpeaker()`](#checkspeaker)
* [`checkPermissions()`](#checkpermissions)
* [`requestPermissions()`](#requestpermissions)
* [`answerIncomingCall(...)`](#answerincomingcall)
* [`displayIncomingCall(...)`](#displayincomingcall)
* [`startCall(...)`](#startcall)
* [`updateDisplay(...)`](#updatedisplay)
* [`reportEndCallWithUUID(...)`](#reportendcallwithuuid)
* [`endCall(...)`](#endcall)
* [`endAllCalls()`](#endallcalls)
* [`setReachable()`](#setreachable)
* [`getAudioRoutes()`](#getaudioroutes)
* [`setAudioRoute(...)`](#setaudioroute)
* [`setOnHold(...)`](#setonhold)
* [`sendDTMF(...)`](#senddtmf)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener(...)

```typescript
addListener(type: 'endCall', l: L<UUID>) => PLH
```

| Param      | Type                              |
| ---------- | --------------------------------- |
| **`type`** | <code>"endCall"</code>            |
| **`l`**    | <code>(t: UUID) =&gt; void</code> |

**Returns:** <code>Promise&lt;PluginListenerHandle&gt; & PluginListenerHandle</code>

--------------------


### addListener(...)

```typescript
addListener(type: 'answerCall', l: L<UUID>) => PLH
```

| Param      | Type                              |
| ---------- | --------------------------------- |
| **`type`** | <code>"answerCall"</code>         |
| **`l`**    | <code>(t: UUID) =&gt; void</code> |

**Returns:** <code>Promise&lt;PluginListenerHandle&gt; & PluginListenerHandle</code>

--------------------


### addListener(...)

```typescript
addListener(type: 'toggleHold', l: L<UUID & { hold: boolean; }>) => PLH
```

| Param      | Type                                                   |
| ---------- | ------------------------------------------------------ |
| **`type`** | <code>"toggleHold"</code>                              |
| **`l`**    | <code>(t: UUID & { hold: boolean; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;PluginListenerHandle&gt; & PluginListenerHandle</code>

--------------------


### addListener(...)

```typescript
addListener(type: 'setMutedCall', l: L<UUID & { muted: boolean; }>) => PLH
```

| Param      | Type                                                    |
| ---------- | ------------------------------------------------------- |
| **`type`** | <code>"setMutedCall"</code>                             |
| **`l`**    | <code>(t: UUID & { muted: boolean; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;PluginListenerHandle&gt; & PluginListenerHandle</code>

--------------------


### addListener(...)

```typescript
addListener(type: 'DTMFAction', l: L<UUID & { digits: string; }>) => PLH
```

| Param      | Type                                                    |
| ---------- | ------------------------------------------------------- |
| **`type`** | <code>"DTMFAction"</code>                               |
| **`l`**    | <code>(t: UUID & { digits: string; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;PluginListenerHandle&gt; & PluginListenerHandle</code>

--------------------


### addListener(...)

```typescript
addListener(type: 'startCall', l: L<CallInfo>) => PLH
```

| Param      | Type                                  |
| ---------- | ------------------------------------- |
| **`type`** | <code>"startCall"</code>              |
| **`l`**    | <code>(t: CallInfo) =&gt; void</code> |

**Returns:** <code>Promise&lt;PluginListenerHandle&gt; & PluginListenerHandle</code>

--------------------


### addListener(...)

```typescript
addListener(type: 'activateAudioSession', l: L<void>) => PLH
```

| Param      | Type                                |
| ---------- | ----------------------------------- |
| **`type`** | <code>"activateAudioSession"</code> |
| **`l`**    | <code>(t: void) =&gt; void</code>   |

**Returns:** <code>Promise&lt;PluginListenerHandle&gt; & PluginListenerHandle</code>

--------------------


### addListener(...)

```typescript
addListener(type: 'checkReachability', l: L<void>) => PLH
```

| Param      | Type                              |
| ---------- | --------------------------------- |
| **`type`** | <code>"checkReachability"</code>  |
| **`l`**    | <code>(t: void) =&gt; void</code> |

**Returns:** <code>Promise&lt;PluginListenerHandle&gt; & PluginListenerHandle</code>

--------------------


### addListener(...)

```typescript
addListener(type: 'showIncomingCallUi', l: L<CallInfo>) => PLH
```

NOTE: Only triggered if self managed

| Param      | Type                                  |
| ---------- | ------------------------------------- |
| **`type`** | <code>"showIncomingCallUi"</code>     |
| **`l`**    | <code>(t: CallInfo) =&gt; void</code> |

**Returns:** <code>Promise&lt;PluginListenerHandle&gt; & PluginListenerHandle</code>

--------------------


### addListener(...)

```typescript
addListener(type: 'silenceIncomingCall', l: L<CallInfo>) => PLH
```

| Param      | Type                                  |
| ---------- | ------------------------------------- |
| **`type`** | <code>"silenceIncomingCall"</code>    |
| **`l`**    | <code>(t: CallInfo) =&gt; void</code> |

**Returns:** <code>Promise&lt;PluginListenerHandle&gt; & PluginListenerHandle</code>

--------------------


### addListener(...)

```typescript
addListener(type: 'registration', l: L<{ token: string; }>) => PLH
```

iOS only

| Param      | Type                                            |
| ---------- | ----------------------------------------------- |
| **`type`** | <code>"registration"</code>                     |
| **`l`**    | <code>(t: { token: string; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;PluginListenerHandle&gt; & PluginListenerHandle</code>

--------------------


### setupAndroid(...)

```typescript
setupAndroid(options: AndroidOptions) => PV
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#androidoptions">AndroidOptions</a></code> |

--------------------


### supportConnectionService()

```typescript
supportConnectionService() => PB
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### registerPhoneAccount()

```typescript
registerPhoneAccount() => PV
```

--------------------


### hasPhoneAccount()

```typescript
hasPhoneAccount() => PB
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### hasDefaultPhoneAccount()

```typescript
hasDefaultPhoneAccount() => PB
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### checkPhoneAccountEnabled()

```typescript
checkPhoneAccountEnabled() => PB
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### toggleAudioRouteSpeaker(...)

```typescript
toggleAudioRouteSpeaker(o: { uuid: string; routeSpeaker: boolean; }) => PV
```

| Param   | Type                                                  |
| ------- | ----------------------------------------------------- |
| **`o`** | <code>{ uuid: string; routeSpeaker: boolean; }</code> |

--------------------


### setAvailable(...)

```typescript
setAvailable(o: { active: boolean; }) => PV
```

| Param   | Type                              |
| ------- | --------------------------------- |
| **`o`** | <code>{ active: boolean; }</code> |

--------------------


### registerAndroidEvents()

```typescript
registerAndroidEvents() => PV
```

--------------------


### isConnectionServiceAvailable()

```typescript
isConnectionServiceAvailable() => PB
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### rejectCall(...)

```typescript
rejectCall(o: { uuid: string; }) => PV
```

| Param   | Type                           |
| ------- | ------------------------------ |
| **`o`** | <code>{ uuid: string; }</code> |

--------------------


### hasOutgoingCall()

```typescript
hasOutgoingCall() => PB
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### setForegroundServiceSettings(...)

```typescript
setForegroundServiceSettings(o: { settings: Obj; }) => PV
```

| Param   | Type                                                     |
| ------- | -------------------------------------------------------- |
| **`o`** | <code>{ settings: Record&lt;string, string&gt;; }</code> |

--------------------


### canMakeMultipleCalls(...)

```typescript
canMakeMultipleCalls(o: { allow: boolean; }) => PV
```

| Param   | Type                             |
| ------- | -------------------------------- |
| **`o`** | <code>{ allow: boolean; }</code> |

--------------------


### setCurrentCallActive(...)

```typescript
setCurrentCallActive(o: { callUUID: string; }) => PV
```

| Param   | Type                               |
| ------- | ---------------------------------- |
| **`o`** | <code>{ callUUID: string; }</code> |

--------------------


### backToForeground()

```typescript
backToForeground() => PV
```

--------------------


### setupIOS(...)

```typescript
setupIOS(options: IOSOptions) => PV
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#iosoptions">IOSOptions</a></code> |

--------------------


### reportConnectedOutgoingCallWithUUID(...)

```typescript
reportConnectedOutgoingCallWithUUID(args: { uuid: string; }) => PV
```

| Param      | Type                           |
| ---------- | ------------------------------ |
| **`args`** | <code>{ uuid: string; }</code> |

--------------------


### reportConnectingOutgoingCallWithUUID(...)

```typescript
reportConnectingOutgoingCallWithUUID(o: { uuid: string; }) => PV
```

| Param   | Type                           |
| ------- | ------------------------------ |
| **`o`** | <code>{ uuid: string; }</code> |

--------------------


### isCallActive(...)

```typescript
isCallActive(o: { uuid: string; }) => PB
```

| Param   | Type                           |
| ------- | ------------------------------ |
| **`o`** | <code>{ uuid: string; }</code> |

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### setMutedCall(...)

```typescript
setMutedCall(o: { uuid: string; muted: boolean; }) => PV
```

| Param   | Type                                           |
| ------- | ---------------------------------------------- |
| **`o`** | <code>{ uuid: string; muted: boolean; }</code> |

--------------------


### getInitialEvents()

```typescript
getInitialEvents() => Promise<{ name: string; body: string; }[]>
```

**Returns:** <code>Promise&lt;{ name: string; body: string; }[]&gt;</code>

--------------------


### getCalls()

```typescript
getCalls() => Promise<Call[]>
```

**Returns:** <code>Promise&lt;Call[]&gt;</code>

--------------------


### checkIfBusy()

```typescript
checkIfBusy() => PB
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### checkSpeaker()

```typescript
checkSpeaker() => PB
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

--------------------


### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

--------------------


### answerIncomingCall(...)

```typescript
answerIncomingCall(o: { uuid: string; }) => PV
```

| Param   | Type                           |
| ------- | ------------------------------ |
| **`o`** | <code>{ uuid: string; }</code> |

--------------------


### displayIncomingCall(...)

```typescript
displayIncomingCall(o: { uuid: string; number: string; callerName: string; handleType?: HandleType; hasVideo?: boolean; options?: IncomingCallOptions; }) => PV
```

| Param   | Type                                                                                                                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`o`** | <code>{ uuid: string; number: string; callerName: string; handleType?: "number" \| "generic" \| "email"; hasVideo?: boolean; options?: <a href="#incomingcalloptions">IncomingCallOptions</a>; }</code> |

--------------------


### startCall(...)

```typescript
startCall(o: { uuid: string; handle: string; contactIdentifier?: string; handleType?: HandleType; hasVideo?: boolean; }) => PV
```

| Param   | Type                                                                                                                                          |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **`o`** | <code>{ uuid: string; handle: string; contactIdentifier?: string; handleType?: "number" \| "generic" \| "email"; hasVideo?: boolean; }</code> |

--------------------


### updateDisplay(...)

```typescript
updateDisplay(o: { uuid: string; displayName: string; handle: string; options?: IncomingCallOptions; }) => PV
```

| Param   | Type                                                                                                                                  |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **`o`** | <code>{ uuid: string; displayName: string; handle: string; options?: <a href="#incomingcalloptions">IncomingCallOptions</a>; }</code> |

--------------------


### reportEndCallWithUUID(...)

```typescript
reportEndCallWithUUID(o: { uuid: string; reason: number; }) => PV
```

| Param   | Type                                           |
| ------- | ---------------------------------------------- |
| **`o`** | <code>{ uuid: string; reason: number; }</code> |

--------------------


### endCall(...)

```typescript
endCall(o: { uuid: string; }) => PV
```

| Param   | Type                           |
| ------- | ------------------------------ |
| **`o`** | <code>{ uuid: string; }</code> |

--------------------


### endAllCalls()

```typescript
endAllCalls() => PV
```

--------------------


### setReachable()

```typescript
setReachable() => PV
```

--------------------


### getAudioRoutes()

```typescript
getAudioRoutes() => PV
```

--------------------


### setAudioRoute(...)

```typescript
setAudioRoute(o: { uuid: string; inputName: string; }) => PV
```

| Param   | Type                                              |
| ------- | ------------------------------------------------- |
| **`o`** | <code>{ uuid: string; inputName: string; }</code> |

--------------------


### setOnHold(...)

```typescript
setOnHold(o: { uuid: string; held: boolean; }) => PV
```

| Param   | Type                                          |
| ------- | --------------------------------------------- |
| **`o`** | <code>{ uuid: string; held: boolean; }</code> |

--------------------


### sendDTMF(...)

```typescript
sendDTMF(o: { uuid: string; key: string; }) => PV
```

sendDTMF is used to send DTMF tones to the PBX.

| Param   | Type                                        |
| ------- | ------------------------------------------- |
| **`o`** | <code>{ uuid: string; key: string; }</code> |

--------------------


### Interfaces


#### AndroidOptions

| Prop                    | Type                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| **`selfManaged`**       | <code>boolean</code>                                                                                          |
| **`imageName`**         | <code>string</code>                                                                                           |
| **`foregroundService`** | <code>{ channelId: string; channelName: string; notificationTitle: string; notificationIcon: string; }</code> |


#### IOSOptions

| Prop                           | Type                 |
| ------------------------------ | -------------------- |
| **`appName`**                  | <code>string</code>  |
| **`imageName`**                | <code>string</code>  |
| **`supportsVideo`**            | <code>boolean</code> |
| **`maximumCallGroups`**        | <code>string</code>  |
| **`maximumCallsPerCallGroup`** | <code>string</code>  |
| **`ringtoneSound`**            | <code>string</code>  |
| **`includesCallsInRecents`**   | <code>boolean</code> |


#### Call

| Prop               | Type                 |
| ------------------ | -------------------- |
| **`callUUID`**     | <code>string</code>  |
| **`outgoing`**     | <code>boolean</code> |
| **`onHold`**       | <code>boolean</code> |
| **`hasConnected`** | <code>boolean</code> |
| **`hasEnded`**     | <code>boolean</code> |


#### PermissionStatus

| Prop                   | Type                                                                      |
| ---------------------- | ------------------------------------------------------------------------- |
| **`readPhoneNumbers`** | <code>"prompt" \| "prompt-with-rationale" \| "granted" \| "denied"</code> |
| **`readPhoneState`**   | <code>"prompt" \| "prompt-with-rationale" \| "granted" \| "denied"</code> |
| **`manageOwnCalls`**   | <code>"prompt" \| "prompt-with-rationale" \| "granted" \| "denied"</code> |
| **`callPhone`**        | <code>"prompt" \| "prompt-with-rationale" \| "granted" \| "denied"</code> |
| **`recordAudio`**      | <code>"prompt" \| "prompt-with-rationale" \| "granted" \| "denied"</code> |


#### IncomingCallOptions

| Prop      | Type                                                                                                                          |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **`ios`** | <code>{ supportsHolding?: boolean; supportsDTMF?: boolean; supportsGrouping?: boolean; supportsUngrouping?: boolean; }</code> |

</docgen-api>
