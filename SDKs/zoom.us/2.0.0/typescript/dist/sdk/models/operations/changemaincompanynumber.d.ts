import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ChangeMainCompanyNumberSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ChangeMainCompanyNumberApplicationJSON extends SpeakeasyBase {
    /**
     * Provide either the unique identifier of the phone number (id) or the phone number itself in e164 format (e.g: +199955500123).
     */
    phoneNumber?: string;
}
export declare class ChangeMainCompanyNumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Main company number updated successfully.
     */
    changeMainCompanyNumber204ApplicationJSONAny?: any;
}
