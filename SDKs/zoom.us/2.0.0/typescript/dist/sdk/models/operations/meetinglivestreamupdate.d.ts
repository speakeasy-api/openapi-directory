import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingLiveStreamUpdateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Meeting live stream.
 */
export declare class MeetingLiveStreamUpdateApplicationJSON extends SpeakeasyBase {
    /**
     * The livestream page URL.
     */
    pageUrl?: string;
    /**
     * Stream name and key.
     */
    streamKey: string;
    /**
     * Streaming URL.
     */
    streamUrl: string;
}
export declare class MeetingLiveStreamUpdateRequest extends SpeakeasyBase {
    /**
     * Meeting
     */
    requestBody: MeetingLiveStreamUpdateApplicationJSON;
    /**
     * The meeting ID in **long** format. The data type of this field is "long"(represented as int64 in JSON).
     *
     * @remarks
     *
     * While storing it in your database, store it as a **long** data type and **not as an integer**, as the Meeting IDs can be longer than 10 digits.
     */
    meetingId: number;
}
export declare class MeetingLiveStreamUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
