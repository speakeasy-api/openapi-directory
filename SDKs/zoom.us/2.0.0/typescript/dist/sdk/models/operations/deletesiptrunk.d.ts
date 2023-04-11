import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSIPTrunkRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the sub account.
     */
    accountId: string;
    /**
     * Unique identifier of the SIP Trunk that was previously assigned to a sub account. To retrieve the value of this field, use the List SIP Trunks API.
     */
    trunkId: string;
}
export declare class DeleteSIPTrunkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * SIP Trunk deleted.
     */
    deleteSIPTrunk204ApplicationJSONObject?: Record<string, any>;
}
