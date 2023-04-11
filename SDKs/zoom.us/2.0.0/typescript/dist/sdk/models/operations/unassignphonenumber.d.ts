import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnassignPhoneNumberSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UnassignPhoneNumberRequest extends SpeakeasyBase {
    /**
     * Provide either phone number or phoneNumberId of the user.
     */
    phoneNumberId: string;
    /**
     * Provide either userId or email address of the user.
     */
    userId: string;
}
export declare class UnassignPhoneNumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204`
     *
     * @remarks
     * The phone number has been unassigned successfully.
     */
    unassignPhoneNumber204ApplicationJSONAny?: any;
}
