import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingUpdateMultipartSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
 */
export declare enum MeetingUpdateMultipartFormDataRecurrenceMonthlyWeekEnum {
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
export declare enum MeetingUpdateMultipartFormDataRecurrenceMonthlyWeekDayEnum {
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
export declare enum MeetingUpdateMultipartFormDataRecurrenceTypeEnum {
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
export declare enum MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum {
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
export declare class MeetingUpdateMultipartFormDataRecurrence extends SpeakeasyBase {
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
    monthlyWeek?: MeetingUpdateMultipartFormDataRecurrenceMonthlyWeekEnum;
    /**
     * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
     *
     * @remarks
     *
     * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    monthlyWeekDay?: MeetingUpdateMultipartFormDataRecurrenceMonthlyWeekDayEnum;
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
    type: MeetingUpdateMultipartFormDataRecurrenceTypeEnum;
    /**
     * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
     *
     * @remarks
     *
     *  <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    weeklyDays?: MeetingUpdateMultipartFormDataRecurrenceWeeklyDaysEnum;
}
export declare class MeetingUpdateMultipartFormDataTrackingFields extends SpeakeasyBase {
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
 * Meeting Types:<br>`1` - Instant meeting.<br>`2` - Scheduled meeting.<br>`3` - Recurring meeting with no fixed time.<br>`8` - Recurring meeting with a fixed time.
 */
export declare enum MeetingUpdateMultipartFormDataTypeEnum1 {
    One = "1",
    Two = "2",
    Three = "3",
    Eight = "8"
}
/**
 * Base object for sessions.
 */
export declare class MeetingUpdateMultipartFormData3 extends SpeakeasyBase {
    /**
     * Meeting description.
     */
    agenda?: string;
    /**
     * Meeting duration (minutes). Used for scheduled meetings only.
     */
    duration?: number;
    /**
     * Meeting passcode. Passcode may only contain the following characters: [a-z A-Z 0-9 @ - _ *] and can have a maximum of 10 characters.
     *
     * @remarks
     *
     * **Note:** If the account owner or the admin has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode value provided here must meet those requirements. <br><br>If the requirements are enabled, you can view those requirements by calling either the [Get User Settings API](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/usersettings) or the  [Get Account Settings](https://marketplace.zoom.us/docs/api-reference/zoom-api/accounts/accountsettings) API.
     */
    password?: string;
    /**
     * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
     */
    recurrence?: MeetingUpdateMultipartFormDataRecurrence;
    /**
     * Email or userId if you want to schedule meeting for another user.
     */
    scheduleFor?: string;
    settings?: any;
    /**
     * Meeting start time. When using a format like "yyyy-MM-dd'T'HH:mm:ss'Z'", always use GMT time. When using a format like "yyyy-MM-dd'T'HH:mm:ss", you should use local time and  specify the time zone. Only used for scheduled meetings and recurring meetings with a fixed time.
     */
    startTime?: Date;
    /**
     * Unique identifier of the meeting template.
     *
     * @remarks
     *
     * Use this field if you would like to [schedule the meeting from a meeting template](https://support.zoom.us/hc/en-us/articles/360036559151-Meeting-templates#h_86f06cff-0852-4998-81c5-c83663c176fb). You can retrieve the value of this field by calling the [List meeting templates]() API.
     */
    templateId?: string;
    /**
     * Time zone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [time zone](#timezones) list for supported time zones and their formats.
     */
    timezone?: string;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Tracking fields
     */
    trackingFields?: MeetingUpdateMultipartFormDataTrackingFields[];
    /**
     * Meeting Types:<br>`1` - Instant meeting.<br>`2` - Scheduled meeting.<br>`3` - Recurring meeting with no fixed time.<br>`8` - Recurring meeting with a fixed time.
     */
    type?: MeetingUpdateMultipartFormDataTypeEnum1;
}
export declare class MeetingUpdateMultipartRequest extends SpeakeasyBase {
    /**
     * Meeting
     */
    requestBody: MeetingUpdateMultipartFormData3;
    /**
     * The meeting ID in **long** format. The data type of this field is "long"(represented as int64 in JSON).
     *
     * @remarks
     *
     * While storing it in your database, store it as a **long** data type and **not as an integer**, as the Meeting IDs can be longer than 10 digits.
     */
    meetingId: number;
    /**
     * Meeting occurrence id. Support change of agenda, start_time, duration, settings: {host_video, participant_video, join_before_host, mute_upon_entry, waiting_room, watermark, auto_recording}
     */
    occurrenceId?: string;
}
export declare class MeetingUpdateMultipartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
