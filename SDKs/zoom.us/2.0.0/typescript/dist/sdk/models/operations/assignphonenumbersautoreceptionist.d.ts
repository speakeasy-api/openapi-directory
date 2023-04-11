import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssignPhoneNumbersAutoReceptionistSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class AssignPhoneNumbersAutoReceptionistApplicationJSONPhoneNumbers extends SpeakeasyBase {
    /**
     * Unique Identifier of the Phone number.
     */
    id?: string;
    /**
     * Phone number in e164 format.
     */
    number?: string;
}
export declare class AssignPhoneNumbersAutoReceptionistApplicationJSON extends SpeakeasyBase {
    /**
     * Provide either the unique identifier of the Phone Number  in the `id` field or provide the phone number in the `number` field.
     */
    phoneNumbers?: AssignPhoneNumbersAutoReceptionistApplicationJSONPhoneNumbers[];
}
export declare class AssignPhoneNumbersAutoReceptionistRequest extends SpeakeasyBase {
    requestBody?: AssignPhoneNumbersAutoReceptionistApplicationJSON;
    /**
     * Unique Identifier of the Auto Receptionist. It can be retrieved from the [List Sites API](https://marketplace.zoom.us/docs/api-reference/zoom-api/phone-site/listphonesites).
     */
    autoReceptionistId: string;
}
export declare class AssignPhoneNumbersAutoReceptionistResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Phone numbers assigned successfully.
     */
    assignPhoneNumbersAutoReceptionist204ApplicationJSONAny?: any;
}
