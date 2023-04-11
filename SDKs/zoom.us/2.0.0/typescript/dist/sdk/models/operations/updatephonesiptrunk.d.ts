import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdatePhoneSIPTrunkSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdatePhoneSIPTrunkApplicationJSON extends SpeakeasyBase {
    /**
     * Account associated with the carrier.
     */
    carrierAccount?: string;
    /**
     * Name of the SIP Trunk.
     */
    name?: string;
}
export declare class UpdatePhoneSIPTrunkRequest extends SpeakeasyBase {
    requestBody?: UpdatePhoneSIPTrunkApplicationJSON;
    /**
     * Unique identifier of the sub account.
     */
    accountId: string;
    /**
     * Unique identifier of the SIP trunk.
     */
    sipTrunkId: string;
}
export declare class UpdatePhoneSIPTrunkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Response Code**: `204` **No Content**<br>
     *
     * @remarks
     *
     */
    updatePhoneSIPTrunk204ApplicationJSONAny?: any;
}
