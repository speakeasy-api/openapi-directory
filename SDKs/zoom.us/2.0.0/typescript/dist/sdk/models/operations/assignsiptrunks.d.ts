import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssignSIPTrunksApplicationJSONSIPTrunks extends SpeakeasyBase {
    /**
     * DNIS of the sub account. The prefix of the DNIS (i.e. the first five digits of the DNIS value) must match the DNIS prefix of the master account. To retrieve the DNIS prefix of a master account's SIP Trunk, use the List SIP Trunks API and refer to the first five digits in the `dnis` value.
     *
     * @remarks
     *
     * For example, if the DNIS of the master account is 1888812345, the DNIS of the sub account must comprise of "18888" + "random_number". The maximum allowed length of the DNIS is 8.
     */
    dnis?: string;
    /**
     * Unique identifier of the SIP trunk that will be assigned to the sub account. The value of this field can be retrieved by listing the SIP Trunks of a master account using List SIP Trunks API.
     */
    id?: string;
    /**
     * Assign an outbound caller Id to the trunk.
     */
    outboundCallerId?: string;
}
export declare class AssignSIPTrunksApplicationJSON extends SpeakeasyBase {
    /**
     * Array of one or more SIP Trunk objects.
     */
    sipTrunks?: AssignSIPTrunksApplicationJSONSIPTrunks[];
}
export declare class AssignSIPTrunksRequest extends SpeakeasyBase {
    requestBody?: AssignSIPTrunksApplicationJSON;
    /**
     * Unique Identifier of the sub account.
     */
    accountId: string;
}
export declare class AssignSIPTrunks201ApplicationXMLSIPTrunks extends SpeakeasyBase {
    /**
     * DNIS - identifier for the SIP trunk enabled account.
     */
    dnis?: string;
    /**
     * Unique identifier of the SIP trunk.
     */
    id?: string;
    /**
     * Name of the SIP trunk.
     */
    name?: string;
    /**
     * If the value of this field is `"0"`, it means that all the calls will be routed through this special line. All other values indicate the prefix of the phone number.
     */
    numberPrefix?: string;
    /**
     * IP Address or domain of the SIP trunk.
     */
    sipServerAddress?: string;
}
/**
 * **HTTP Status Code:** `204` **No Content**<br>
 *
 * @remarks
 * SIP Trunk assigned successfully.
 */
export declare class AssignSIPTrunks201ApplicationXML extends SpeakeasyBase {
    sipTrunks?: AssignSIPTrunks201ApplicationXMLSIPTrunks[];
}
export declare class AssignSIPTrunks201ApplicationJSONSIPTrunks extends SpeakeasyBase {
    /**
     * DNIS - identifier for the SIP trunk enabled account.
     */
    dnis?: string;
    /**
     * Unique identifier of the SIP trunk.
     */
    id?: string;
    /**
     * Name of the SIP trunk.
     */
    name?: string;
    /**
     * If the value of this field is `"0"`, it means that all the calls will be routed through this special line. All other values indicate the prefix of the phone number.
     */
    numberPrefix?: string;
    /**
     * IP Address or domain of the SIP trunk.
     */
    sipServerAddress?: string;
}
/**
 * **HTTP Status Code:** `204` **No Content**<br>
 *
 * @remarks
 * SIP Trunk assigned successfully.
 */
export declare class AssignSIPTrunks201ApplicationJSON extends SpeakeasyBase {
    sipTrunks?: AssignSIPTrunks201ApplicationJSONSIPTrunks[];
}
export declare class AssignSIPTrunksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * SIP Trunk assigned successfully.
     */
    assignSIPTrunks201ApplicationJSONObject?: AssignSIPTrunks201ApplicationJSON;
}
