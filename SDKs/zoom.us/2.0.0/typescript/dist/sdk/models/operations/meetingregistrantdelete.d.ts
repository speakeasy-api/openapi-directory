import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingregistrantdeleteRequest extends SpeakeasyBase {
    /**
     * The meeting ID.
     */
    meetingId: number;
    /**
     * The meeting occurence ID.
     */
    occurrenceId?: string;
    /**
     * The meeting registrant ID.
     */
    registrantId: string;
}
export declare class MeetingregistrantdeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
