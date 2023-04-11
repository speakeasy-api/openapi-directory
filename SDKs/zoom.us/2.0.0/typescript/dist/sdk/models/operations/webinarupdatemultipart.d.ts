import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarUpdateMultipartSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
 */
export declare enum WebinarUpdateMultipartFormDataRecurrenceMonthlyWeekEnum {
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
export declare enum WebinarUpdateMultipartFormDataRecurrenceMonthlyWeekDayEnum {
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
export declare enum WebinarUpdateMultipartFormDataRecurrenceTypeEnum {
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
export declare enum WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum {
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
export declare class WebinarUpdateMultipartFormDataRecurrence extends SpeakeasyBase {
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
    monthlyWeek?: WebinarUpdateMultipartFormDataRecurrenceMonthlyWeekEnum;
    /**
     * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
     *
     * @remarks
     *
     * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    monthlyWeekDay?: WebinarUpdateMultipartFormDataRecurrenceMonthlyWeekDayEnum;
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
    type: WebinarUpdateMultipartFormDataRecurrenceTypeEnum;
    /**
     * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
     *
     * @remarks
     *
     *  <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
     */
    weeklyDays?: WebinarUpdateMultipartFormDataRecurrenceWeeklyDaysEnum;
}
export declare class WebinarUpdateMultipartFormDataTrackingFields extends SpeakeasyBase {
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
 * Webinar Types:<br>`5` - webinar.<br>`6` - Recurring webinar with no fixed time.<br>`9` - Recurring webinar with a fixed time.
 */
export declare enum WebinarUpdateMultipartFormDataTypeEnum1 {
    Five = "5",
    Six = "6",
    Nine = "9"
}
/**
 * Base webinar object for sessions.
 */
export declare class WebinarUpdateMultipartFormData3 extends SpeakeasyBase {
    /**
     * Webinar description.
     */
    agenda?: string;
    /**
     * Webinar duration (minutes). Used for scheduled webinar only.
     */
    duration?: number;
    /**
     * [Webinar passcode](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords). By default, passcode may only contain the following characters: [a-z A-Z 0-9 @ - _ * !] and can have a maximum of 10 characters.
     *
     * @remarks
     *
     * **Note:** If the account owner or the admin has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode value provided here must meet those requirements. <br><br>If the requirements are enabled, you can view those requirements by calling either the [Get User Settings API](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/usersettings) or the  [Get Account Settings](https://marketplace.zoom.us/docs/api-reference/zoom-api/accounts/accountsettings) API.
     *
     * If "**Require a passcode when scheduling new meetings**" setting has been **enabled** **and** [locked](https://support.zoom.us/hc/en-us/articles/115005269866-Using-Tiered-Settings#locked) for the user, the passcode field will be autogenerated for the Webinar in the response even if it is not provided in the API request. <br><br>
     *
     *
     *
     *
     *
     *
     *
     *
     */
    password?: string;
    /**
     * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
     */
    recurrence?: WebinarUpdateMultipartFormDataRecurrence;
    settings?: any;
    /**
     * Webinar start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'." Should be in GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss." This should be in local time and the timezone should be specified. Only used for scheduled webinars and recurring webinars with a fixed time.
     */
    startTime?: Date;
    /**
     * Time zone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [time zone](#timezones) list for supported time zones and their formats.
     */
    timezone?: string;
    /**
     * Webinar topic.
     */
    topic?: string;
    /**
     * Tracking fields
     */
    trackingFields?: WebinarUpdateMultipartFormDataTrackingFields[];
    /**
     * Webinar Types:<br>`5` - webinar.<br>`6` - Recurring webinar with no fixed time.<br>`9` - Recurring webinar with a fixed time.
     */
    type?: WebinarUpdateMultipartFormDataTypeEnum1;
}
export declare class WebinarUpdateMultipartRequest extends SpeakeasyBase {
    /**
     * Webinar.
     */
    requestBody: WebinarUpdateMultipartFormData3;
    /**
     * Webinar occurrence id. Support change of agenda, start_time, duration, settings: {host_video, panelist_video, hd_video, watermark, auto_recording}
     */
    occurrenceId?: string;
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
export declare class WebinarUpdateMultipartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
