import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PastMeetingsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class PastMeetingsRequest extends SpeakeasyBase {
    /**
     * The meeting ID in **long** format. The data type of this field is "long"(represented as int64 in JSON).
     *
     * @remarks
     *
     * While storing it in your database, store it as a **long** data type and **not as an integer**, as the Meeting IDs can be longer than 10 digits.
     */
    meetingId: number;
}
export declare class PastMeetingsMeetingInstancesMeetings extends SpeakeasyBase {
    /**
     * Start time
     */
    startTime?: Date;
    /**
     * Meeting UUID. Unique meeting ID. Each meeting instance will generate its own Meeting UUID (i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). Please double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it.
     *
     * @remarks
     *
     *
     */
    uuid?: string;
}
/**
 * List of Meetings
 */
export declare class PastMeetingsMeetingInstances extends SpeakeasyBase {
    /**
     * List of ended meeting instances.
     */
    meetings?: PastMeetingsMeetingInstancesMeetings[];
}
export declare class PastMeetingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * List of ended meeting instances returned.
     */
    meetingInstances?: PastMeetingsMeetingInstances;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
