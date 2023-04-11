import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * OK
 */
export declare class UserZak200ApplicationXML extends SpeakeasyBase {
    /**
     * The user's ZAK.
     */
    token?: string;
}
/**
 * OK
 */
export declare class UserZak200ApplicationJSON extends SpeakeasyBase {
    /**
     * The user's ZAK.
     */
    token?: string;
}
export declare class UserZakResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    userZak200ApplicationJSONObject?: UserZak200ApplicationJSON;
}
