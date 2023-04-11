import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSettingTemplateSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetSettingTemplateRequest extends SpeakeasyBase {
    /**
     * Provide the name of the field to use to filter the response. For example, if you provide "description" as the value of the field, you will get a response similar to the following: {“description”: “template description”}.
     */
    customQueryFields?: string;
    /**
     * Unique identifier of the template.
     */
    templateId: string;
}
export declare class GetSettingTemplate200ApplicationXMLPolicyAdHocCallRecording extends SpeakeasyBase {
    /**
     * Allow current extension to record and save calls in the cloud.
     */
    enable?: boolean;
    /**
     * Play a prompt to call participants when the recording has started.
     */
    recordingStartPrompt?: boolean;
    /**
     * Allow call recording transcription.
     */
    recordingTranscription?: boolean;
}
export declare class GetSettingTemplate200ApplicationXMLPolicyAutoCallRecording extends SpeakeasyBase {
    /**
     * Enable automatic call recording.
     */
    enable?: boolean;
    /**
     * Values: inbound, outbound, both.
     */
    recordingCalls?: string;
    /**
     * Play a prompt to call participants when the recording has started.
     */
    recordingStartPrompt?: boolean;
    /**
     * Allow call recording transcription.
     */
    recordingTranscription?: boolean;
}
export declare class GetSettingTemplate200ApplicationXMLPolicySms extends SpeakeasyBase {
    /**
     * Allow user to send and receive messages.
     */
    enable?: boolean;
    internationalSms?: boolean;
}
export declare class GetSettingTemplate200ApplicationXMLPolicyVoicemail extends SpeakeasyBase {
    /**
     * Allow voicemail transcription.
     */
    allowTranscription?: boolean;
    /**
     * Allow current extension to access, receive, or share voicemail.
     */
    enable?: boolean;
}
export declare class GetSettingTemplate200ApplicationXMLPolicy extends SpeakeasyBase {
    adHocCallRecording?: GetSettingTemplate200ApplicationXMLPolicyAdHocCallRecording;
    autoCallRecording?: GetSettingTemplate200ApplicationXMLPolicyAutoCallRecording;
    sms?: GetSettingTemplate200ApplicationXMLPolicySms;
    voicemail?: GetSettingTemplate200ApplicationXMLPolicyVoicemail;
}
export declare class GetSettingTemplate200ApplicationXMLProfile extends SpeakeasyBase {
    /**
     * The area code from which the phone account was created.
     */
    areaCode?: string;
    /**
     * Name of the country where the template was created.
     */
    country?: string;
}
/**
 * The type of template being queried. Values: `user`, `group`, `auto receptionist` `common area`,`zr`, `interop`.
 */
export declare enum GetSettingTemplate200ApplicationXMLTypeEnum {
    User = "user",
    Group = "group",
    AutoReceptionist = "autoReceptionist",
    CommonArea = "commonArea",
    Zr = "zr",
    Interop = "interop"
}
/**
 * When a call is not answered:<br>
 *
 * @remarks
 * 0-Forward to voicemail;<br>
 * 1-Play a message, then disconnect; <br>
 * 9-Disconnect; <br>
 * 26-Forward to External Contacts; <br>
 * 50-Forward to another extension
 */
export declare enum GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursBusinessHourActionEnum {
    Zero = "0",
    One = "1",
    Nine = "9",
    TwentySix = "26",
    Fifty = "50"
}
/**
 * Values:<br>
 *
 * @remarks
 * 1-user,<br>
 * 2-callQueue, <br>
 * 3-autoReceptionist,<br>
 * 4-commonAreaPhone,<br>
 * 5-zoomRoom, <br>
 * 7-sharedLineGroup
 */
export declare enum GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum {
    User = "user",
    ZoomRoom = "zoomRoom",
    CommonAreaPhone = "commonAreaPhone",
    AutoReceptionist = "autoReceptionist",
    CallQueue = "callQueue",
    SharedLineGroup = "sharedLineGroup"
}
/**
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
 */
