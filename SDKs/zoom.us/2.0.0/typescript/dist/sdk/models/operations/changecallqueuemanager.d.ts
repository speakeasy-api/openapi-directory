import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ChangeCallQueueManagerSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ChangeCallQueueManagerApplicationJSON extends SpeakeasyBase {
    /**
     * Unique Identifier (userId) or email address of the user who will be the new call queue manager.
     */
    memberId?: string;
}
export declare class ChangeCallQueueManagerRequest extends SpeakeasyBase {
    requestBody?: ChangeCallQueueManagerApplicationJSON;
    /**
     * Unique Identifier of the Call Queue.
     */
    callQueueId: string;
}
export declare class ChangeCallQueueManagerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Call queue manager changed successfully.
     */
    changeCallQueueManager204ApplicationJSONAny?: any;
}
