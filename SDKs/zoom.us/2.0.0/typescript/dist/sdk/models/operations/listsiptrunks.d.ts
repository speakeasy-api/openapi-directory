import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListSIPTrunksRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the Account. To retrieve SIP trunks assigned to a sub account, provide the account ID of the sub account in the as the value of this field. To retrieve SIP trunks of a master account, provide `me` as the value of this field.
     */
    accountId: string;
}
export declare class ListSIPTrunks200ApplicationXMLSIPTrunks extends SpeakeasyBase {
    /**
     * DNIS of the SIP trunk.
     */
    dnis?: string;
    /**
     * Unique identifier of the sip trunk.
     */
    id?: string;
    /**
     * Name assigned to the SIP trunk.
     */
    name?: string;
    /**
     * Prefix of the SIP Connected Audio phone number.
     */
    numberPrefix?: string;
    /**
     * Outbound caller Id assigned to the trunk.
     */
    outboundCallerId?: string;
    /**
     * IP address or domain of the SIP trunk.
     */
    sipServerAddress?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * List of SIP Trunks returned.
 */
export declare class ListSIPTrunks200ApplicationXML extends SpeakeasyBase {
    sipTrunks?: ListSIPTrunks200ApplicationXMLSIPTrunks[];
    /**
     * Total number of records returned.
     */
    totalRecords?: number;
}
export declare class ListSIPTrunks200ApplicationJSONSIPTrunks extends SpeakeasyBase {
    /**
     * DNIS of the SIP trunk.
     */
    dnis?: string;
    /**
     * Unique identifier of the sip trunk.
     */
    id?: string;
    /**
     * Name assigned to the SIP trunk.
     */
    name?: string;
    /**
     * Prefix of the SIP Connected Audio phone number.
     */
    numberPrefix?: string;
    /**
     * Outbound caller Id assigned to the trunk.
     */
    outboundCallerId?: string;
    /**
     * IP address or domain of the SIP trunk.
     */
    sipServerAddress?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * List of SIP Trunks returned.
 */
export declare class ListSIPTrunks200ApplicationJSON extends SpeakeasyBase {
    sipTrunks?: ListSIPTrunks200ApplicationJSONSIPTrunks[];
    /**
     * Total number of records returned.
     */
    totalRecords?: number;
}
export declare class ListSIPTrunksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * List of SIP Trunks returned.
     */
    listSIPTrunks200ApplicationJSONObject?: ListSIPTrunks200ApplicationJSON;
}
