import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteCommonAreaPhoneSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DeleteCommonAreaPhoneRequest extends SpeakeasyBase {
    /**
     * Unique Identifier of the common area phone.
     */
    commonAreaPhoneId: string;
}
export declare class DeleteCommonAreaPhoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Common Area Phone deleted successfully.
     */
    deleteCommonAreaPhone204ApplicationJSONAny?: any;
}
