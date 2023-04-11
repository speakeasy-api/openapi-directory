import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAllSipNumbersSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DeleteAllSipNumbersRequest extends SpeakeasyBase {
    /**
     * Account ID of the sub account from which the numbers are to be deleted. This can be retrieved from [List sub accounts](https://marketplace.zoom.us/docs/api-reference/zoom-api/accounts/account) API.
     */
    accountId: string;
}
export declare class DeleteAllSipNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Numbers deleted successfully.
     */
    deleteAllSipNumbers204ApplicationJSONAny?: any;
}
