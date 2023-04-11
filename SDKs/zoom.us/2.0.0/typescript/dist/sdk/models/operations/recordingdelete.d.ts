import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RecordingDeleteSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The recording delete actions:<br>`trash` - Move recording to trash.<br>`delete` - Delete recording permanently.
 */
export declare enum RecordingDeleteActionEnum {
    Trash = "trash",
    Delete = "delete"
}
export declare class RecordingDeleteRequest extends SpeakeasyBase {
    /**
     * The recording delete actions:<br>`trash` - Move recording to trash.<br>`delete` - Delete recording permanently.
     */
    action?: RecordingDeleteActionEnum;
    /**
     * To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance.
     *
     * @remarks
     *
     * To get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance.
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875=="), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
}
export declare class RecordingDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
