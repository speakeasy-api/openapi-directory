import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdatePhoneNumberDetailsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UpdatePhoneNumberDetailsApplicationJSON extends SpeakeasyBase {
    /**
     * Phone number capability. Values: `outgoing` or `incoming`. Add one or both.
     */
    capability?: string[];
    /**
     * Phone number display name.
     */
    displayName?: string;
}
export declare class UpdatePhoneNumberDetailsRequest extends SpeakeasyBase {
    requestBody?: UpdatePhoneNumberDetailsApplicationJSON;
    /**
     * Phone number ID.
     */
    numberId: string;
}
export declare class UpdatePhoneNumberDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204`<br>
     *
     * @remarks
     * No Content
     */
    updatePhoneNumberDetails204ApplicationJSONAny?: any;
}
