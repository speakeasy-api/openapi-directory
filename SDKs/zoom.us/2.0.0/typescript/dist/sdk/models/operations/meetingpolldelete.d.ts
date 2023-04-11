import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingPollDeleteSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class MeetingPollDeleteRequest extends SpeakeasyBase {
    /**
     * The meeting ID in **long** format. The data type of this field is "long"(represented as int64 in JSON).
     *
     * @remarks
     *
     * While storing it in your database, store it as a **long** data type and **not as an integer**, as the Meeting IDs can be longer than 10 digits.
     */
    meetingId: number;
    /**
     * The poll ID
     */
    pollId: string;
}
export declare class MeetingPollDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
