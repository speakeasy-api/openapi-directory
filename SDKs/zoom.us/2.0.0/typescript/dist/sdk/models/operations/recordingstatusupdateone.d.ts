import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RecordingStatusUpdateOneSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare enum RecordingStatusUpdateOneApplicationJSONActionEnum {
    Recover = "recover"
}
export declare class RecordingStatusUpdateOneApplicationJSON extends SpeakeasyBase {
    action?: RecordingStatusUpdateOneApplicationJSONActionEnum;
}
export declare class RecordingStatusUpdateOneRequest extends SpeakeasyBase {
    requestBody: RecordingStatusUpdateOneApplicationJSON;
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
    /**
     * The recording ID.
     */
    recordingId: string;
}
export declare class RecordingStatusUpdateOneResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
