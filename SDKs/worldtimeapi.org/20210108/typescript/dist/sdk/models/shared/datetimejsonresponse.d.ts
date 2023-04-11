import { SpeakeasyBase } from "../../../internal/utils";
/**
 * the current time for the timezone requested in JSON format
 */
export declare class DateTimeJsonResponse extends SpeakeasyBase {
    /**
     * the abbreviated name of the timezone
     */
    abbreviation: string;
    /**
     * the IP of the client making the request
     */
    clientIp: string;
    /**
     * an ISO8601-valid string representing the current, local date/time
     */
    datetime: string;
    /**
     * current day number of the week, where sunday is 0
     */
    dayOfWeek: number;
    /**
     * ordinal date of the current year
     */
    dayOfYear: number;
    /**
     * flag indicating whether the local time is in daylight savings
     */
    dst: boolean;
    /**
     * an ISO8601-valid string representing the datetime when daylight savings started for this timezone
     */
    dstFrom?: string;
    /**
     * the difference in seconds between the current local time and daylight saving time for the location
     */
    dstOffset: number;
    /**
     * an ISO8601-valid string representing the datetime when daylight savings will end for this timezone
     */
    dstUntil?: string;
    /**
     * the difference in seconds between the current local time and the time in UTC, excluding any daylight saving difference (see dst_offset)
     */
    rawOffset?: number;
    /**
     * timezone in `Area/Location` or `Area/Location/Region` format
     */
    timezone: string;
    /**
     * number of seconds since the Epoch
     */
    unixtime: number;
    /**
     * an ISO8601-valid string representing the current date/time in UTC
     */
    utcDatetime: string;
    /**
     * an ISO8601-valid string representing the offset from UTC
     */
    utcOffset: string;
    /**
     * the current week number
     */
    weekNumber: number;
}
