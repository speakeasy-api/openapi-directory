import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserEmailSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UserEmailRequest extends SpeakeasyBase {
    /**
     * The email address to be verified.
     */
    email: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Success.
 */
export declare class UserEmail200ApplicationXML extends SpeakeasyBase {
    /**
     * Indicates whether or not the email already exists in Zoom.
     */
    existedEmail?: boolean;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Success.
 */
export declare class UserEmail200ApplicationJSON extends SpeakeasyBase {
    /**
     * Indicates whether or not the email already exists in Zoom.
     */
    existedEmail?: boolean;
}
export declare class UserEmailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Success.
     */
    userEmail200ApplicationJSONObject?: UserEmail200ApplicationJSON;
}
