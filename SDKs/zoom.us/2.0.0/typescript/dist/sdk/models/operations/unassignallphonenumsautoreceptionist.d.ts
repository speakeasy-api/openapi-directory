import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnassignAllPhoneNumsAutoReceptionistSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class UnassignAllPhoneNumsAutoReceptionistRequest extends SpeakeasyBase {
    autoReceptionistId: string;
}
export declare class UnassignAllPhoneNumsAutoReceptionistResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `204` **No Content**<br>
     *
     * @remarks
     * Phone numbers unassigned successfully.
     */
    unassignAllPhoneNumsAutoReceptionist204ApplicationJSONAny?: any;
}
