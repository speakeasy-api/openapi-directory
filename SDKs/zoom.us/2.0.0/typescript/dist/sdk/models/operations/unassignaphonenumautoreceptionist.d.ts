import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnassignAPhoneNumAutoReceptionistSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UnassignAPhoneNumAutoReceptionistRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the auto receptionist. This can be retrieved from the List Phone Sites API.
     */
    autoReceptionistId: string;
    /**
     * Unique Identifier of the phone number or provide the actual phone number in e164 format (example: +19995550123).
     */
    phoneNumberId: string;
}
export declare class UnassignAPhoneNumAutoReceptionistResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Phone number unassigned successfully.
     */
    unassignAPhoneNumAutoReceptionist204ApplicationJSONAny?: any;
}
