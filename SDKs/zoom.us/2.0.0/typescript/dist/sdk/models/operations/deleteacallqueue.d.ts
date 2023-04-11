import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteACallQueueSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DeleteACallQueueRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the call queue.
     */
    callQueueId: string;
}
export declare class DeleteACallQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Call Queue deleted successfully.
     */
    deleteACallQueue204ApplicationJSONAny?: any;
}