export declare class GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursConnectToOperator extends SpeakeasyBase {
    /**
     * Enable connect to operator.
     */
    enable?: boolean;
    /**
     * Phone extension ID of the user, zoomRoom, commonAreaPhone, autoReceptionist, callQueue or sharedLineGroup.
     */
    id?: string;
    /**
     * Values:<br>
     *
     * @remarks
     * 1-user,<br>
     * 2-callQueue, <br>
     * 3-autoReceptionist,<br>
     * 4-commonAreaPhone,<br>
     * 5-zoomRoom, <br>
     * 7-sharedLineGroup
     */
    type?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum;
}
/**
 * Values:<br>
 *
 * @remarks
 * 1-24 Hours,<br>
 * 2-customized hours
 */
export declare enum GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursCustomHoursTypeEnum {
    One = "1",
    Two = "2"
}
/**
 * Values: 1-7 sun-sat
 */
export declare enum GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursCustomHoursWeekdayEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
export declare class GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursCustomHours extends SpeakeasyBase {
    /**
     * Values:<br>
     *
     * @remarks
     * hh:mm
     */
    from?: string;
    /**
     * Values:<br>
     *
     * @remarks
     * hh:mm
     */
    to?: string;
    /**
     * Values:<br>
     *
     * @remarks
     * 1-24 Hours,<br>
     * 2-customized hours
     */
    type?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursCustomHoursTypeEnum;
    /**
     * Values: 1-7 sun-sat
     */
    weekday?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursCustomHoursWeekdayEnum;
}
/**
 * Call Handling Ring Mode:<br>
 *
 * @remarks
 * 0-Simultaneous,<br>
 * 1-Sequential
 */
export declare enum GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursRingTypeEnum {
    Zero = "0",
    One = "1"
}
/**
 * Ringing Duration for Each Device in seconds. Values:<br>
 *
 * @remarks
 * 15,20,25,30,35,40,45,50,55,60
 */
export declare enum GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursRingingDurationEnum {
    Fifteen = "15",
    Twenty = "20",
    TwentyFive = "25",
    Thirty = "30",
    ThirtyFive = "35",
    Forty = "40",
    FortyFive = "45",
    Fifty = "50",
    FiftyFive = "55",
    Sixty = "60"
}
/**
 * Values:<br>
 *
 * @remarks
 * 1-24 Hours, 7 Days a Week;<br>
 * 2-Custom Hours
 */
export declare enum GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursTypeEnum {
    One = "1",
    Two = "2"
}
export declare class GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHours extends SpeakeasyBase {
    /**
     * When a call is not answered:<br>
     *
     * @remarks
     * 0-Forward to voicemail;<br>
     * 1-Play a message, then disconnect; <br>
     * 9-Disconnect; <br>
     * 26-Forward to External Contacts; <br>
     * 50-Forward to another extension
     */
    businessHourAction?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursBusinessHourActionEnum;
    /**
     * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
     */
    connectToOperator?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursConnectToOperator;
    customHours?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursCustomHours[];
    /**
     * Call Handling Ring Mode:<br>
     *
     * @remarks
     * 0-Simultaneous,<br>
     * 1-Sequential
     */
    ringType?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursRingTypeEnum;
    /**
     * Ringing Duration for Each Device in seconds. Values:<br>
     *
     * @remarks
     * 15,20,25,30,35,40,45,50,55,60
     */
    ringingDuration?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursRingingDurationEnum;
    /**
     * Values:<br>
     *
     * @remarks
     * 1-24 Hours, 7 Days a Week;<br>
     * 2-Custom Hours
     */
    type?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHoursTypeEnum;
}
/**
 * Action to take when a call is not answered:<br>
 *
 * @remarks
 * 0-Forward to voicemail; <br>
 * 1-Play a message, then disconnect; <br>
 * 9-Disconnect; <br>
 * 26-Forward to External Contacts; <br>
 * 50-Forward to another extension
 *
 */
