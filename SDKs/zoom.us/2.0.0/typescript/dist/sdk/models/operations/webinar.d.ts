import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class WebinarRequest extends SpeakeasyBase {
    /**
     * Unique Identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences. When you create a recurring Webinar using [Create a Webinar API](https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinarcreate), you can retrieve the Occurrence ID from the response of the API call.
     */
    occurrenceId?: string;
    /**
     * Set the value of this field to `true` if you would like to view Webinar details of all previous occurrences of a recurring Webinar.
     */
    showPreviousOccurrences?: boolean;
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
/**
 * Occurence object. This object is only returned for Recurring Webinars.
 */
export declare class Webinar200ApplicationXMLOccurrences extends SpeakeasyBase {
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
 * Use this field **only if you're scheduling a recurring webinar of type** `3` to state the week of the month when the webinar should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the webinar should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
 */
export declare enum Webinar200ApplicationXMLRecurrenceWebinarMonthlyWeekEnum {
    Minus1 = "-1",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
/**
 * Use this field **only if you're scheduling a recurring webinar of type** `3` to state a specific day in a week when the monthly webinar should recur. To use this field, you must also use the `monthly_week` field. <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
 */
export declare enum Webinar200ApplicationXMLRecurrenceWebinarMonthlyWeekDayEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Recurrence webinar types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
 */
export declare enum Webinar200ApplicationXMLRecurrenceWebinarTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
 */
export declare class Webinar200ApplicationXMLRecurrenceWebinar extends SpeakeasyBase {
    /**
     * Select a date when the webinar will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
     */
    endDateTime?: Date;
    /**
     * Select how many times the webinar will recur before it is canceled. (Cannot be used with "end_date_time".)
     */
    endTimes?: number;
    /**
     * Use this field **only if you're scheduling a recurring webinar of type** `3` to state which day in a month, the webinar should recur. The value range is from 1 to 31.
     *
     * @remarks
     *
     * For instance, if you would like the webinar to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the webinar to recur once every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`.
     */
    monthlyDay?: number;
    /**
     * Use this field **only if you're scheduling a recurring webinar of type** `3` to state the week of the month when the webinar should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the webinar should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
     */
    monthlyWeek?: Webinar200ApplicationXMLRecurrenceWebinarMonthlyWeekEnum;
    /**
     * Use this field **only if you're scheduling a recurring webinar of type** `3` to state a specific day in a week when the monthly webinar should recur. To use this field, you must also use the `monthly_week` field. <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    monthlyWeekDay?: Webinar200ApplicationXMLRecurrenceWebinarMonthlyWeekDayEnum;
    /**
     * Define the interval at which the webinar should recur. For instance, if you would like to schedule a Webinar that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`.
     *
     * @remarks
     *
     * For a daily webinar, the maximum interval you can set is `90` days. For a weekly webinar, the maximum interval that you can set is `12` weeks. For a monthly webinar, the maximum interval that you can set is `3` months.
     */
    repeatInterval?: number;
    /**
     * Recurrence webinar types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
     */
    type: Webinar200ApplicationXMLRecurrenceWebinarTypeEnum;
    /**
     * Use this field **only if you're scheduling a recurring webinar of type** `2` to state which day(s) of the week the webinar should repeat. <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the Webinar should recur on Sunday, provide `"1"` as the value of this field.  <br><br> **Note:** If you would like the webinar to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the Webinar should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
     *
     * @remarks
     *
     * <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     *
     *
     */
    weeklyDays?: string;
}
/**
 * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
 */
export declare enum Webinar200ApplicationXMLSettingsApprovalTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * `0` - No plan.<br>`1` - Send 1 hour before webinar.<br>`2` - Send 1 day before webinar.<br>`3` - Send 1 hour and 1 day before webinar.<br>`4` - Send 1 week before webinar.<br>`5` - Send 1 hour and 1 week before webinar.<br>`6` - Send 1 day and 1 week before webinar.<br>`7` - Send 1 hour, 1 day and 1 week before webinar.
 */
export declare enum Webinar200ApplicationXMLSettingsAttendeesAndPanelistsReminderEmailNotificationTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Send reminder email to attendees and panelists.
 */
export declare class Webinar200ApplicationXMLSettingsAttendeesAndPanelistsReminderEmailNotification extends SpeakeasyBase {
    /**
     * * `true`: Send reminder email to attendees and panelists.
     *
     * @remarks
     *
     * * `false`: Do not send reminder email to attendees and panelists.
     */
    enable?: boolean;
    /**
     * `0` - No plan.<br>`1` - Send 1 hour before webinar.<br>`2` - Send 1 day before webinar.<br>`3` - Send 1 hour and 1 day before webinar.<br>`4` - Send 1 week before webinar.<br>`5` - Send 1 hour and 1 week before webinar.<br>`6` - Send 1 day and 1 week before webinar.<br>`7` - Send 1 hour, 1 day and 1 week before webinar.
     */
    type?: Webinar200ApplicationXMLSettingsAttendeesAndPanelistsReminderEmailNotificationTypeEnum;
}
/**
 * Determine how participants can join the audio portion of the webinar.
 */
export declare enum Webinar200ApplicationXMLSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
/**
 * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
 */
export declare enum Webinar200ApplicationXMLSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
/**
 * `0` - No plan.<br>`1` - Send 1 days after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
 */
export declare enum Webinar200ApplicationXMLSettingsFollowUpAbsenteesEmailNotificationTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Send follow-up email to absentees.
 */
export declare class Webinar200ApplicationXMLSettingsFollowUpAbsenteesEmailNotification extends SpeakeasyBase {
    /**
     * * `true`: Send follow-up email to absentees.
     *
     * @remarks
     *
     * * `false`: Do not send follow-up email to absentees.
     */
    enable?: boolean;
    /**
     * `0` - No plan.<br>`1` - Send 1 days after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
     */
    type?: Webinar200ApplicationXMLSettingsFollowUpAbsenteesEmailNotificationTypeEnum;
}
/**
 * `0` - No plan.<br>`1` - Send 1 day after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
 */
export declare enum Webinar200ApplicationXMLSettingsFollowUpAttendeesEmailNotificationTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Send follow-up email to attendees.
 */
export declare class Webinar200ApplicationXMLSettingsFollowUpAttendeesEmailNotification extends SpeakeasyBase {
    /**
     * * `true`: Send follow-up email to attendees.
     *
     * @remarks
     *
     * * `false`: Do not send follow-up email to attendees.
     */
    enable?: boolean;
    /**
     * `0` - No plan.<br>`1` - Send 1 day after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
     */
    type?: Webinar200ApplicationXMLSettingsFollowUpAttendeesEmailNotificationTypeEnum;
}
/**
 * Indicate whether you want attendees to be able to view answered questions only or view all questions.
 *
 * @remarks
 *
 * * `only`: Attendees are able to view answered questions only.
 *
 * *  `all`: Attendees are able to view all questions submitted in the Q&A.
 */
export declare enum Webinar200ApplicationXMLSettingsQuestionAndAnswerAnswerQuestionsEnum {
    Only = "only",
    All = "all"
}
/**
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
 */
export declare class Webinar200ApplicationXMLSettingsQuestionAndAnswer extends SpeakeasyBase {
    /**
     * * `true`: Allow participants to send questions without providing their name to the host, co-host, and panelists..
     *
     * @remarks
     *
     * * `false`: Do not allow anonymous questions.
     */
    allowAnonymousQuestions?: boolean;
    /**
     * Indicate whether you want attendees to be able to view answered questions only or view all questions.
     *
     * @remarks
     *
     * * `only`: Attendees are able to view answered questions only.
     *
     * *  `all`: Attendees are able to view all questions submitted in the Q&A.
     */
    answerQuestions?: Webinar200ApplicationXMLSettingsQuestionAndAnswerAnswerQuestionsEnum;
    /**
     * * `true`: Attendees can answer questions or leave a comment in the question thread.
     *
     * @remarks
     *
     * * `false`: Attendees can not answer questions or leave a comment in the question thread
     */
    attendeesCanComment?: boolean;
    /**
     * * `true`: Attendees can click the thumbs up button to bring popular questions to the top of the Q&A window.
     *
     * @remarks
     *
     * * `false`: Attendees can not click the thumbs up butoon on questions.
     */
    attendeesCanUpvote?: boolean;
    /**
     * * `true`: Enable [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
     *
     * @remarks
     *
     * * `false`: Disable Q&A for webinar.
     */
    enable?: boolean;
}
/**
 * Registration types. Only used for recurring webinars with a fixed time.<br>`1` - Attendees register once and can attend any of the webinar sessions.<br>`2` - Attendees need to register for each session in order to attend.<br>`3` - Attendees register once and can choose one or more sessions to attend.
 */
export declare enum Webinar200ApplicationXMLSettingsRegistrationTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * Webinar settings.
 */
export declare class Webinar200ApplicationXMLSettings extends SpeakeasyBase {
    /**
     * Allow attendees to join from multiple devices.
     */
    allowMultipleDevices?: boolean;
    /**
     * Alternative host emails or IDs. Multiple values separated by comma.
     */
    alternativeHosts?: string;
    /**
     * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
     */
    approvalType?: Webinar200ApplicationXMLSettingsApprovalTypeEnum;
    /**
     * Send reminder email to attendees and panelists.
     */
    attendeesAndPanelistsReminderEmailNotification?: Webinar200ApplicationXMLSettingsAttendeesAndPanelistsReminderEmailNotification;
    /**
     * Determine how participants can join the audio portion of the webinar.
     */
    audio?: Webinar200ApplicationXMLSettingsAudioEnum;
    /**
     * If user has configured ["Sign Into Zoom with Specified Domains"](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated.
     */
    authenticationDomains?: string;
    /**
     * Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f).
     */
    authenticationName?: string;
    /**
     * Webinar authentication option id.
     */
    authenticationOption?: string;
    /**
     * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
     */
    autoRecording?: Webinar200ApplicationXMLSettingsAutoRecordingEnum;
    /**
     * Close registration after event date.
     */
    closeRegistration?: boolean;
    /**
     * Contact email for registration
     */
    contactEmail?: string;
    /**
     * Contact name for registration
     */
    contactName?: string;
    /**
     * Set the email language to one of the following:
     *
     * @remarks
     * `en-US`,`de-DE`,`es-ES`,`fr-FR`,`jp-JP`,`pt-PT`,`ru-RU`,`zh-CN`, `zh-TW`, `ko-KO`, `it-IT`, `vi-VN`.
     */
    emailLanguage?: string;
    /**
     * Only signed in users can join this meeting.
     *
     * @remarks
     *
     * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the Webinar.
     */
    enforceLogin?: boolean;
    /**
     * Only signed in users with specified domains can join meetings.
     *
     * @remarks
     *
     * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the Webinar.
     */
    enforceLoginDomains?: string;
    /**
     * Send follow-up email to absentees.
     */
    followUpAbsenteesEmailNotification?: Webinar200ApplicationXMLSettingsFollowUpAbsenteesEmailNotification;
    /**
     * Send follow-up email to attendees.
     */
    followUpAttendeesEmailNotification?: Webinar200ApplicationXMLSettingsFollowUpAttendeesEmailNotification;
    /**
     * List of global dial-in countries
     */
    globalDialInCountries?: string[];
    /**
     * Default to HD video.
     */
    hdVideo?: boolean;
    /**
     * Start video when host joins webinar.
     */
    hostVideo?: boolean;
    /**
     * `true`- Only authenticated users can join Webinar.
     */
    meetingAuthentication?: boolean;
    /**
     * Send notification email to registrants when the host updates a webinar.
     */
    notifyRegistrants?: boolean;
    /**
     * Make the webinar on-demand
     */
    onDemand?: boolean;
    /**
     * * `true`: Send invitation email to panelists.
     *
     * @remarks
     *
     * * `false`: Do not send invitation email to panelists.
     */
    panelistsInvitationEmailNotification?: boolean;
    /**
     * Start video when panelists join webinar.
     */
    panelistsVideo?: boolean;
    /**
     * Zoom will open a survey page in attendees' browsers after leaving the webinar
     */
    postWebinarSurvey?: boolean;
    /**
     * Enable practice session.
     */
    practiceSession?: boolean;
    /**
     * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
     */
    questionAndAnswer?: Webinar200ApplicationXMLSettingsQuestionAndAnswer;
    /**
     * Send confirmation email to registrants
     */
    registrantsConfirmationEmail?: boolean;
    /**
     * Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field.
     */
    registrantsEmailNotification?: boolean;
    /**
     * Restrict number of registrants for a webinar. By default, it is set to `0`. A `0` value means that the restriction option is disabled. Provide a number higher than 0 to restrict the webinar registrants by the that number.
     */
    registrantsRestrictNumber?: number;
    /**
     * Registration types. Only used for recurring webinars with a fixed time.<br>`1` - Attendees register once and can attend any of the webinar sessions.<br>`2` - Attendees need to register for each session in order to attend.<br>`3` - Attendees register once and can choose one or more sessions to attend.
     */
    registrationType?: Webinar200ApplicationXMLSettingsRegistrationTypeEnum;
    /**
     * Show social share buttons on the registration page.
     */
    showShareButton?: boolean;
    /**
     * Survey url for post webinar survey
     */
    surveyUrl?: string;
}
export declare class Webinar200ApplicationXMLTrackingFields extends SpeakeasyBase {
    /**
     * Tracking fields type
     */
    field?: string;
    /**
     * Tracking fields value
     */
    value?: string;
}
/**
 * Webinar Types:<br>`5` - Webinar.<br>`6` - Recurring webinar with no fixed time.<br>`9` - Recurring webinar with a fixed time.
 */
export declare enum Webinar200ApplicationXMLTypeEnum {
    Five = "5",
    Six = "6",
    Nine = "9"
}
/**
 * Webinar object.
 */
export declare class Webinar200ApplicationXML extends SpeakeasyBase {
    /**
     * Webinar agenda.
     */
    agenda?: string;
    /**
     * Create time.
     */
    createdAt?: Date;
    /**
     * Webinar duration.
     */
    duration?: number;
    /**
     * Email address of the meeting host.
     */
    hostEmail?: string;
    /**
     * ID of the user set as host of webinar.
     */
    hostId?: string;
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    /**
     * URL to join the Webinar. This URL should only be shared with the users who should be invited to the Webinar.
     */
    joinUrl?: string;
    /**
     * Array of occurrence objects.
     */
    occurrences?: Webinar200ApplicationXMLOccurrences[];
    /**
     * Webinar passcode.
     *
     * @remarks
     *
     * If "Require a passcode when scheduling new meetings" setting has been **enabled** **and** [locked](https://support.zoom.us/hc/en-us/articles/115005269866-Using-Tiered-Settings#locked) for the user, the passcode field will be autogenerated for the Webinar in the response even if it is not provided in the API request. <br><br>
     * **Note:** If the account owner or the admin has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode value provided here must meet those requirements. <br><br>If the requirements are enabled, you can view those requirements by calling either the [Get User Settings API](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/usersettings) or the  [Get Account Settings](https://marketplace.zoom.us/docs/api-reference/zoom-api/accounts/accountsettings) API.
     *
     *
     *
     *
     *
     *
     */
    password?: string;
    /**
     * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
     */
    recurrence?: Webinar200ApplicationXMLRecurrenceWebinar;
    /**
     * Webinar settings.
     */
    settings?: Webinar200ApplicationXMLSettings;
    /**
     * Webinar start time in GMT/UTC.
     */
    startTime?: Date;
    /**
     * <br><aside>The <code>start_url</code> of a Webinar is a URL using which a host or an alternative host can start the Webinar. This URL should only be used by the host of the meeting and should not be shared with anyone other than the host of the Webinar.
     *
     * @remarks
     *
     * The expiration time for the <code>start_url</code> field listed in the response of [Create a Webinar API](https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinarcreate) is two hours for all regular users.
     *
     * For users created using the <code>custCreate</code> option via the [Create Users](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/usercreate) API, the expiration time of the <code>start_url</code> field is 90 days.
     *
     * For security reasons, to retrieve the latest value for the <code>start_url</code> field programmatically (after expiry), you must call the [Retrieve a Webinar API](https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinar) and refer to the value of the <code>start_url</code> field in the response.</aside><br><br><br>
     */
    startUrl?: string;
    /**
     * Time zone to format start_time.
     */
    timezone?: string;
    /**
     * Webinar topic.
     */
    topic?: string;
    /**
     * Tracking fields
     */
    trackingFields?: Webinar200ApplicationXMLTrackingFields[];
    /**
     * Webinar Types:<br>`5` - Webinar.<br>`6` - Recurring webinar with no fixed time.<br>`9` - Recurring webinar with a fixed time.
     */
    type?: Webinar200ApplicationXMLTypeEnum;
    /**
     * Unique Webinar ID. Each Webinar instance will generate its own Webinar UUID (i.e., after a Webinar ends, a new UUID will be generated for the next instance of the Webinar). You can retrieve a list of UUIDs from past Webinar instances using [this API](https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/pastwebinars). Please double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it.
     *
     * @remarks
     *
     *
     */
    uuid?: string;
}
/**
 * Occurence object. This object is only returned for Recurring Webinars.
 */
export declare class Webinar200ApplicationJSONOccurrences extends SpeakeasyBase {
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
 * Use this field **only if you're scheduling a recurring webinar of type** `3` to state the week of the month when the webinar should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the webinar should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
 */
export declare enum Webinar200ApplicationJSONRecurrenceWebinarMonthlyWeekEnum {
    Minus1 = "-1",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
/**
 * Use this field **only if you're scheduling a recurring webinar of type** `3` to state a specific day in a week when the monthly webinar should recur. To use this field, you must also use the `monthly_week` field. <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
 */
export declare enum Webinar200ApplicationJSONRecurrenceWebinarMonthlyWeekDayEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Recurrence webinar types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
 */
export declare enum Webinar200ApplicationJSONRecurrenceWebinarTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
 */
export declare class Webinar200ApplicationJSONRecurrenceWebinar extends SpeakeasyBase {
    /**
     * Select a date when the webinar will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
     */
    endDateTime?: Date;
    /**
     * Select how many times the webinar will recur before it is canceled. (Cannot be used with "end_date_time".)
     */
    endTimes?: number;
    /**
     * Use this field **only if you're scheduling a recurring webinar of type** `3` to state which day in a month, the webinar should recur. The value range is from 1 to 31.
     *
     * @remarks
     *
     * For instance, if you would like the webinar to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the webinar to recur once every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`.
     */
    monthlyDay?: number;
    /**
     * Use this field **only if you're scheduling a recurring webinar of type** `3` to state the week of the month when the webinar should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the webinar should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
     */
    monthlyWeek?: Webinar200ApplicationJSONRecurrenceWebinarMonthlyWeekEnum;
    /**
     * Use this field **only if you're scheduling a recurring webinar of type** `3` to state a specific day in a week when the monthly webinar should recur. To use this field, you must also use the `monthly_week` field. <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    monthlyWeekDay?: Webinar200ApplicationJSONRecurrenceWebinarMonthlyWeekDayEnum;
    /**
     * Define the interval at which the webinar should recur. For instance, if you would like to schedule a Webinar that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`.
     *
     * @remarks
     *
     * For a daily webinar, the maximum interval you can set is `90` days. For a weekly webinar, the maximum interval that you can set is `12` weeks. For a monthly webinar, the maximum interval that you can set is `3` months.
     */
    repeatInterval?: number;
    /**
     * Recurrence webinar types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
     */
    type: Webinar200ApplicationJSONRecurrenceWebinarTypeEnum;
    /**
     * Use this field **only if you're scheduling a recurring webinar of type** `2` to state which day(s) of the week the webinar should repeat. <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the Webinar should recur on Sunday, provide `"1"` as the value of this field.  <br><br> **Note:** If you would like the webinar to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the Webinar should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
     *
     * @remarks
     *
     * <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     *
     *
     */
    weeklyDays?: string;
}
/**
 * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
 */
export declare enum Webinar200ApplicationJSONSettingsApprovalTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2"
}
/**
 * `0` - No plan.<br>`1` - Send 1 hour before webinar.<br>`2` - Send 1 day before webinar.<br>`3` - Send 1 hour and 1 day before webinar.<br>`4` - Send 1 week before webinar.<br>`5` - Send 1 hour and 1 week before webinar.<br>`6` - Send 1 day and 1 week before webinar.<br>`7` - Send 1 hour, 1 day and 1 week before webinar.
 */
export declare enum Webinar200ApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotificationTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Send reminder email to attendees and panelists.
 */
export declare class Webinar200ApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification extends SpeakeasyBase {
    /**
     * * `true`: Send reminder email to attendees and panelists.
     *
     * @remarks
     *
     * * `false`: Do not send reminder email to attendees and panelists.
     */
    enable?: boolean;
    /**
     * `0` - No plan.<br>`1` - Send 1 hour before webinar.<br>`2` - Send 1 day before webinar.<br>`3` - Send 1 hour and 1 day before webinar.<br>`4` - Send 1 week before webinar.<br>`5` - Send 1 hour and 1 week before webinar.<br>`6` - Send 1 day and 1 week before webinar.<br>`7` - Send 1 hour, 1 day and 1 week before webinar.
     */
    type?: Webinar200ApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotificationTypeEnum;
}
/**
 * Determine how participants can join the audio portion of the webinar.
 */
export declare enum Webinar200ApplicationJSONSettingsAudioEnum {
    Both = "both",
    Telephony = "telephony",
    Voip = "voip"
}
/**
 * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
 */
export declare enum Webinar200ApplicationJSONSettingsAutoRecordingEnum {
    Local = "local",
    Cloud = "cloud",
    None = "none"
}
/**
 * `0` - No plan.<br>`1` - Send 1 days after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
 */
export declare enum Webinar200ApplicationJSONSettingsFollowUpAbsenteesEmailNotificationTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Send follow-up email to absentees.
 */
export declare class Webinar200ApplicationJSONSettingsFollowUpAbsenteesEmailNotification extends SpeakeasyBase {
    /**
     * * `true`: Send follow-up email to absentees.
     *
     * @remarks
     *
     * * `false`: Do not send follow-up email to absentees.
     */
    enable?: boolean;
    /**
     * `0` - No plan.<br>`1` - Send 1 days after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
     */
    type?: Webinar200ApplicationJSONSettingsFollowUpAbsenteesEmailNotificationTypeEnum;
}
/**
 * `0` - No plan.<br>`1` - Send 1 day after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
 */
export declare enum Webinar200ApplicationJSONSettingsFollowUpAttendeesEmailNotificationTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7"
}
/**
 * Send follow-up email to attendees.
 */
export declare class Webinar200ApplicationJSONSettingsFollowUpAttendeesEmailNotification extends SpeakeasyBase {
    /**
     * * `true`: Send follow-up email to attendees.
     *
     * @remarks
     *
     * * `false`: Do not send follow-up email to attendees.
     */
    enable?: boolean;
    /**
     * `0` - No plan.<br>`1` - Send 1 day after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
     */
    type?: Webinar200ApplicationJSONSettingsFollowUpAttendeesEmailNotificationTypeEnum;
}
/**
 * Indicate whether you want attendees to be able to view answered questions only or view all questions.
 *
 * @remarks
 *
 * * `only`: Attendees are able to view answered questions only.
 *
 * *  `all`: Attendees are able to view all questions submitted in the Q&A.
 */
export declare enum Webinar200ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum {
    Only = "only",
    All = "all"
}
/**
 * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
 */
export declare class Webinar200ApplicationJSONSettingsQuestionAndAnswer extends SpeakeasyBase {
    /**
     * * `true`: Allow participants to send questions without providing their name to the host, co-host, and panelists..
     *
     * @remarks
     *
     * * `false`: Do not allow anonymous questions.
     */
    allowAnonymousQuestions?: boolean;
    /**
     * Indicate whether you want attendees to be able to view answered questions only or view all questions.
     *
     * @remarks
     *
     * * `only`: Attendees are able to view answered questions only.
     *
     * *  `all`: Attendees are able to view all questions submitted in the Q&A.
     */
    answerQuestions?: Webinar200ApplicationJSONSettingsQuestionAndAnswerAnswerQuestionsEnum;
    /**
     * * `true`: Attendees can answer questions or leave a comment in the question thread.
     *
     * @remarks
     *
     * * `false`: Attendees can not answer questions or leave a comment in the question thread
     */
    attendeesCanComment?: boolean;
    /**
     * * `true`: Attendees can click the thumbs up button to bring popular questions to the top of the Q&A window.
     *
     * @remarks
     *
     * * `false`: Attendees can not click the thumbs up butoon on questions.
     */
    attendeesCanUpvote?: boolean;
    /**
     * * `true`: Enable [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
     *
     * @remarks
     *
     * * `false`: Disable Q&A for webinar.
     */
    enable?: boolean;
}
/**
 * Registration types. Only used for recurring webinars with a fixed time.<br>`1` - Attendees register once and can attend any of the webinar sessions.<br>`2` - Attendees need to register for each session in order to attend.<br>`3` - Attendees register once and can choose one or more sessions to attend.
 */
export declare enum Webinar200ApplicationJSONSettingsRegistrationTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * Webinar settings.
 */
export declare class Webinar200ApplicationJSONSettings extends SpeakeasyBase {
    /**
     * Allow attendees to join from multiple devices.
     */
    allowMultipleDevices?: boolean;
    /**
     * Alternative host emails or IDs. Multiple values separated by comma.
     */
    alternativeHosts?: string;
    /**
     * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
     */
    approvalType?: Webinar200ApplicationJSONSettingsApprovalTypeEnum;
    /**
     * Send reminder email to attendees and panelists.
     */
    attendeesAndPanelistsReminderEmailNotification?: Webinar200ApplicationJSONSettingsAttendeesAndPanelistsReminderEmailNotification;
    /**
     * Determine how participants can join the audio portion of the webinar.
     */
    audio?: Webinar200ApplicationJSONSettingsAudioEnum;
    /**
     * If user has configured ["Sign Into Zoom with Specified Domains"](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated.
     */
    authenticationDomains?: string;
    /**
     * Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f).
     */
    authenticationName?: string;
    /**
     * Webinar authentication option id.
     */
    authenticationOption?: string;
    /**
     * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
     */
    autoRecording?: Webinar200ApplicationJSONSettingsAutoRecordingEnum;
    /**
     * Close registration after event date.
     */
    closeRegistration?: boolean;
    /**
     * Contact email for registration
     */
    contactEmail?: string;
    /**
     * Contact name for registration
     */
    contactName?: string;
    /**
     * Set the email language to one of the following:
     *
     * @remarks
     * `en-US`,`de-DE`,`es-ES`,`fr-FR`,`jp-JP`,`pt-PT`,`ru-RU`,`zh-CN`, `zh-TW`, `ko-KO`, `it-IT`, `vi-VN`.
     */
    emailLanguage?: string;
    /**
     * Only signed in users can join this meeting.
     *
     * @remarks
     *
     * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the Webinar.
     */
    enforceLogin?: boolean;
    /**
     * Only signed in users with specified domains can join meetings.
     *
     * @remarks
     *
     * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the Webinar.
     */
    enforceLoginDomains?: string;
    /**
     * Send follow-up email to absentees.
     */
    followUpAbsenteesEmailNotification?: Webinar200ApplicationJSONSettingsFollowUpAbsenteesEmailNotification;
    /**
     * Send follow-up email to attendees.
     */
    followUpAttendeesEmailNotification?: Webinar200ApplicationJSONSettingsFollowUpAttendeesEmailNotification;
    /**
     * List of global dial-in countries
     */
    globalDialInCountries?: string[];
    /**
     * Default to HD video.
     */
    hdVideo?: boolean;
    /**
     * Start video when host joins webinar.
     */
    hostVideo?: boolean;
    /**
     * `true`- Only authenticated users can join Webinar.
     */
    meetingAuthentication?: boolean;
    /**
     * Send notification email to registrants when the host updates a webinar.
     */
    notifyRegistrants?: boolean;
    /**
     * Make the webinar on-demand
     */
    onDemand?: boolean;
    /**
     * * `true`: Send invitation email to panelists.
     *
     * @remarks
     *
     * * `false`: Do not send invitation email to panelists.
     */
    panelistsInvitationEmailNotification?: boolean;
    /**
     * Start video when panelists join webinar.
     */
    panelistsVideo?: boolean;
    /**
     * Zoom will open a survey page in attendees' browsers after leaving the webinar
     */
    postWebinarSurvey?: boolean;
    /**
     * Enable practice session.
     */
    practiceSession?: boolean;
    /**
     * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
     */
    questionAndAnswer?: Webinar200ApplicationJSONSettingsQuestionAndAnswer;
    /**
     * Send confirmation email to registrants
     */
    registrantsConfirmationEmail?: boolean;
    /**
     * Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field.
     */
    registrantsEmailNotification?: boolean;
    /**
     * Restrict number of registrants for a webinar. By default, it is set to `0`. A `0` value means that the restriction option is disabled. Provide a number higher than 0 to restrict the webinar registrants by the that number.
     */
    registrantsRestrictNumber?: number;
    /**
     * Registration types. Only used for recurring webinars with a fixed time.<br>`1` - Attendees register once and can attend any of the webinar sessions.<br>`2` - Attendees need to register for each session in order to attend.<br>`3` - Attendees register once and can choose one or more sessions to attend.
     */
    registrationType?: Webinar200ApplicationJSONSettingsRegistrationTypeEnum;
    /**
     * Show social share buttons on the registration page.
     */
    showShareButton?: boolean;
    /**
     * Survey url for post webinar survey
     */
    surveyUrl?: string;
}
export declare class Webinar200ApplicationJSONTrackingFields extends SpeakeasyBase {
    /**
     * Tracking fields type
     */
    field?: string;
    /**
     * Tracking fields value
     */
    value?: string;
}
/**
 * Webinar Types:<br>`5` - Webinar.<br>`6` - Recurring webinar with no fixed time.<br>`9` - Recurring webinar with a fixed time.
 */
export declare enum Webinar200ApplicationJSONTypeEnum {
    Five = "5",
    Six = "6",
    Nine = "9"
}
/**
 * Webinar object.
 */
export declare class Webinar200ApplicationJSON extends SpeakeasyBase {
    /**
     * Webinar agenda.
     */
    agenda?: string;
    /**
     * Create time.
     */
    createdAt?: Date;
    /**
     * Webinar duration.
     */
    duration?: number;
    /**
     * Email address of the meeting host.
     */
    hostEmail?: string;
    /**
     * ID of the user set as host of webinar.
     */
    hostId?: string;
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    /**
     * URL to join the Webinar. This URL should only be shared with the users who should be invited to the Webinar.
     */
    joinUrl?: string;
    /**
     * Array of occurrence objects.
     */
    occurrences?: Webinar200ApplicationJSONOccurrences[];
    /**
     * Webinar passcode.
     *
     * @remarks
     *
     * If "Require a passcode when scheduling new meetings" setting has been **enabled** **and** [locked](https://support.zoom.us/hc/en-us/articles/115005269866-Using-Tiered-Settings#locked) for the user, the passcode field will be autogenerated for the Webinar in the response even if it is not provided in the API request. <br><br>
     * **Note:** If the account owner or the admin has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode value provided here must meet those requirements. <br><br>If the requirements are enabled, you can view those requirements by calling either the [Get User Settings API](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/usersettings) or the  [Get Account Settings](https://marketplace.zoom.us/docs/api-reference/zoom-api/accounts/accountsettings) API.
     *
     *
     *
     *
     *
     *
     */
    password?: string;
    /**
     * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
     */
    recurrence?: Webinar200ApplicationJSONRecurrenceWebinar;
    /**
     * Webinar settings.
     */
    settings?: Webinar200ApplicationJSONSettings;
    /**
     * Webinar start time in GMT/UTC.
     */
    startTime?: Date;
    /**
     * <br><aside>The <code>start_url</code> of a Webinar is a URL using which a host or an alternative host can start the Webinar. This URL should only be used by the host of the meeting and should not be shared with anyone other than the host of the Webinar.
     *
     * @remarks
     *
     * The expiration time for the <code>start_url</code> field listed in the response of [Create a Webinar API](https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinarcreate) is two hours for all regular users.
     *
     * For users created using the <code>custCreate</code> option via the [Create Users](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/usercreate) API, the expiration time of the <code>start_url</code> field is 90 days.
     *
     * For security reasons, to retrieve the latest value for the <code>start_url</code> field programmatically (after expiry), you must call the [Retrieve a Webinar API](https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinar) and refer to the value of the <code>start_url</code> field in the response.</aside><br><br><br>
     */
    startUrl?: string;
    /**
     * Time zone to format start_time.
     */
    timezone?: string;
    /**
     * Webinar topic.
     */
    topic?: string;
    /**
     * Tracking fields
     */
    trackingFields?: Webinar200ApplicationJSONTrackingFields[];
    /**
     * Webinar Types:<br>`5` - Webinar.<br>`6` - Recurring webinar with no fixed time.<br>`9` - Recurring webinar with a fixed time.
     */
    type?: Webinar200ApplicationJSONTypeEnum;
    /**
     * Unique Webinar ID. Each Webinar instance will generate its own Webinar UUID (i.e., after a Webinar ends, a new UUID will be generated for the next instance of the Webinar). You can retrieve a list of UUIDs from past Webinar instances using [this API](https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/pastwebinars). Please double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it.
     *
     * @remarks
     *
     *
     */
    uuid?: string;
}
export declare class WebinarResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Success
     */
    webinar200ApplicationJSONObject?: Webinar200ApplicationJSON;
}
