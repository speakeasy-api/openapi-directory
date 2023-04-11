import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnassignAPhoneNumCallQueueSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UnassignAPhoneNumCallQueueRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the Call Queue. This can be retrieved from List Call Queues API.
     */
    callQueueId: string;
}
export declare class UnassignAPhoneNumCallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Phone numbers unassigned successfully.
     */
    unassignAPhoneNumCallQueue204ApplicationJSONObject?: Record<string, any>;
}
