import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Tsp200ApplicationXMLDialInNumbers extends SpeakeasyBase {
    /**
     * Country Code
     */
    code?: string;
    /**
     * Dial-in number, length is less than 16
     */
    number?: string;
    /**
     * Dial-in number type.
     */
    type?: string;
}
/**
 * Telephony bridge zone
 */
export declare enum Tsp200ApplicationXMLTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * TSP account detail returned successfully.
 */
export declare class Tsp200ApplicationXML extends SpeakeasyBase {
    /**
     * Control restriction on account users adding a TSP number outside of account's dial in numbers.
     */
    dialInNumberUnrestricted?: boolean;
    dialInNumbers?: Tsp200ApplicationXMLDialInNumbers[];
    /**
     * Enable Telephony Service Provider for account users.
     */
    enable?: boolean;
    /**
     * For master account, extend its TSP setting to all sub accounts. For sub account, extend TSP setting from master account.
     */
    masterAccountSettingExtended?: boolean;
    /**
     * Control restriction on account users being able to modify their TSP credentials.
     */
    modifyCredentialForbidden?: boolean;
    /**
     * Telephony bridge zone
     */
    tspBridge?: Tsp200ApplicationXMLTspBridgeEnum;
    /**
     * Enable TSP feature for account. This has to be enabled to use any other tsp settings/features.
     */
    tspEnabled?: boolean;
    /**
     * Telephony Service Provider.
     */
    tspProvider?: string;
}
export declare class Tsp200ApplicationJSONDialInNumbers extends SpeakeasyBase {
    /**
     * Country Code
     */
    code?: string;
    /**
     * Dial-in number, length is less than 16
     */
    number?: string;
    /**
     * Dial-in number type.
     */
    type?: string;
}
/**
 * Telephony bridge zone
 */
export declare enum Tsp200ApplicationJSONTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * TSP account detail returned successfully.
 */
export declare class Tsp200ApplicationJSON extends SpeakeasyBase {
    /**
     * Control restriction on account users adding a TSP number outside of account's dial in numbers.
     */
    dialInNumberUnrestricted?: boolean;
    dialInNumbers?: Tsp200ApplicationJSONDialInNumbers[];
    /**
     * Enable Telephony Service Provider for account users.
     */
    enable?: boolean;
    /**
     * For master account, extend its TSP setting to all sub accounts. For sub account, extend TSP setting from master account.
     */
    masterAccountSettingExtended?: boolean;
    /**
     * Control restriction on account users being able to modify their TSP credentials.
     */
    modifyCredentialForbidden?: boolean;
    /**
     * Telephony bridge zone
     */
    tspBridge?: Tsp200ApplicationJSONTspBridgeEnum;
    /**
     * Enable TSP feature for account. This has to be enabled to use any other tsp settings/features.
     */
    tspEnabled?: boolean;
    /**
     * Telephony Service Provider.
     */
    tspProvider?: string;
}
export declare class TspResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * TSP account detail returned successfully.
     */
    tsp200ApplicationJSONObject?: Tsp200ApplicationJSON;
}
