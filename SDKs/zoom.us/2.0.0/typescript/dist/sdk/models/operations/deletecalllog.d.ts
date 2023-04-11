import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteCallLogRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the call log. The value for this field can be retrieved from [account's call logs](https://marketplace.zoom.us/docs/api-reference/zoom-api/phone/accountcalllogs) or [user's call logs](https://marketplace.zoom.us/docs/api-reference/zoom-api/phone/phoneusercalllogs).
     */
    callLogId: string;
    /**
     * The user ID or email address of the user.
     */
    userId: string;
}
export declare class DeleteCallLogResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code**: `204` <br>
     *
     * @remarks
     * Log deleted.
     *
     */
    deleteCallLog204ApplicationJSONAny?: any;
}
