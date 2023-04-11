import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostPhoneSIPTrunkSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class PostPhoneSIPTrunkApplicationJSONSIPTrunks extends SpeakeasyBase {
    /**
     * The account associated to the carrier.
     */
    carrierAccount?: string;
    /**
     * Unique identifier of the master account's SIP trunk.
     */
    id?: string;
    /**
     * The name of the SIP Trunk. If this is not used, the master SIP Trunk name will be the default.
     *
     * @remarks
     *
     */
    name?: string;
}
export declare class PostPhoneSIPTrunkApplicationJSON extends SpeakeasyBase {
    /**
     * SIP trunk configurations.
     */
    sipTrunks?: PostPhoneSIPTrunkApplicationJSONSIPTrunks[];
}
export declare class PostPhoneSIPTrunkRequest extends SpeakeasyBase {
    requestBody?: PostPhoneSIPTrunkApplicationJSON;
    /**
     * Unique identifier of the account.
     */
    accountId: string;
}
export declare class PostPhoneSIPTrunk201ApplicationXMLSIPTrunks extends SpeakeasyBase {
    /**
     * Carrier account.
     */
    carrierAccount?: string;
    /**
     * Unique identifier of the SIP trunk of the sub account.
     */
    id?: string;
    /**
     * Name of the SIP trunk.
     */
    name?: string;
}
/**
 * **HTTP Status Code:** `201` **Created** <br>
 *
 * @remarks
 *
 *
 */
export declare class PostPhoneSIPTrunk201ApplicationXML extends SpeakeasyBase {
    sipTrunks?: PostPhoneSIPTrunk201ApplicationXMLSIPTrunks[];
}
export declare class PostPhoneSIPTrunk201ApplicationJSONSIPTrunks extends SpeakeasyBase {
    /**
     * Carrier account.
     */
    carrierAccount?: string;
    /**
     * Unique identifier of the SIP trunk of the sub account.
     */
    id?: string;
    /**
     * Name of the SIP trunk.
     */
    name?: string;
}
/**
 * **HTTP Status Code:** `201` **Created** <br>
 *
 * @remarks
 *
 *
 */
export declare class PostPhoneSIPTrunk201ApplicationJSON extends SpeakeasyBase {
    sipTrunks?: PostPhoneSIPTrunk201ApplicationJSONSIPTrunks[];
}
export declare class PostPhoneSIPTrunkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `201` **Created** <br>
     *
     * @remarks
     *
     *
     */
    postPhoneSIPTrunk201ApplicationJSONObject?: PostPhoneSIPTrunk201ApplicationJSON;
}