export declare enum GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingCloseHoursCloseHourActionEnum {
    Zero = "0",
    One = "1",
    Nine = "9",
    TwentySix = "26",
    Fifty = "50"
}
/**
 * Values:<br>
 *
 * @remarks
 * 1-user,<br>
 * 2-callQueue, <br>
 * 3-autoReceptionist,<br>
 * 4-commonAreaPhone,<br>
 * 5-zoomRoom, <br>
 * 7-sharedLineGroup
 */
export declare enum GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum {
    User = "user",
    ZoomRoom = "zoomRoom",
    CommonAreaPhone = "commonAreaPhone",
    AutoReceptionist = "autoReceptionist",
    CallQueue = "callQueue",
    SharedLineGroup = "sharedLineGroup"
}
/**
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
 */
export declare class GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingCloseHoursConnectToOperator extends SpeakeasyBase {
    enable?: boolean;
    /**
     * Phone extension ID of the user, zoomRoom, commonAreaPhone, autoReceptionist, callQueue or sharedLineGroup.
     */
    id?: string;
    /**
     * Values:<br>
     *
     * @remarks
     * 1-user,<br>
     * 2-callQueue, <br>
     * 3-autoReceptionist,<br>
     * 4-commonAreaPhone,<br>
     * 5-zoomRoom, <br>
     * 7-sharedLineGroup
     */
    type?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum;
}
/**
 * Max Wait Time in seconds. Values:<br>
 *
 * @remarks
 * 15,20,25,30,35,40,45,50,55,60
 */
export declare enum GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum {
    Fifteen = "15",
    Twenty = "20",
    TwentyFive = "25",
    Thirty = "30",
    ThirtyFive = "35",
    Forty = "40",
    FortyFive = "45",
    Fifty = "50",
    FiftyFive = "55",
    Sixty = "60"
}
export declare class GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingCloseHours extends SpeakeasyBase {
    /**
     * Action to take when a call is not answered:<br>
     *
     * @remarks
     * 0-Forward to voicemail; <br>
     * 1-Play a message, then disconnect; <br>
     * 9-Disconnect; <br>
     * 26-Forward to External Contacts; <br>
     * 50-Forward to another extension
     *
     */
    closeHourAction?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingCloseHoursCloseHourActionEnum;
    /**
     * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
     */
    connectToOperator?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingCloseHoursConnectToOperator;
    /**
     * Max Wait Time in seconds. Values:<br>
     *
     * @remarks
     * 15,20,25,30,35,40,45,50,55,60
     */
    maxWaitTime?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum;
}
export declare class GetSettingTemplate200ApplicationXMLUserSettingsCallHandling extends SpeakeasyBase {
    businessHours?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingBusinessHours;
    closeHours?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandlingCloseHours;
}
export declare class GetSettingTemplate200ApplicationXMLUserSettingsDeskPhone extends SpeakeasyBase {
    /**
     * Pin code.
     */
    pinCode?: string;
}
/**
 * The value of this field can be either `default` or `disable`.
 *
 * @remarks
 *
 * * `default`: This means that the hold music can be set using the [audio library](https://support.zoom.us/hc/en-us/articles/360028212652-Using-the-audio-library-to-customize-greetings-and-hold-music).
 *
 * * `disable`: This means that the hold music is disabled.
 */
