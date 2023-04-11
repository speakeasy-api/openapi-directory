import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSIPPhoneSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DeleteSIPPhoneRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the SIP Phone. It can be retrieved from the List SIP Phones API.
     */
    phoneId: string;
}
export declare class DeleteSIPPhoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204`<br>
     *
     * @remarks
     * SIP Phone deleted.
     */
    deleteSIPPhone204ApplicationJSONObject?: Record<string, any>;
}
