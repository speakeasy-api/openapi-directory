import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteABlockedListSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DeleteABlockedListRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the blocked list. This can be retrieved from the List Blocked List API.
     */
    blockedListId: string;
}
export declare class DeleteABlockedListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Blocked list deleted successfully.
     */
    deleteABlockedList204ApplicationJSONAny?: any;
}