export declare enum GetSettingTemplate200ApplicationXMLUserSettingsHoldMusicEnum {
    Default = "default",
    Disable = "disable"
}
export declare class GetSettingTemplate200ApplicationXMLUserSettings extends SpeakeasyBase {
    /**
     * Audio prompt language code.<br> American English: `en-US`<br>
     *
     * @remarks
     * British English: `en-GB`<br>
     * Español americano: `es-US`<br>
     * Français canadien: `fr-CA`<br>
     * Dansk: `da-DK`<br>
     * Deutsch: `de-DE`<br>
     * Español: `es-ES`<br>
     * Français: `fr-FR`<br>
     * Italiano: `it-IT`<br>
     * Nederlands: `nl-NL`<br>
     * Portugues portugal: `pt-PT`<br>
     * Japanese: `ja-JP`<br>
     * Korean: `ko-KO`<br>
     * Portugues brasil: `pt-BR`<br>
     * Chinese: `zh-CN`<br>
     * Taiwanese: `zh-TW`<br>
     */
    audioPromptLanguage?: string;
    /**
     * Block Calls without Caller ID.
     */
    blockCallsWithoutCallerId?: boolean;
    callHandling?: GetSettingTemplate200ApplicationXMLUserSettingsCallHandling;
    deskPhone?: GetSettingTemplate200ApplicationXMLUserSettingsDeskPhone;
    /**
     * The value of this field can be either `default` or `disable`.
     *
     * @remarks
     *
     * * `default`: This means that the hold music can be set using the [audio library](https://support.zoom.us/hc/en-us/articles/360028212652-Using-the-audio-library-to-customize-greetings-and-hold-music).
     *
     * * `disable`: This means that the hold music is disabled.
     */
    holdMusic?: GetSettingTemplate200ApplicationXMLUserSettingsHoldMusicEnum;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * OK
 */
export declare class GetSettingTemplate200ApplicationXML extends SpeakeasyBase {
    /**
     * The description of the template.
     */
    description?: string;
    /**
     * Specify the template ID.
     */
    id?: string;
    /**
     * Specify the name of the template.
     */
    name?: string;
    policy?: GetSettingTemplate200ApplicationXMLPolicy;
    profile?: GetSettingTemplate200ApplicationXMLProfile;
    /**
     * The type of template being queried. Values: `user`, `group`, `auto receptionist` `common area`,`zr`, `interop`.
     */
    type?: GetSettingTemplate200ApplicationXMLTypeEnum;
    userSettings?: GetSettingTemplate200ApplicationXMLUserSettings;
}
export declare class GetSettingTemplate200ApplicationJSONPolicyAdHocCallRecording extends SpeakeasyBase {
    /**
     * Allow current extension to record and save calls in the cloud.
     */
    enable?: boolean;
    /**
     * Play a prompt to call participants when the recording has started.
     */
    recordingStartPrompt?: boolean;
    /**
     * Allow call recording transcription.
     */
    recordingTranscription?: boolean;
}
export declare class GetSettingTemplate200ApplicationJSONPolicyAutoCallRecording extends SpeakeasyBase {
    /**
     * Enable automatic call recording.
     */
    enable?: boolean;
    /**
     * Values: inbound, outbound, both.
     */
    recordingCalls?: string;
    /**
     * Play a prompt to call participants when the recording has started.
     */
    recordingStartPrompt?: boolean;
    /**
     * Allow call recording transcription.
     */
    recordingTranscription?: boolean;
}
export declare class GetSettingTemplate200ApplicationJSONPolicySms extends SpeakeasyBase {
    /**
     * Allow user to send and receive messages.
     */
    enable?: boolean;
    internationalSms?: boolean;
}
export declare class GetSettingTemplate200ApplicationJSONPolicyVoicemail extends SpeakeasyBase {
    /**
     * Allow voicemail transcription.
     */
    allowTranscription?: boolean;
    /**
     * Allow current extension to access, receive, or share voicemail.
     */
    enable?: boolean;
}
export declare class GetSettingTemplate200ApplicationJSONPolicy extends SpeakeasyBase {
    adHocCallRecording?: GetSettingTemplate200ApplicationJSONPolicyAdHocCallRecording;
    autoCallRecording?: GetSettingTemplate200ApplicationJSONPolicyAutoCallRecording;
    sms?: GetSettingTemplate200ApplicationJSONPolicySms;
    voicemail?: GetSettingTemplate200ApplicationJSONPolicyVoicemail;
}
export declare class GetSettingTemplate200ApplicationJSONProfile extends SpeakeasyBase {
    /**
     * The area code from which the phone account was created.
     */
    areaCode?: string;
    /**
     * Name of the country where the template was created.
     */
    country?: string;
}
/**
 * The type of template being queried. Values: `user`, `group`, `auto receptionist` `common area`,`zr`, `interop`.
 */
export declare enum GetSettingTemplate200ApplicationJSONTypeEnum {
    User = "user",
    Group = "group",
    AutoReceptionist = "autoReceptionist",
    CommonArea = "commonArea",
    Zr = "zr",
    Interop = "interop"
}
/**
 * When a call is not answered:<br>
 *
 * @remarks
 * 0-Forward to voicemail;<br>
 * 1-Play a message, then disconnect; <br>
 * 9-Disconnect; <br>
 * 26-Forward to External Contacts; <br>
 * 50-Forward to another extension
 */
export declare enum GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursBusinessHourActionEnum {
    Zero = "0",
    One = "1",
    Nine = "9",
    TwentySix = "26",
    Fifty = "50"
}
/**
 * Values:<br>
 *
 * @remarks
 * 1-user,<br>
 * 2-callQueue, <br>
 * 3-autoReceptionist,<br>
 * 4-commonAreaPhone,<br>
 * 5-zoomRoom, <br>
 * 7-sharedLineGroup
 */
export declare enum GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum {
    User = "user",
    ZoomRoom = "zoomRoom",
    CommonAreaPhone = "commonAreaPhone",
    AutoReceptionist = "autoReceptionist",
    CallQueue = "callQueue",
    SharedLineGroup = "sharedLineGroup"
}
/**
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
 */
export declare class GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator extends SpeakeasyBase {
    /**
     * Enable connect to operator.
     */
    enable?: boolean;
    /**
     * Phone extension ID of the user, zoomRoom, commonAreaPhone, autoReceptionist, callQueue or sharedLineGroup.
     */
    id?: string;
    /**
     * Values:<br>
     *
     * @remarks
     * 1-user,<br>
     * 2-callQueue, <br>
     * 3-autoReceptionist,<br>
     * 4-commonAreaPhone,<br>
     * 5-zoomRoom, <br>
     * 7-sharedLineGroup
     */
    type?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum;
}
/**
 * Values:<br>
 *
 * @remarks
 * 1-24 Hours,<br>
 * 2-customized hours
 */
export declare enum GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHoursTypeEnum {
    One = "1",
    Two = "2"
}
/**
 * Values: 1-7 sun-sat
 */
export declare enum GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHoursWeekdayEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
export declare class GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHours extends SpeakeasyBase {
    /**
     * Values:<br>
     *
     * @remarks
     * hh:mm
     */
    from?: string;
    /**
     * Values:<br>
     *
     * @remarks
     * hh:mm
     */
    to?: string;
    /**
     * Values:<br>
     *
     * @remarks
     * 1-24 Hours,<br>
     * 2-customized hours
     */
    type?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHoursTypeEnum;
    /**
     * Values: 1-7 sun-sat
     */
    weekday?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHoursWeekdayEnum;
}
/**
 * Call Handling Ring Mode:<br>
 *
 * @remarks
 * 0-Simultaneous,<br>
 * 1-Sequential
 */
export declare enum GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum {
    Zero = "0",
    One = "1"
}
/**
 * Ringing Duration for Each Device in seconds. Values:<br>
 *
 * @remarks
 * 15,20,25,30,35,40,45,50,55,60
 */
export declare enum GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum {
    Fifteen = "15",
    Twenty = "20",
    TwentyFive = "25",
    Thirty = "30",
    ThirtyFive = "35",
    Forty = "40",
    FortyFive = "45",
    Fifty = "50",
    FiftyFive = "55",
    Sixty = "60"
}
/**
 * Values:<br>
 *
 * @remarks
 * 1-24 Hours, 7 Days a Week;<br>
 * 2-Custom Hours
 */
export declare enum GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursTypeEnum {
    One = "1",
    Two = "2"
}
export declare class GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHours extends SpeakeasyBase {
    /**
     * When a call is not answered:<br>
     *
     * @remarks
     * 0-Forward to voicemail;<br>
     * 1-Play a message, then disconnect; <br>
     * 9-Disconnect; <br>
     * 26-Forward to External Contacts; <br>
     * 50-Forward to another extension
     */
    businessHourAction?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursBusinessHourActionEnum;
    /**
     * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
     */
    connectToOperator?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator;
    customHours?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHours[];
    /**
     * Call Handling Ring Mode:<br>
     *
     * @remarks
     * 0-Simultaneous,<br>
     * 1-Sequential
     */
    ringType?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum;
    /**
     * Ringing Duration for Each Device in seconds. Values:<br>
     *
     * @remarks
     * 15,20,25,30,35,40,45,50,55,60
     */
    ringingDuration?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum;
    /**
     * Values:<br>
     *
     * @remarks
     * 1-24 Hours, 7 Days a Week;<br>
     * 2-Custom Hours
     */
    type?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHoursTypeEnum;
}
/**
 * Action to take when a call is not answered:<br>
 *
 * @remarks
 * 0-Forward to voicemail; <br>
 * 1-Play a message, then disconnect; <br>
 * 9-Disconnect; <br>
 * 26-Forward to External Contacts; <br>
 * 50-Forward to another extension
 *
 */
export declare enum GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursCloseHourActionEnum {
    Zero = "0",
    One = "1",
    Nine = "9",
    TwentySix = "26",
    Fifty = "50"
}
/**
 * Values:<br>
 *
 * @remarks
 * 1-user,<br>
 * 2-callQueue, <br>
 * 3-autoReceptionist,<br>
 * 4-commonAreaPhone,<br>
 * 5-zoomRoom, <br>
 * 7-sharedLineGroup
 */
export declare enum GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum {
    User = "user",
    ZoomRoom = "zoomRoom",
    CommonAreaPhone = "commonAreaPhone",
    AutoReceptionist = "autoReceptionist",
    CallQueue = "callQueue",
    SharedLineGroup = "sharedLineGroup"
}
/**
 * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
 */
export declare class GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator extends SpeakeasyBase {
    enable?: boolean;
    /**
     * Phone extension ID of the user, zoomRoom, commonAreaPhone, autoReceptionist, callQueue or sharedLineGroup.
     */
    id?: string;
    /**
     * Values:<br>
     *
     * @remarks
     * 1-user,<br>
     * 2-callQueue, <br>
     * 3-autoReceptionist,<br>
     * 4-commonAreaPhone,<br>
     * 5-zoomRoom, <br>
     * 7-sharedLineGroup
     */
    type?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum;
}
/**
 * Max Wait Time in seconds. Values:<br>
 *
 * @remarks
 * 15,20,25,30,35,40,45,50,55,60
 */
export declare enum GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum {
    Fifteen = "15",
    Twenty = "20",
    TwentyFive = "25",
    Thirty = "30",
    ThirtyFive = "35",
    Forty = "40",
    FortyFive = "45",
    Fifty = "50",
    FiftyFive = "55",
    Sixty = "60"
}
export declare class GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHours extends SpeakeasyBase {
    /**
     * Action to take when a call is not answered:<br>
     *
     * @remarks
     * 0-Forward to voicemail; <br>
     * 1-Play a message, then disconnect; <br>
     * 9-Disconnect; <br>
     * 26-Forward to External Contacts; <br>
     * 50-Forward to another extension
     *
     */
    closeHourAction?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursCloseHourActionEnum;
    /**
     * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
     */
    connectToOperator?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator;
    /**
     * Max Wait Time in seconds. Values:<br>
     *
     * @remarks
     * 15,20,25,30,35,40,45,50,55,60
     */
    maxWaitTime?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum;
}
export declare class GetSettingTemplate200ApplicationJSONUserSettingsCallHandling extends SpeakeasyBase {
    businessHours?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingBusinessHours;
    closeHours?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandlingCloseHours;
}
export declare class GetSettingTemplate200ApplicationJSONUserSettingsDeskPhone extends SpeakeasyBase {
    /**
     * Pin code.
     */
    pinCode?: string;
}
/**
 * The value of this field can be either `default` or `disable`.
 *
 * @remarks
 *
 * * `default`: This means that the hold music can be set using the [audio library](https://support.zoom.us/hc/en-us/articles/360028212652-Using-the-audio-library-to-customize-greetings-and-hold-music).
 *
 * * `disable`: This means that the hold music is disabled.
 */
export declare enum GetSettingTemplate200ApplicationJSONUserSettingsHoldMusicEnum {
    Default = "default",
    Disable = "disable"
}
export declare class GetSettingTemplate200ApplicationJSONUserSettings extends SpeakeasyBase {
    /**
     * Audio prompt language code.<br> American English: `en-US`<br>
     *
     * @remarks
     * British English: `en-GB`<br>
     * Español americano: `es-US`<br>
     * Français canadien: `fr-CA`<br>
     * Dansk: `da-DK`<br>
     * Deutsch: `de-DE`<br>
     * Español: `es-ES`<br>
     * Français: `fr-FR`<br>
     * Italiano: `it-IT`<br>
     * Nederlands: `nl-NL`<br>
     * Portugues portugal: `pt-PT`<br>
     * Japanese: `ja-JP`<br>
     * Korean: `ko-KO`<br>
     * Portugues brasil: `pt-BR`<br>
     * Chinese: `zh-CN`<br>
     * Taiwanese: `zh-TW`<br>
     */
    audioPromptLanguage?: string;
    /**
     * Block Calls without Caller ID.
     */
    blockCallsWithoutCallerId?: boolean;
    callHandling?: GetSettingTemplate200ApplicationJSONUserSettingsCallHandling;
    deskPhone?: GetSettingTemplate200ApplicationJSONUserSettingsDeskPhone;
    /**
     * The value of this field can be either `default` or `disable`.
     *
     * @remarks
     *
     * * `default`: This means that the hold music can be set using the [audio library](https://support.zoom.us/hc/en-us/articles/360028212652-Using-the-audio-library-to-customize-greetings-and-hold-music).
     *
     * * `disable`: This means that the hold music is disabled.
     */
    holdMusic?: GetSettingTemplate200ApplicationJSONUserSettingsHoldMusicEnum;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * OK
 */
export declare class GetSettingTemplate200ApplicationJSON extends SpeakeasyBase {
    /**
     * The description of the template.
     */
    description?: string;
    /**
     * Specify the template ID.
     */
    id?: string;
    /**
     * Specify the name of the template.
     */
    name?: string;
    policy?: GetSettingTemplate200ApplicationJSONPolicy;
    profile?: GetSettingTemplate200ApplicationJSONProfile;
    /**
     * The type of template being queried. Values: `user`, `group`, `auto receptionist` `common area`,`zr`, `interop`.
     */
    type?: GetSettingTemplate200ApplicationJSONTypeEnum;
    userSettings?: GetSettingTemplate200ApplicationJSONUserSettings;
}
export declare class GetSettingTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * OK
     */
    getSettingTemplate200ApplicationJSONObject?: GetSettingTemplate200ApplicationJSON;
    /**
     * **HTTP Status Code:** `404`<br>
     *
     * @remarks
     * Site does not exist. Settings template does not exist: {templateId}.
     *
     */
    getSettingTemplate404ApplicationJSONAny?: any;
}
