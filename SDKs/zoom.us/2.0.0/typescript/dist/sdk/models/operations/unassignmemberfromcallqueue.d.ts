import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnassignMemberFromCallQueueSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UnassignMemberFromCallQueueRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the Call Queue from which the member needs to be unassigned.
     */
    callQueueId: string;
    /**
     * Unique Identifier of the member who needs to be unassigned.
     */
    memberId: string;
}
export declare class UnassignMemberFromCallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Member unassigned successfully.
     */
    unassignMemberFromCallQueue204ApplicationJSONAny?: any;
}
