import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssignPhoneNumberSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class AssignPhoneNumberApplicationJSONPhoneNumbers extends SpeakeasyBase {
    /**
     * ID for phone number
     */
    id?: string;
    /**
     * Phone number in E164 format.
     */
    number?: string;
}
/**
 * Provide either an id or a number in the request body.
 */
export declare class AssignPhoneNumberApplicationJSON extends SpeakeasyBase {
    phoneNumbers?: AssignPhoneNumberApplicationJSONPhoneNumbers[];
}
export declare class AssignPhoneNumberRequest extends SpeakeasyBase {
    /**
     * Provide either an id or a number in the request body.
     */
    requestBody?: AssignPhoneNumberApplicationJSON;
    userId: string;
}
export declare class AssignPhoneNumber200ApplicationXMLPhoneNumbers extends SpeakeasyBase {
    /**
     * ID of the phone number
     */
    id?: string;
    /**
     * The phone number that is assigned to the user.
     */
    number?: string;
}
/**
 * **HTTP Status Code:** `200` <br>
 *
 * @remarks
 * Phone number assigned successfully.
 *
 */
export declare class AssignPhoneNumber200ApplicationXML extends SpeakeasyBase {
    /**
     * Assigned phone number
     */
    phoneNumbers?: AssignPhoneNumber200ApplicationXMLPhoneNumbers[];
}
export declare class AssignPhoneNumber200ApplicationJSONPhoneNumbers extends SpeakeasyBase {
    /**
     * ID of the phone number
     */
    id?: string;
    /**
     * The phone number that is assigned to the user.
     */
    number?: string;
}
/**
 * **HTTP Status Code:** `200` <br>
 *
 * @remarks
 * Phone number assigned successfully.
 *
 */
export declare class AssignPhoneNumber200ApplicationJSON extends SpeakeasyBase {
    /**
     * Assigned phone number
     */
    phoneNumbers?: AssignPhoneNumber200ApplicationJSONPhoneNumbers[];
}
export declare class AssignPhoneNumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` <br>
     *
     * @remarks
     * Phone number assigned successfully.
     *
     */
    assignPhoneNumber200ApplicationJSONObject?: AssignPhoneNumber200ApplicationJSON;
}
