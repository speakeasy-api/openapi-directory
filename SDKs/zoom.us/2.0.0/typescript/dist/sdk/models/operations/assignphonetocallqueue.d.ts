import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssignPhoneToCallQueueSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class AssignPhoneToCallQueueApplicationJSONPhoneNumbers extends SpeakeasyBase {
    /**
     * Unique Identifier of the phone number.
     */
    id?: string;
    /**
     * Phone number.
     */
    number?: string;
}
export declare class AssignPhoneToCallQueueApplicationJSON extends SpeakeasyBase {
    /**
     * Provide either the `id` or the `number` field. Only a max of 5 numbers can be assigned to a call queue at a time.
     */
    phoneNumbers?: AssignPhoneToCallQueueApplicationJSONPhoneNumbers[];
}
export declare class AssignPhoneToCallQueueRequest extends SpeakeasyBase {
    requestBody?: AssignPhoneToCallQueueApplicationJSON;
    /**
     * Unique Identifier of the Call Queue.
     */
    callQueueId: string;
}
export declare class AssignPhoneToCallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     *
     */
    assignPhoneToCallQueue204ApplicationJSONObject?: Record<string, any>;
}
