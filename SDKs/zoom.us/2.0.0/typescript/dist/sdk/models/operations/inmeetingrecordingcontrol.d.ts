import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class InMeetingRecordingControlApplicationJSON extends SpeakeasyBase {
    /**
     * The method that you would like to control. The value of this field can be one of the following:
     *
     * @remarks
     * * `recording.start`: Provide this value if you would like to start the recording.<br><br>
     * * `recording.stop`: Provide this value if you would like to stop the recording.<br><br>
     * * `recording.pause`: Provide this value if you would like to pause the recording.<br><br>
     * * `recording.resume`: Provide this value if you would like to resume the recording that was previously paused.
     *
     *
     *
     *
     */
    method?: string;
}
export declare class InMeetingRecordingControlRequest extends SpeakeasyBase {
    requestBody?: InMeetingRecordingControlApplicationJSON;
    /**
     * Unique identifier of the live meeting.
     */
    meetingId: string;
}
export declare class InMeetingRecordingControlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status:** `202` **Accepted**
     *
     * @remarks
     * Request processed successfully.
     */
    inMeetingRecordingControl202ApplicationJSONAny?: any;
}
