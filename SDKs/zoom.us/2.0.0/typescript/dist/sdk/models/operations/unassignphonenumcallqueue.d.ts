import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnAssignPhoneNumCallQueueSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UnAssignPhoneNumCallQueueRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the Call Queue. This can be retrieved from the List Call Queues API.
     */
    callQueueId: string;
    /**
     * Unique Identifier of the Phone Number.
     */
    phoneNumberId: string;
}
export declare class UnAssignPhoneNumCallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Phone Number unassigned successfuly.
     */
    unAssignPhoneNumCallQueue204ApplicationJSONObject?: Record<string, any>;
}
