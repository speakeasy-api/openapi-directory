import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateSettingTemplateSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdateSettingTemplateApplicationJSONPolicyAdHocCallRecording extends SpeakeasyBase {
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
/**
 * Values: inbound, outbound, both.
 */
export declare enum UpdateSettingTemplateApplicationJSONPolicyAutoCallRecordingRecordingCallsEnum {
    Inbound = "inbound",
    Outbound = "outbound",
    Both = "both"
}
export declare class UpdateSettingTemplateApplicationJSONPolicyAutoCallRecording extends SpeakeasyBase {
    /**
     * Automatic call recording.
     */
    enable?: boolean;
    /**
     * Values: inbound, outbound, both.
     */
    recordingCalls?: UpdateSettingTemplateApplicationJSONPolicyAutoCallRecordingRecordingCallsEnum;
    /**
     * Play a prompt to call participants when the recording has started.
     */
    recordingStartPrompt?: boolean;
    /**
     * Allow call recording transcription.
     */
    recordingTranscription?: boolean;
}
export declare class UpdateSettingTemplateApplicationJSONPolicySms extends SpeakeasyBase {
    /**
     * Allow user to send and receive messages.
     */
    enable?: boolean;
    /**
     * Whether or not SMS is international.
     */
    internationalSms?: boolean;
}
export declare class UpdateSettingTemplateApplicationJSONPolicyVoicemail extends SpeakeasyBase {
    /**
     * Allow voicemail transcription.
     */
    allowTranscription?: boolean;
    /**
     * Allow current extension to access, receive, or share voicemail.
     */
    enable?: boolean;
}
export declare class UpdateSettingTemplateApplicationJSONPolicy extends SpeakeasyBase {
    adHocCallRecording?: UpdateSettingTemplateApplicationJSONPolicyAdHocCallRecording;
    autoCallRecording?: UpdateSettingTemplateApplicationJSONPolicyAutoCallRecording;
    sms?: UpdateSettingTemplateApplicationJSONPolicySms;
    voicemail?: UpdateSettingTemplateApplicationJSONPolicyVoicemail;
}
export declare class UpdateSettingTemplateApplicationJSONProfile extends SpeakeasyBase {
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
 * When a call is not answered:<br>
 *
 * @remarks
 * 0-Forward to voicemail;<br>
 * 1-Play a message, then disconnect; <br>
 * 9-Disconnect; <br>
 * 26-Forward to External Contacts; <br>
 * 50-Forward to another extension
 */
export declare enum UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursBusinessHourActionEnum {
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
export declare enum UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum {
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
export declare class UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator extends SpeakeasyBase {
    /**
     * Enable connect to operator.
     */
    enable?: boolean;
    /**
     * Extension ID of user, zoomRoom, commonAreaPhone, autoReceptionist, callQueue or sharedLineGroup. This ID is passed along with the `type` if the `close_hour_action` was not set with a value of *26*.
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
    type?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperatorTypeEnum;
}
/**
 * Values:<br>
 *
 * @remarks
 * 1-24 Hours,<br>
 * 2-customized hours
 */
export declare enum UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHoursTypeEnum {
    One = "1",
    Two = "2"
}
/**
 * Values: 1-7 sun-sat
 */
export declare enum UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHoursWeekdayEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
export declare class UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHours extends SpeakeasyBase {
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
    type?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHoursTypeEnum;
    /**
     * Values: 1-7 sun-sat
     */
    weekday?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHoursWeekdayEnum;
}
/**
 * Call Handling Ring Mode:<br>
 *
 * @remarks
 * 0-Simultaneous,<br>
 * 1-Sequential
 */
export declare enum UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum {
    Zero = "0",
    One = "1"
}
/**
 * Ringing Duration for Each Device, in seconds. Values:<br>
 *
 * @remarks
 * 15,20,25,30,35,40,45,50,55,60
 */
export declare enum UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum {
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
export declare enum UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursTypeEnum {
    One = "1",
    Two = "2"
}
export declare class UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHours extends SpeakeasyBase {
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
    businessHourAction?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursBusinessHourActionEnum;
    /**
     * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
     */
    connectToOperator?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursConnectToOperator;
    customHours?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursCustomHours[];
    /**
     * Call Handling Ring Mode:<br>
     *
     * @remarks
     * 0-Simultaneous,<br>
     * 1-Sequential
     */
    ringType?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingTypeEnum;
    /**
     * Ringing Duration for Each Device, in seconds. Values:<br>
     *
     * @remarks
     * 15,20,25,30,35,40,45,50,55,60
     */
    ringingDuration?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursRingingDurationEnum;
    /**
     * Values:<br>
     *
     * @remarks
     * 1-24 Hours, 7 Days a Week;<br>
     * 2-Custom Hours
     */
    type?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHoursTypeEnum;
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
export declare enum UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursCloseHourActionEnum {
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
export declare enum UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum {
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
export declare class UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator extends SpeakeasyBase {
    /**
     * Enable connect to operator.
     */
    enable?: boolean;
    /**
     * Extension ID of user, zoomRoom, commonAreaPhone, autoReceptionist, callQueue or sharedLineGroup. This ID is passed along with the `type` if the `close_hour_action` was not set with a value of *26*.
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
    type?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperatorTypeEnum;
}
/**
 * Maximum wait time, in seconds. Values:<br>
 *
 * @remarks
 * 15,20,25,30,35,40,45,50,55,60
 */
export declare enum UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum {
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
export declare class UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHours extends SpeakeasyBase {
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
    closeHourAction?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursCloseHourActionEnum;
    /**
     * Allow callers to press Zero to reach an operator or press One to leave a message, or allow neither of these options.
     */
    connectToOperator?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursConnectToOperator;
    /**
     * Maximum wait time, in seconds. Values:<br>
     *
     * @remarks
     * 15,20,25,30,35,40,45,50,55,60
     */
    maxWaitTime?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHoursMaxWaitTimeEnum;
}
export declare class UpdateSettingTemplateApplicationJSONUserSettingsCallHandling extends SpeakeasyBase {
    businessHours?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingBusinessHours;
    closeHours?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandlingCloseHours;
}
export declare class UpdateSettingTemplateApplicationJSONUserSettingsDeskPhone extends SpeakeasyBase {
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
export declare enum UpdateSettingTemplateApplicationJSONUserSettingsHoldMusicEnum {
    Default = "default",
    Disable = "disable"
}
export declare class UpdateSettingTemplateApplicationJSONUserSettings extends SpeakeasyBase {
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
    callHandling?: UpdateSettingTemplateApplicationJSONUserSettingsCallHandling;
    deskPhone?: UpdateSettingTemplateApplicationJSONUserSettingsDeskPhone;
    /**
     * The value of this field can be either `default` or `disable`.
     *
     * @remarks
     *
     * * `default`: This means that the hold music can be set using the [audio library](https://support.zoom.us/hc/en-us/articles/360028212652-Using-the-audio-library-to-customize-greetings-and-hold-music).
     *
     * * `disable`: This means that the hold music is disabled.
     */
    holdMusic?: UpdateSettingTemplateApplicationJSONUserSettingsHoldMusicEnum;
}
export declare class UpdateSettingTemplateApplicationJSON extends SpeakeasyBase {
    /**
     * The description of the template.
     */
    description?: string;
    /**
     * Specify the name of the template.
     */
    name?: string;
    policy?: UpdateSettingTemplateApplicationJSONPolicy;
    profile?: UpdateSettingTemplateApplicationJSONProfile;
    userSettings?: UpdateSettingTemplateApplicationJSONUserSettings;
}
export declare class UpdateSettingTemplateRequest extends SpeakeasyBase {
    requestBody?: UpdateSettingTemplateApplicationJSON;
    /**
     * The Template ID.
     */
    templateId: string;
}
export declare class UpdateSettingTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204`<br>
     *
     * @remarks
     * No Content. Request was successful.
     */
    updateSettingTemplate204ApplicationJSONAny?: any;
}
