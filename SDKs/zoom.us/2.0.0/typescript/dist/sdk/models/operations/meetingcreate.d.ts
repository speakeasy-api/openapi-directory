import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
 */
export declare enum MeetingCreateApplicationJSONRecurrenceMonthlyWeekEnum {
    Minus1 = "-1",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
/**
 * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
 *
 * @remarks
 *
 * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
 */
export declare enum MeetingCreateApplicationJSONRecurrenceMonthlyWeekDayEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Recurrence meeting types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
 */
export declare enum MeetingCreateApplicationJSONRecurrenceTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
 *
 * @remarks
 *
 *  <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
 */
export declare enum MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
 */
export declare class MeetingCreateApplicationJSONRecurrence extends SpeakeasyBase {
    /**
     * Select the final date on which the meeting will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
     */
    endDateTime?: Date;
    /**
     * Select how many times the meeting should recur before it is canceled. (Cannot be used with "end_date_time".)
     */
    endTimes?: number;
    /**
     * Use this field **only if you're scheduling a recurring meeting of type** `3` to state which day in a month, the meeting should recur. The value range is from 1 to 31.
     *
     * @remarks
     *
     * For instance, if you would like the meeting to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the meeting to recur every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`.
     */
    monthlyDay?: number;
    /**
     * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
     */
    monthlyWeek?: MeetingCreateApplicationJSONRecurrenceMonthlyWeekEnum;
    /**
     * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
     *
     * @remarks
     *
     * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    monthlyWeekDay?: MeetingCreateApplicationJSONRecurrenceMonthlyWeekDayEnum;
    /**
     * Define the interval at which the meeting should recur. For instance, if you would like to schedule a meeting that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`.
     *
     * @remarks
     *
     * For a daily meeting, the maximum interval you can set is `90` days. For a weekly meeting the maximum interval that you can set is  of `12` weeks. For a monthly meeting, there is a maximum of `3` months.
     *
     *
     */
    repeatInterval?: number;
    /**
     * Recurrence meeting types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
     */
    type: MeetingCreateApplicationJSONRecurrenceTypeEnum;
    /**
     * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
     *
     * @remarks
     *
     *  <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    weeklyDays?: MeetingCreateApplicationJSONRecurrenceWeeklyDaysEnum;
}
/**
 * The default value is `2`. To enable registration required, set the approval type to `0` or `1`. Values include:<br>
 *
 * @remarks
 *
 * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
 */
export declare enum MeetingCreateApplicationJSONSettingsApprovalTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * Specify whether to allow users from specific regions to join this meeting; or block users from specific regions from joining this meeting. <br><br>
 *
 * @remarks
 * `approve`: Allow users from specific regions/countries to join this meeting. If this setting is selected, the approved regions/countries must be included in the `approved_list`.<br><br>
 * `deny`: Block users from specific regions/countries from joining this meeting. If this setting is selected, the approved regions/countries must be included in the `denied_list`
 */
export declare enum MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum {
    Approve = "approve",
    Deny = "deny"
}
/**
 * Approve or block users from specific regions/countries from joining this meeting.
 *
 * @remarks
 *
 */
export declare class MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions extends SpeakeasyBase {
    /**
     * List of countries/regions from where participants can join this meeting.
     */
    approvedList?: string[];
    /**
     * List of countries/regions from where participants can not join this meeting.
     */
    deniedList?: string[];
    /**
     * `true`: Setting enabled to either allow users or block users from specific regions to join your meetings. <br>
     *
     * @remarks
     *
     * `false`: Setting disabled.
     */
    enable?: boolean;
    /**
     * Specify whether to allow users from specific regions to join this meeting; or block users from specific regions from joining this meeting. <br><br>
     *
     * @remarks
     * `approve`: Allow users from specific regions/countries to join this meeting. If this setting is selected, the approved regions/countries must be included in the `approved_list`.<br><br>
     * `deny`: Block users from specific regions/countries from joining this meeting. If this setting is selected, the approved regions/countries must be included in the `denied_list`
     */
    method?: MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
}
/**
 * Determine how participants can join the audio portion of the meeting.<br>`both` - Both Telephony and VoIP.<br>`telephony` - Telephony only.<br>`voip` - VoIP only.
 */
export declare enum MeetingCreateApplicationJSONSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
/**
 * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
 */
export declare enum MeetingCreateApplicationJSONSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
export declare class MeetingCreateApplicationJSONSettingsBreakoutRoomRooms extends SpeakeasyBase {
    /**
     * Name of the breakout room.
     */
    name?: string;
    /**
     * Email addresses of the participants who are to be assigned to the breakout room.
     */
    participants?: string[];
}
/**
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
 */
export declare class MeetingCreateApplicationJSONSettingsBreakoutRoom extends SpeakeasyBase {
    /**
     * Set the value of this field to `true` if you would like to enable the [breakout room pre-assign](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4) option.
     */
    enable?: boolean;
    /**
     * Create room(s).
     */
    rooms?: MeetingCreateApplicationJSONSettingsBreakoutRoomRooms[];
}
/**
 * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
 *
 * @remarks
 * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
 *
 * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
 */
export declare enum MeetingCreateApplicationJSONSettingsEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
/**
 * If the value of "join_before_host" field is set to true, this field can be used to indicate time limits within which a participant may join a meeting before a host. The value of this field can be one of the following:
 *
 * @remarks
 *
 * *  `0`: Allow participant to join anytime.
 * *  `5`: Allow participant to join 5 minutes before meeting start time.
 *  * `10`: Allow participant to join 10 minutes before meeting start time.
 */
export declare enum MeetingCreateApplicationJSONSettingsJbhTimeEnum {
    Zero = "0",
    Five = "5",
    Ten = "10"
}
export declare class MeetingCreateApplicationJSONSettingsLanguageInterpretationInterpreters extends SpeakeasyBase {
    /**
     * Email address of the interpreter.
     */
    email?: string;
    /**
     * Languages for interpretation. The string must contain two [country Ids](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) separated by a comma.
     *
     * @remarks
     *
     * For example, if the language is to be interpreted from English to Chinese, the value of this field should be "US,CN".
     */
    languages?: string;
}
/**
 * Language interpretation [settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars#h_01EGGQFD3Q4BST3378SA762MJ1) for meetings.
 *
 * @remarks
 *
 * **Note:** This feature is only available on certain Webinar add-on, Education, Business and higher plans. If this feature is not enabled on the host's account, this setting will not be applied for the meeting.
 */
export declare class MeetingCreateApplicationJSONSettingsLanguageInterpretation extends SpeakeasyBase {
    /**
     * Indicate whether or not you would like to enable [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars#h_01EGGQFD3Q4BST3378SA762MJ1) for this meeting.
     */
    enable?: boolean;
    /**
     * Information associated with the interpreter.
     */
    interpreters?: MeetingCreateApplicationJSONSettingsLanguageInterpretationInterpreters[];
}
/**
 * Registration type. Used for recurring meeting with fixed time only. <br>`1` Attendees register once and can attend any of the occurrences.<br>`2` Attendees need to register for each occurrence to attend.<br>`3` Attendees register once and can choose one or more occurrences to attend.
 */
export declare enum MeetingCreateApplicationJSONSettingsRegistrationTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * Meeting settings.
 */
export declare class MeetingCreateApplicationJSONSettings extends SpeakeasyBase {
    /**
     * Enable additional [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) for this meeting. Provide the value in the form of array of country code(s) for the countries which are available as data center regions in the [account settings](https://zoom.us/account/setting) but have been opt out of in the user settings. For instance, let's say that in your account settings, the data center regions that have been selected are Europe, Honkong, Australia, India, Latin America, Japan, China, United States,and Canada. The complete list of available data center regions for your account is: ["EU", "HK", "AU", "IN", "LA", "TY", "CN", "US", "CA"]. In [user settings](https://zoom.us/profile/setting), you have opted out of India(IN) and Japan(TY) for meeting and webinar traffic routing. If you would like, you can still include India and Japan as additional data centers for this meeting using this field. To include India and Japan as additional data center regions, you would provide ["IN", "TY"] as the value.
     */
    additionalDataCenterRegions?: string[];
    /**
     * If set to `true`, attendees will be allowed to join a meeting from multiple devices.
     *
     * @remarks
     *
     * **Note:** This setting is only applied for meetings that have enabled registration.
     */
    allowMultipleDevices?: boolean;
    /**
     * Alternative host's emails or IDs: multiple values separated by a comma.
     */
    alternativeHosts?: string;
    /**
     * Flag to determine whether to send email notifications to alternative hosts, default value is true.
     */
    alternativeHostsEmailNotification?: boolean;
    /**
     * The default value is `2`. To enable registration required, set the approval type to `0` or `1`. Values include:<br>
     *
     * @remarks
     *
     * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
     */
    approvalType?: MeetingCreateApplicationJSONSettingsApprovalTypeEnum;
    /**
     * Approve or block users from specific regions/countries from joining this meeting.
     *
     * @remarks
     *
     */
    approvedOrDeniedCountriesOrRegions?: MeetingCreateApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions;
    /**
     * Determine how participants can join the audio portion of the meeting.<br>`both` - Both Telephony and VoIP.<br>`telephony` - Telephony only.<br>`voip` - VoIP only.
     */
    audio?: MeetingCreateApplicationJSONSettingsAudioEnum;
    /**
     * Meeting authentication domains. This option, allows you to specify the rule so that Zoom users, whose email address contains a certain domain, can join the meeting. You can either provide multiple domains, using a comma in between and/or use a wildcard for listing domains.
     */
    authenticationDomains?: string;
    /**
     * Specify the authentication type for users to join a meeting with`meeting_authentication` setting set to `true`. The value of this field can be retrieved from the `id` field within `authentication_options` array in the response of [Get User Settings API](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/usersettings).
     */
    authenticationOption?: string;
    /**
     * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
     */
    autoRecording?: MeetingCreateApplicationJSONSettingsAutoRecordingEnum;
    /**
     * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
     */
    breakoutRoom?: MeetingCreateApplicationJSONSettingsBreakoutRoom;
    /**
     * Close registration after event date
     */
    closeRegistration?: boolean;
    /**
     * Host meeting in China.
     */
    cnMeeting?: boolean;
    /**
     * Contact email for registration
     */
    contactEmail?: string;
    /**
     * Contact name for registration
     */
    contactName?: string;
    /**
     * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
     *
     * @remarks
     * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
     *
     * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
     */
    encryptionType?: MeetingCreateApplicationJSONSettingsEncryptionTypeEnum;
    /**
     * List of global dial-in countries
     */
    globalDialInCountries?: string[];
    /**
     * Start video when the host joins the meeting.
     */
    hostVideo?: boolean;
    /**
     * Host meeting in India.
     */
    inMeeting?: boolean;
    /**
     * If the value of "join_before_host" field is set to true, this field can be used to indicate time limits within which a participant may join a meeting before a host. The value of this field can be one of the following:
     *
     * @remarks
     *
     * *  `0`: Allow participant to join anytime.
     * *  `5`: Allow participant to join 5 minutes before meeting start time.
     *  * `10`: Allow participant to join 10 minutes before meeting start time.
     */
    jbhTime?: MeetingCreateApplicationJSONSettingsJbhTimeEnum;
    /**
     * Allow participants to join the meeting before the host starts the meeting. This field can only used for scheduled or recurring meetings.
     *
     * @remarks
     *
     * **Note:** If waiting room is enabled, the **join before host** setting will be disabled.
     */
    joinBeforeHost?: boolean;
    /**
     * Language interpretation [settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars#h_01EGGQFD3Q4BST3378SA762MJ1) for meetings.
     *
     * @remarks
     *
     * **Note:** This feature is only available on certain Webinar add-on, Education, Business and higher plans. If this feature is not enabled on the host's account, this setting will not be applied for the meeting.
     */
    languageInterpretation?: MeetingCreateApplicationJSONSettingsLanguageInterpretation;
    /**
     * Only [authenticated](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) users can join meeting if the value of this field is set to `true`.
     */
    meetingAuthentication?: boolean;
    /**
     * Mute participants upon entry.
     */
    muteUponEntry?: boolean;
    /**
     * Start video when participants join the meeting.
     */
    participantVideo?: boolean;
    /**
     * Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field.
     */
    registrantsEmailNotification?: boolean;
    /**
     * Registration type. Used for recurring meeting with fixed time only. <br>`1` Attendees register once and can attend any of the occurrences.<br>`2` Attendees need to register for each occurrence to attend.<br>`3` Attendees register once and can choose one or more occurrences to attend.
     */
    registrationType?: MeetingCreateApplicationJSONSettingsRegistrationTypeEnum;
    /**
     * If set to `true`, the registration page for the meeting will include social share buttons.
     *
     * @remarks
     *
     * **Note:** This setting is only applied for meetings that have enabled registration.
     */
    showShareButton?: boolean;
    /**
     * Use Personal Meeting ID instead of an automatically generated meeting ID. It can only be used for scheduled meetings, instant meetings and recurring meetings with no fixed time.
     */
    usePmi?: boolean;
    /**
     * Enable waiting room. Note that if the value of this field is set to `true`, it will override and disable the `join_before_host` setting.
     */
    waitingRoom?: boolean;
    /**
     * Add watermark when viewing a shared screen.
     */
    watermark?: boolean;
}
export declare class MeetingCreateApplicationJSONTrackingFields extends SpeakeasyBase {
    /**
     * Label of the tracking field.
     */
    field: string;
    /**
     * Tracking fields value
     */
    value?: string;
}
/**
 * Meeting Type:<br>`1` - Instant meeting.<br>`2` - Scheduled meeting.<br>`3` - Recurring meeting with no fixed time.<br>`8` - Recurring meeting with fixed time.
 */
export declare enum MeetingCreateApplicationJSONTypeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Eight = "8"
}
/**
 * Base object for meeting.
 */
export declare class MeetingCreateApplicationJSON extends SpeakeasyBase {
    /**
     * Meeting description.
     */
    agenda?: string;
    /**
     * Meeting duration (minutes). Used for scheduled meetings only.
     */
    duration?: number;
    /**
     * Passcode to join the meeting. By default, passcode may only contain the following characters: [a-z A-Z 0-9 @ - _ *] and can have a maximum of 10 characters.
     *
     * @remarks
     *
     * **Note:** If the account owner or the admin has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode value provided here must meet those requirements. <br><br>If the requirements are enabled, you can view those requirements by calling either the [Get User Settings API](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/usersettings) or the [Get Account Settings](https://marketplace.zoom.us/docs/api-reference/zoom-api/accounts/accountsettings) API.
     */
    password?: string;
    /**
     * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
     */
    recurrence?: MeetingCreateApplicationJSONRecurrence;
    /**
     * If you would like to schedule this meeting for someone else in your account, provide the Zoom user id or email address of the user here.
     */
    scheduleFor?: string;
    /**
     * Meeting settings.
     */
    settings?: MeetingCreateApplicationJSONSettings;
    /**
     * Meeting start time. We support two formats for `start_time` - local time and GMT.<br>
     *
     * @remarks
     *
     * To set time as GMT the format should be `yyyy-MM-dd`T`HH:mm:ssZ`. Example: "2020-03-31T12:02:00Z"
     *
     * To set time using a specific timezone, use `yyyy-MM-dd`T`HH:mm:ss` format and specify the timezone [ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#timezones) in the `timezone` field OR leave it blank and the timezone set on your Zoom account will be used. You can also set the time as UTC as the timezone field.
     *
     * The `start_time` should only be used for scheduled and / or recurring webinars with fixed time.
     */
    startTime?: Date;
    /**
     * Unique identifier of the **admin meeting template**. To create admin meeting templates, contact the Zoom support team.
     *
     * @remarks
     *
     * Use this field if you would like to [schedule the meeting from a admin meeting template](https://support.zoom.us/hc/en-us/articles/360036559151-Meeting-templates#h_86f06cff-0852-4998-81c5-c83663c176fb). You can retrieve the value of this field by calling the [List meeting templates](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/listmeetingtemplates) API.
     */
    templateId?: string;
    /**
     * Time zone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [time zone](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#timezones) list for supported time zones and their formats.
     */
    timezone?: string;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Tracking fields
     */
    trackingFields?: MeetingCreateApplicationJSONTrackingFields[];
    /**
     * Meeting Type:<br>`1` - Instant meeting.<br>`2` - Scheduled meeting.<br>`3` - Recurring meeting with no fixed time.<br>`8` - Recurring meeting with fixed time.
     */
    type?: MeetingCreateApplicationJSONTypeEnum;
}
export declare class MeetingCreateRequest extends SpeakeasyBase {
    /**
     * Meeting object.
     */
    requestBody: MeetingCreateApplicationJSON;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
/**
 * Occurence object. This object is only returned for Recurring Webinars.
 */
export declare class MeetingCreate201ApplicationXMLOccurrences extends SpeakeasyBase {
    /**
     * Duration.
     */
    duration?: number;
    /**
     * Occurrence ID: Unique Identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences.
     */
    occurrenceId?: string;
    /**
     * Start time.
     */
    startTime?: Date;
    /**
     * Occurrence status.
     */
    status?: string;
}
/**
 * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
 */
export declare enum MeetingCreate201ApplicationXMLRecurrenceMonthlyWeekEnum {
    Minus1 = "-1",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
/**
 * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
 *
 * @remarks
 *
 * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
 */
export declare enum MeetingCreate201ApplicationXMLRecurrenceMonthlyWeekDayEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Recurrence meeting types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
 */
export declare enum MeetingCreate201ApplicationXMLRecurrenceTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
 *
 * @remarks
 *
 *  <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
 */
export declare enum MeetingCreate201ApplicationXMLRecurrenceWeeklyDaysEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
 */
export declare class MeetingCreate201ApplicationXMLRecurrence extends SpeakeasyBase {
    /**
     * Select the final date on which the meeting will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
     */
    endDateTime?: Date;
    /**
     * Select how many times the meeting should recur before it is canceled. (Cannot be used with "end_date_time".)
     */
    endTimes?: number;
    /**
     * Use this field **only if you're scheduling a recurring meeting of type** `3` to state which day in a month, the meeting should recur. The value range is from 1 to 31.
     *
     * @remarks
     *
     * For instance, if you would like the meeting to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the meeting to recur every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`.
     */
    monthlyDay?: number;
    /**
     * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
     */
    monthlyWeek?: MeetingCreate201ApplicationXMLRecurrenceMonthlyWeekEnum;
    /**
     * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
     *
     * @remarks
     *
     * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    monthlyWeekDay?: MeetingCreate201ApplicationXMLRecurrenceMonthlyWeekDayEnum;
    /**
     * Define the interval at which the meeting should recur. For instance, if you would like to schedule a meeting that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`.
     *
     * @remarks
     *
     * For a daily meeting, the maximum interval you can set is `90` days. For a weekly meeting the maximum interval that you can set is  of `12` weeks. For a monthly meeting, there is a maximum of `3` months.
     *
     *
     */
    repeatInterval?: number;
    /**
     * Recurrence meeting types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
     */
    type: MeetingCreate201ApplicationXMLRecurrenceTypeEnum;
    /**
     * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
     *
     * @remarks
     *
     *  <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    weeklyDays?: MeetingCreate201ApplicationXMLRecurrenceWeeklyDaysEnum;
}
/**
 * Enable registration and set approval for the registration. Note that this feature requires the host to be of **Licensed** user type. **Registration cannot be enabled for a basic user.** <br><br>
 *
 * @remarks
 *
 * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
 */
export declare enum MeetingCreate201ApplicationXMLSettingsApprovalTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * Specify whether to allow users from specific regions to join this meeting; or block users from specific regions from joining this meeting. <br><br>
 *
 * @remarks
 * `approve`: Allow users from specific regions/countries to join this meeting. If this setting is selected, the approved regions/countries must be included in the `approved_list`.<br><br>
 * `deny`: Block users from specific regions/countries from joining this meeting. If this setting is selected, the approved regions/countries must be included in the `denied_list`
 */
export declare enum MeetingCreate201ApplicationXMLSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum {
    Approve = "approve",
    Deny = "deny"
}
/**
 * Approve or block users from specific regions/countries from joining this meeting.
 *
 * @remarks
 *
 */
export declare class MeetingCreate201ApplicationXMLSettingsApprovedOrDeniedCountriesOrRegions extends SpeakeasyBase {
    /**
     * List of countries/regions from where participants can join this meeting.
     */
    approvedList?: string[];
    /**
     * List of countries/regions from where participants can not join this meeting.
     */
    deniedList?: string[];
    /**
     * `true`: Setting enabled to either allow users or block users from specific regions to join your meetings. <br>
     *
     * @remarks
     *
     * `false`: Setting disabled.
     */
    enable?: boolean;
    /**
     * Specify whether to allow users from specific regions to join this meeting; or block users from specific regions from joining this meeting. <br><br>
     *
     * @remarks
     * `approve`: Allow users from specific regions/countries to join this meeting. If this setting is selected, the approved regions/countries must be included in the `approved_list`.<br><br>
     * `deny`: Block users from specific regions/countries from joining this meeting. If this setting is selected, the approved regions/countries must be included in the `denied_list`
     */
    method?: MeetingCreate201ApplicationXMLSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
}
/**
 * Determine how participants can join the audio portion of the meeting.<br>`both` - Both Telephony and VoIP.<br>`telephony` - Telephony only.<br>`voip` - VoIP only.
 */
export declare enum MeetingCreate201ApplicationXMLSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
export declare class MeetingCreate201ApplicationXMLSettingsAuthenticationException extends SpeakeasyBase {
    /**
     * Email address of the participant.
     */
    email?: string;
    /**
     * Name of the participant.
     */
    name?: string;
}
/**
 * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
 */
export declare enum MeetingCreate201ApplicationXMLSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
export declare class MeetingCreate201ApplicationXMLSettingsBreakoutRoomRooms extends SpeakeasyBase {
    /**
     * Name of the breakout room.
     */
    name?: string;
    /**
     * Email addresses of the participants who are to be assigned to the breakout room.
     */
    participants?: string[];
}
/**
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
 */
export declare class MeetingCreate201ApplicationXMLSettingsBreakoutRoom extends SpeakeasyBase {
    /**
     * Set the value of this field to `true` if you would like to enable the [breakout room pre-assign](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4) option.
     */
    enable?: boolean;
    /**
     * Create room(s).
     */
    rooms?: MeetingCreate201ApplicationXMLSettingsBreakoutRoomRooms[];
}
export declare class MeetingCreate201ApplicationXMLSettingsCustomKeys extends SpeakeasyBase {
    /**
     * Custom key associated with the user.
     */
    key?: string;
    /**
     * Value of the custom key associated with the user.
     */
    value?: string;
}
/**
 * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
 *
 * @remarks
 * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
 *
 * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
 */
export declare enum MeetingCreate201ApplicationXMLSettingsEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
/**
 * Type of number.
 */
export declare enum MeetingCreate201ApplicationXMLSettingsGlobalDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}
export declare class MeetingCreate201ApplicationXMLSettingsGlobalDialInNumbers extends SpeakeasyBase {
    /**
     * City of the number, if any. For example, Chicago.
     */
    city?: string;
    /**
     * Country code. For example, BR.
     */
    country?: string;
    /**
     * Full name of country. For example, Brazil.
     */
    countryName?: string;
    /**
     * Phone number. For example, +1 2332357613.
     */
    number?: string;
    /**
     * Type of number.
     */
    type?: MeetingCreate201ApplicationXMLSettingsGlobalDialInNumbersTypeEnum;
}
/**
 * If the value of "join_before_host" field is set to true, this field can be used to indicate time limits within which a participant may join a meeting before a host. The value of this field can be one of the following:
 *
 * @remarks
 *
 * *  `0`: Allow participant to join anytime.
 * *  `5`: Allow participant to join 5 minutes before meeting start time.
 *  * `10`: Allow participant to join 10 minutes before meeting start time.
 */
export declare enum MeetingCreate201ApplicationXMLSettingsJbhTimeEnum {
    Zero = "0",
    Five = "5",
    Ten = "10"
}
export declare class MeetingCreate201ApplicationXMLSettingsLanguageInterpretationInterpreters extends SpeakeasyBase {
    /**
     * Email address of the interpreter.
     */
    email?: string;
    /**
     * Languages for interpretation. The string must contain two [country Ids](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) separated by a comma.
     *
     * @remarks
     *
     * For example, if the language is to be interpreted from English to Chinese, the value of this field should be "US,CN".
     */
    languages?: string;
}
export declare class MeetingCreate201ApplicationXMLSettingsLanguageInterpretation extends SpeakeasyBase {
    enable?: boolean;
    /**
     * Information associated with the interpreter.
     */
    interpreters?: MeetingCreate201ApplicationXMLSettingsLanguageInterpretationInterpreters[];
}
/**
 * Registration type. Used for recurring meeting with fixed time only. <br>`1` Attendees register once and can attend any of the occurrences.<br>`2` Attendees need to register for each occurrence to attend.<br>`3` Attendees register once and can choose one or more occurrences to attend.
 */
export declare enum MeetingCreate201ApplicationXMLSettingsRegistrationTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * Meeting settings.
 */
export declare class MeetingCreate201ApplicationXMLSettings extends SpeakeasyBase {
    /**
     * Allow attendees to join the meeting from multiple devices. This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting).
     */
    allowMultipleDevices?: boolean;
    /**
     * Alternative host's emails or IDs: multiple values are separated by a semicolon.
     */
    alternativeHosts?: string;
    /**
     * Flag to determine whether to send email notifications to alternative hosts, default value is true.
     */
    alternativeHostsEmailNotification?: boolean;
    /**
     * Enable registration and set approval for the registration. Note that this feature requires the host to be of **Licensed** user type. **Registration cannot be enabled for a basic user.** <br><br>
     *
     * @remarks
     *
     * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
     */
    approvalType?: MeetingCreate201ApplicationXMLSettingsApprovalTypeEnum;
    /**
     * Approve or block users from specific regions/countries from joining this meeting.
     *
     * @remarks
     *
     */
    approvedOrDeniedCountriesOrRegions?: MeetingCreate201ApplicationXMLSettingsApprovedOrDeniedCountriesOrRegions;
    /**
     * Determine how participants can join the audio portion of the meeting.<br>`both` - Both Telephony and VoIP.<br>`telephony` - Telephony only.<br>`voip` - VoIP only.
     */
    audio?: MeetingCreate201ApplicationXMLSettingsAudioEnum;
    /**
     * If user has configured ["Sign Into Zoom with Specified Domains"](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated.
     */
    authenticationDomains?: string;
    /**
     * The participants added here will receive unique meeting invite links and bypass authentication.
     */
    authenticationException?: MeetingCreate201ApplicationXMLSettingsAuthenticationException[];
    /**
     * Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f).
     */
    authenticationName?: string;
    /**
     * Meeting authentication option id.
     */
    authenticationOption?: string;
    /**
     * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
     */
    autoRecording?: MeetingCreate201ApplicationXMLSettingsAutoRecordingEnum;
    /**
     * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
     */
    breakoutRoom?: MeetingCreate201ApplicationXMLSettingsBreakoutRoom;
    /**
     * Close registration after event date
     */
    closeRegistration?: boolean;
    /**
     * Host meeting in China.
     */
    cnMeeting?: boolean;
    /**
     * Contact email for registration
     */
    contactEmail?: string;
    /**
     * Contact name for registration
     */
    contactName?: string;
    /**
     * Custom keys and values assigned to the meeting.
     */
    customKeys?: MeetingCreate201ApplicationXMLSettingsCustomKeys[];
    /**
     * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
     *
     * @remarks
     * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
     *
     * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
     */
    encryptionType?: MeetingCreate201ApplicationXMLSettingsEncryptionTypeEnum;
    /**
     * Only signed in users can join this meeting.
     *
     * @remarks
     *
     * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting.
     */
    enforceLogin?: boolean;
    /**
     * Only signed in users with specified domains can join meetings.
     *
     * @remarks
     *
     * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting.
     */
    enforceLoginDomains?: string;
    /**
     * List of global dial-in countries
     */
    globalDialInCountries?: string[];
    /**
     * Global Dial-in Countries/Regions
     */
    globalDialInNumbers?: MeetingCreate201ApplicationXMLSettingsGlobalDialInNumbers[];
    /**
     * Start video when the host joins the meeting.
     */
    hostVideo?: boolean;
    /**
     * Host meeting in India.
     */
    inMeeting?: boolean;
    /**
     * If the value of "join_before_host" field is set to true, this field can be used to indicate time limits within which a participant may join a meeting before a host. The value of this field can be one of the following:
     *
     * @remarks
     *
     * *  `0`: Allow participant to join anytime.
     * *  `5`: Allow participant to join 5 minutes before meeting start time.
     *  * `10`: Allow participant to join 10 minutes before meeting start time.
     */
    jbhTime?: MeetingCreate201ApplicationXMLSettingsJbhTimeEnum;
    /**
     * Allow participants to join the meeting before the host starts the meeting. Only used for scheduled or recurring meetings.
     */
    joinBeforeHost?: boolean;
    languageInterpretation?: MeetingCreate201ApplicationXMLSettingsLanguageInterpretation;
    /**
     * `true`- Only authenticated users can join meetings.
     */
    meetingAuthentication?: boolean;
    /**
     * Mute participants upon entry.
     */
    muteUponEntry?: boolean;
    /**
     * Start video when participants join the meeting.
     */
    participantVideo?: boolean;
    /**
     * Send confirmation email to registrants upon successful registration.
     */
    registrantsConfirmationEmail?: boolean;
    /**
     * Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field.
     */
    registrantsEmailNotification?: boolean;
    /**
     * Registration type. Used for recurring meeting with fixed time only. <br>`1` Attendees register once and can attend any of the occurrences.<br>`2` Attendees need to register for each occurrence to attend.<br>`3` Attendees register once and can choose one or more occurrences to attend.
     */
    registrationType?: MeetingCreate201ApplicationXMLSettingsRegistrationTypeEnum;
    /**
     * Show social share buttons on the meeting registration page.
     *
     * @remarks
     * This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting).
     */
    showShareButton?: boolean;
    /**
     * Use a personal meeting ID. Only used for scheduled meetings and recurring meetings with no fixed time.
     */
    usePmi?: boolean;
    /**
     * Enable waiting room
     */
    waitingRoom?: boolean;
    /**
     * Add watermark when viewing a shared screen.
     */
    watermark?: boolean;
}
export declare class MeetingCreate201ApplicationXMLTrackingFields extends SpeakeasyBase {
    /**
     * Label of the tracking field.
     */
    field?: string;
    /**
     * Value for the field.
     */
    value?: string;
    /**
     * Indicates whether the [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) is visible in the meeting scheduling options in the Zoom Web Portal or not.
     *
     * @remarks
     *
     * `true`: Tracking field is visible. <br>
     *
     * `false`: Tracking field is not visible to the users in the meeting options in the Zoom Web Portal but the field was used while scheduling this meeting via API. An invisible tracking field can be used by users while scheduling meetings via API only.
     */
    visible?: boolean;
}
/**
 * Meeting Type
 */
export declare enum MeetingCreate201ApplicationXMLTypeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Eight = "8"
}
/**
 * Meeting object
 */
export declare class MeetingCreate201ApplicationXML extends SpeakeasyBase {
    /**
     * Agenda
     */
    agenda?: string;
    /**
     * Unique identifier of the scheduler who scheduled this meeting on behalf of the host. This field is only returned if you used "schedule_for" option in the [Create a Meeting API request](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingcreate).
     */
    assistantId?: string;
    /**
     * The date and time at which this meeting was created.
     */
    createdAt?: Date;
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * H.323/SIP room system password
     */
    h323Password?: string;
    /**
     * Email address of the meeting host.
     */
    hostEmail?: string;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * URL for participants to join the meeting. This URL should only be shared with users that you would like to invite for the meeting.
     */
    joinUrl?: string;
    /**
     * Array of occurrence objects.
     */
    occurrences?: MeetingCreate201ApplicationXMLOccurrences[];
    /**
     * Meeting password. Password may only contain the following characters: `[a-z A-Z 0-9 @ - _ * !]`
     *
     * @remarks
     *
     * If "Require a password when scheduling new meetings" setting has been **enabled** **and** [locked](https://support.zoom.us/hc/en-us/articles/115005269866-Using-Tiered-Settings#locked) for the user, the password field will be autogenerated in the response even if it is not provided in the API request.
     *
     *
     *
     */
    password?: string;
    /**
     * Personal Meeting Id. Only used for scheduled meetings and recurring meetings with no fixed time.
     */
    pmi?: number;
    /**
     * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
     */
    recurrence?: MeetingCreate201ApplicationXMLRecurrence;
    /**
     * URL using which registrants can register for a meeting. This field is only returned for meetings that have enabled registration.
     */
    registrationUrl?: string;
    /**
     * Meeting settings.
     */
    settings?: MeetingCreate201ApplicationXMLSettings;
    /**
     * Meeting start date-time in UTC/GMT. Example: "2020-03-31T12:02:00Z"
     */
    startTime?: Date;
    /**
     * URL to start the meeting. This URL should only be used by the host of the meeting and **should not be shared with anyone other than the host** of the meeting as anyone with this URL will be able to login to the Zoom Client as the host of the meeting.
     */
    startUrl?: string;
    /**
     * Timezone to format start_time
     */
    timezone?: string;
    /**
     * Meeting topic
     */
    topic?: string;
    /**
     * Tracking fields
     */
    trackingFields?: MeetingCreate201ApplicationXMLTrackingFields[];
    /**
     * Meeting Type
     */
    type?: MeetingCreate201ApplicationXMLTypeEnum;
}
/**
 * Occurence object. This object is only returned for Recurring Webinars.
 */
export declare class MeetingCreate201ApplicationJSONOccurrences extends SpeakeasyBase {
    /**
     * Duration.
     */
    duration?: number;
    /**
     * Occurrence ID: Unique Identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences.
     */
    occurrenceId?: string;
    /**
     * Start time.
     */
    startTime?: Date;
    /**
     * Occurrence status.
     */
    status?: string;
}
/**
 * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
 */
export declare enum MeetingCreate201ApplicationJSONRecurrenceMonthlyWeekEnum {
    Minus1 = "-1",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
/**
 * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
 *
 * @remarks
 *
 * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
 */
export declare enum MeetingCreate201ApplicationJSONRecurrenceMonthlyWeekDayEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Recurrence meeting types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
 */
export declare enum MeetingCreate201ApplicationJSONRecurrenceTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
 *
 * @remarks
 *
 *  <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
 */
export declare enum MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
 */
export declare class MeetingCreate201ApplicationJSONRecurrence extends SpeakeasyBase {
    /**
     * Select the final date on which the meeting will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
     */
    endDateTime?: Date;
    /**
     * Select how many times the meeting should recur before it is canceled. (Cannot be used with "end_date_time".)
     */
    endTimes?: number;
    /**
     * Use this field **only if you're scheduling a recurring meeting of type** `3` to state which day in a month, the meeting should recur. The value range is from 1 to 31.
     *
     * @remarks
     *
     * For instance, if you would like the meeting to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the meeting to recur every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`.
     */
    monthlyDay?: number;
    /**
     * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
     */
    monthlyWeek?: MeetingCreate201ApplicationJSONRecurrenceMonthlyWeekEnum;
    /**
     * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
     *
     * @remarks
     *
     * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    monthlyWeekDay?: MeetingCreate201ApplicationJSONRecurrenceMonthlyWeekDayEnum;
    /**
     * Define the interval at which the meeting should recur. For instance, if you would like to schedule a meeting that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`.
     *
     * @remarks
     *
     * For a daily meeting, the maximum interval you can set is `90` days. For a weekly meeting the maximum interval that you can set is  of `12` weeks. For a monthly meeting, there is a maximum of `3` months.
     *
     *
     */
    repeatInterval?: number;
    /**
     * Recurrence meeting types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
     */
    type: MeetingCreate201ApplicationJSONRecurrenceTypeEnum;
    /**
     * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
     *
     * @remarks
     *
     *  <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    weeklyDays?: MeetingCreate201ApplicationJSONRecurrenceWeeklyDaysEnum;
}
/**
 * Enable registration and set approval for the registration. Note that this feature requires the host to be of **Licensed** user type. **Registration cannot be enabled for a basic user.** <br><br>
 *
 * @remarks
 *
 * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
 */
export declare enum MeetingCreate201ApplicationJSONSettingsApprovalTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * Specify whether to allow users from specific regions to join this meeting; or block users from specific regions from joining this meeting. <br><br>
 *
 * @remarks
 * `approve`: Allow users from specific regions/countries to join this meeting. If this setting is selected, the approved regions/countries must be included in the `approved_list`.<br><br>
 * `deny`: Block users from specific regions/countries from joining this meeting. If this setting is selected, the approved regions/countries must be included in the `denied_list`
 */
export declare enum MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum {
    Approve = "approve",
    Deny = "deny"
}
/**
 * Approve or block users from specific regions/countries from joining this meeting.
 *
 * @remarks
 *
 */
export declare class MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions extends SpeakeasyBase {
    /**
     * List of countries/regions from where participants can join this meeting.
     */
    approvedList?: string[];
    /**
     * List of countries/regions from where participants can not join this meeting.
     */
    deniedList?: string[];
    /**
     * `true`: Setting enabled to either allow users or block users from specific regions to join your meetings. <br>
     *
     * @remarks
     *
     * `false`: Setting disabled.
     */
    enable?: boolean;
    /**
     * Specify whether to allow users from specific regions to join this meeting; or block users from specific regions from joining this meeting. <br><br>
     *
     * @remarks
     * `approve`: Allow users from specific regions/countries to join this meeting. If this setting is selected, the approved regions/countries must be included in the `approved_list`.<br><br>
     * `deny`: Block users from specific regions/countries from joining this meeting. If this setting is selected, the approved regions/countries must be included in the `denied_list`
     */
    method?: MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegionsMethodEnum;
}
/**
 * Determine how participants can join the audio portion of the meeting.<br>`both` - Both Telephony and VoIP.<br>`telephony` - Telephony only.<br>`voip` - VoIP only.
 */
export declare enum MeetingCreate201ApplicationJSONSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
export declare class MeetingCreate201ApplicationJSONSettingsAuthenticationException extends SpeakeasyBase {
    /**
     * Email address of the participant.
     */
    email?: string;
    /**
     * Name of the participant.
     */
    name?: string;
}
/**
 * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
 */
export declare enum MeetingCreate201ApplicationJSONSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
export declare class MeetingCreate201ApplicationJSONSettingsBreakoutRoomRooms extends SpeakeasyBase {
    /**
     * Name of the breakout room.
     */
    name?: string;
    /**
     * Email addresses of the participants who are to be assigned to the breakout room.
     */
    participants?: string[];
}
/**
 * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
 */
export declare class MeetingCreate201ApplicationJSONSettingsBreakoutRoom extends SpeakeasyBase {
    /**
     * Set the value of this field to `true` if you would like to enable the [breakout room pre-assign](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4) option.
     */
    enable?: boolean;
    /**
     * Create room(s).
     */
    rooms?: MeetingCreate201ApplicationJSONSettingsBreakoutRoomRooms[];
}
export declare class MeetingCreate201ApplicationJSONSettingsCustomKeys extends SpeakeasyBase {
    /**
     * Custom key associated with the user.
     */
    key?: string;
    /**
     * Value of the custom key associated with the user.
     */
    value?: string;
}
/**
 * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
 *
 * @remarks
 * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
 *
 * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
 */
export declare enum MeetingCreate201ApplicationJSONSettingsEncryptionTypeEnum {
    EnhancedEncryption = "enhanced_encryption",
    E2ee = "e2ee"
}
/**
 * Type of number.
 */
export declare enum MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbersTypeEnum {
    Toll = "toll",
    Tollfree = "tollfree"
}
export declare class MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbers extends SpeakeasyBase {
    /**
     * City of the number, if any. For example, Chicago.
     */
    city?: string;
    /**
     * Country code. For example, BR.
     */
    country?: string;
    /**
     * Full name of country. For example, Brazil.
     */
    countryName?: string;
    /**
     * Phone number. For example, +1 2332357613.
     */
    number?: string;
    /**
     * Type of number.
     */
    type?: MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbersTypeEnum;
}
/**
 * If the value of "join_before_host" field is set to true, this field can be used to indicate time limits within which a participant may join a meeting before a host. The value of this field can be one of the following:
 *
 * @remarks
 *
 * *  `0`: Allow participant to join anytime.
 * *  `5`: Allow participant to join 5 minutes before meeting start time.
 *  * `10`: Allow participant to join 10 minutes before meeting start time.
 */
export declare enum MeetingCreate201ApplicationJSONSettingsJbhTimeEnum {
    Zero = "0",
    Five = "5",
    Ten = "10"
}
export declare class MeetingCreate201ApplicationJSONSettingsLanguageInterpretationInterpreters extends SpeakeasyBase {
    /**
     * Email address of the interpreter.
     */
    email?: string;
    /**
     * Languages for interpretation. The string must contain two [country Ids](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) separated by a comma.
     *
     * @remarks
     *
     * For example, if the language is to be interpreted from English to Chinese, the value of this field should be "US,CN".
     */
    languages?: string;
}
export declare class MeetingCreate201ApplicationJSONSettingsLanguageInterpretation extends SpeakeasyBase {
    enable?: boolean;
    /**
     * Information associated with the interpreter.
     */
    interpreters?: MeetingCreate201ApplicationJSONSettingsLanguageInterpretationInterpreters[];
}
/**
 * Registration type. Used for recurring meeting with fixed time only. <br>`1` Attendees register once and can attend any of the occurrences.<br>`2` Attendees need to register for each occurrence to attend.<br>`3` Attendees register once and can choose one or more occurrences to attend.
 */
export declare enum MeetingCreate201ApplicationJSONSettingsRegistrationTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * Meeting settings.
 */
export declare class MeetingCreate201ApplicationJSONSettings extends SpeakeasyBase {
    /**
     * Allow attendees to join the meeting from multiple devices. This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting).
     */
    allowMultipleDevices?: boolean;
    /**
     * Alternative host's emails or IDs: multiple values are separated by a semicolon.
     */
    alternativeHosts?: string;
    /**
     * Flag to determine whether to send email notifications to alternative hosts, default value is true.
     */
    alternativeHostsEmailNotification?: boolean;
    /**
     * Enable registration and set approval for the registration. Note that this feature requires the host to be of **Licensed** user type. **Registration cannot be enabled for a basic user.** <br><br>
     *
     * @remarks
     *
     * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
     */
    approvalType?: MeetingCreate201ApplicationJSONSettingsApprovalTypeEnum;
    /**
     * Approve or block users from specific regions/countries from joining this meeting.
     *
     * @remarks
     *
     */
    approvedOrDeniedCountriesOrRegions?: MeetingCreate201ApplicationJSONSettingsApprovedOrDeniedCountriesOrRegions;
    /**
     * Determine how participants can join the audio portion of the meeting.<br>`both` - Both Telephony and VoIP.<br>`telephony` - Telephony only.<br>`voip` - VoIP only.
     */
    audio?: MeetingCreate201ApplicationJSONSettingsAudioEnum;
    /**
     * If user has configured ["Sign Into Zoom with Specified Domains"](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated.
     */
    authenticationDomains?: string;
    /**
     * The participants added here will receive unique meeting invite links and bypass authentication.
     */
    authenticationException?: MeetingCreate201ApplicationJSONSettingsAuthenticationException[];
    /**
     * Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f).
     */
    authenticationName?: string;
    /**
     * Meeting authentication option id.
     */
    authenticationOption?: string;
    /**
     * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
     */
    autoRecording?: MeetingCreate201ApplicationJSONSettingsAutoRecordingEnum;
    /**
     * Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4).
     */
    breakoutRoom?: MeetingCreate201ApplicationJSONSettingsBreakoutRoom;
    /**
     * Close registration after event date
     */
    closeRegistration?: boolean;
    /**
     * Host meeting in China.
     */
    cnMeeting?: boolean;
    /**
     * Contact email for registration
     */
    contactEmail?: string;
    /**
     * Contact name for registration
     */
    contactName?: string;
    /**
     * Custom keys and values assigned to the meeting.
     */
    customKeys?: MeetingCreate201ApplicationJSONSettingsCustomKeys[];
    /**
     * Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. <br><br>The value of this field can be one of the following:<br>
     *
     * @remarks
     * `enhanced_encryption`: Enhanced encryption. Encryption is stored in the cloud if you enable this option. <br>
     *
     * `e2ee`: [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the following features: join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions.
     */
    encryptionType?: MeetingCreate201ApplicationJSONSettingsEncryptionTypeEnum;
    /**
     * Only signed in users can join this meeting.
     *
     * @remarks
     *
     * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting.
     */
    enforceLogin?: boolean;
    /**
     * Only signed in users with specified domains can join meetings.
     *
     * @remarks
     *
     * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting.
     */
    enforceLoginDomains?: string;
    /**
     * List of global dial-in countries
     */
    globalDialInCountries?: string[];
    /**
     * Global Dial-in Countries/Regions
     */
    globalDialInNumbers?: MeetingCreate201ApplicationJSONSettingsGlobalDialInNumbers[];
    /**
     * Start video when the host joins the meeting.
     */
    hostVideo?: boolean;
    /**
     * Host meeting in India.
     */
    inMeeting?: boolean;
    /**
     * If the value of "join_before_host" field is set to true, this field can be used to indicate time limits within which a participant may join a meeting before a host. The value of this field can be one of the following:
     *
     * @remarks
     *
     * *  `0`: Allow participant to join anytime.
     * *  `5`: Allow participant to join 5 minutes before meeting start time.
     *  * `10`: Allow participant to join 10 minutes before meeting start time.
     */
    jbhTime?: MeetingCreate201ApplicationJSONSettingsJbhTimeEnum;
    /**
     * Allow participants to join the meeting before the host starts the meeting. Only used for scheduled or recurring meetings.
     */
    joinBeforeHost?: boolean;
    languageInterpretation?: MeetingCreate201ApplicationJSONSettingsLanguageInterpretation;
    /**
     * `true`- Only authenticated users can join meetings.
     */
    meetingAuthentication?: boolean;
    /**
     * Mute participants upon entry.
     */
    muteUponEntry?: boolean;
    /**
     * Start video when participants join the meeting.
     */
    participantVideo?: boolean;
    /**
     * Send confirmation email to registrants upon successful registration.
     */
    registrantsConfirmationEmail?: boolean;
    /**
     * Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field.
     */
    registrantsEmailNotification?: boolean;
    /**
     * Registration type. Used for recurring meeting with fixed time only. <br>`1` Attendees register once and can attend any of the occurrences.<br>`2` Attendees need to register for each occurrence to attend.<br>`3` Attendees register once and can choose one or more occurrences to attend.
     */
    registrationType?: MeetingCreate201ApplicationJSONSettingsRegistrationTypeEnum;
    /**
     * Show social share buttons on the meeting registration page.
     *
     * @remarks
     * This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting).
     */
    showShareButton?: boolean;
    /**
     * Use a personal meeting ID. Only used for scheduled meetings and recurring meetings with no fixed time.
     */
    usePmi?: boolean;
    /**
     * Enable waiting room
     */
    waitingRoom?: boolean;
    /**
     * Add watermark when viewing a shared screen.
     */
    watermark?: boolean;
}
export declare class MeetingCreate201ApplicationJSONTrackingFields extends SpeakeasyBase {
    /**
     * Label of the tracking field.
     */
    field?: string;
    /**
     * Value for the field.
     */
    value?: string;
    /**
     * Indicates whether the [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) is visible in the meeting scheduling options in the Zoom Web Portal or not.
     *
     * @remarks
     *
     * `true`: Tracking field is visible. <br>
     *
     * `false`: Tracking field is not visible to the users in the meeting options in the Zoom Web Portal but the field was used while scheduling this meeting via API. An invisible tracking field can be used by users while scheduling meetings via API only.
     */
    visible?: boolean;
}
/**
 * Meeting Type
 */
export declare enum MeetingCreate201ApplicationJSONTypeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Eight = "8"
}
/**
 * Meeting object
 */
export declare class MeetingCreate201ApplicationJSON extends SpeakeasyBase {
    /**
     * Agenda
     */
    agenda?: string;
    /**
     * Unique identifier of the scheduler who scheduled this meeting on behalf of the host. This field is only returned if you used "schedule_for" option in the [Create a Meeting API request](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meetingcreate).
     */
    assistantId?: string;
    /**
     * The date and time at which this meeting was created.
     */
    createdAt?: Date;
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * H.323/SIP room system password
     */
    h323Password?: string;
    /**
     * Email address of the meeting host.
     */
    hostEmail?: string;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * URL for participants to join the meeting. This URL should only be shared with users that you would like to invite for the meeting.
     */
    joinUrl?: string;
    /**
     * Array of occurrence objects.
     */
    occurrences?: MeetingCreate201ApplicationJSONOccurrences[];
    /**
     * Meeting password. Password may only contain the following characters: `[a-z A-Z 0-9 @ - _ * !]`
     *
     * @remarks
     *
     * If "Require a password when scheduling new meetings" setting has been **enabled** **and** [locked](https://support.zoom.us/hc/en-us/articles/115005269866-Using-Tiered-Settings#locked) for the user, the password field will be autogenerated in the response even if it is not provided in the API request.
     *
     *
     *
     */
    password?: string;
    /**
     * Personal Meeting Id. Only used for scheduled meetings and recurring meetings with no fixed time.
     */
    pmi?: number;
    /**
     * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
     */
    recurrence?: MeetingCreate201ApplicationJSONRecurrence;
    /**
     * URL using which registrants can register for a meeting. This field is only returned for meetings that have enabled registration.
     */
    registrationUrl?: string;
    /**
     * Meeting settings.
     */
    settings?: MeetingCreate201ApplicationJSONSettings;
    /**
     * Meeting start date-time in UTC/GMT. Example: "2020-03-31T12:02:00Z"
     */
    startTime?: Date;
    /**
     * URL to start the meeting. This URL should only be used by the host of the meeting and **should not be shared with anyone other than the host** of the meeting as anyone with this URL will be able to login to the Zoom Client as the host of the meeting.
     */
    startUrl?: string;
    /**
     * Timezone to format start_time
     */
    timezone?: string;
    /**
     * Meeting topic
     */
    topic?: string;
    /**
     * Tracking fields
     */
    trackingFields?: MeetingCreate201ApplicationJSONTrackingFields[];
    /**
     * Meeting Type
     */
    type?: MeetingCreate201ApplicationJSONTypeEnum;
}
export declare class MeetingCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201`<br>
     *
     * @remarks
     * Meeting created.
     */
    meetingCreate201ApplicationJSONObject?: MeetingCreate201ApplicationJSON;
}
