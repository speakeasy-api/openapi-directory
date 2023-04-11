import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Telephony bridge
 */
export declare enum TspUpdateApplicationJSONTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}
/**
 * TSP Account
 */
export declare class TspUpdateApplicationJSON extends SpeakeasyBase {
    /**
     * Control restriction on account users adding a TSP number outside of account's dial in numbers.
     */
    dialInNumberUnrestricted?: boolean;
    /**
     * Enable 3rd party audio conferencing for account users
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
     * Telephony bridge
     */
    tspBridge?: TspUpdateApplicationJSONTspBridgeEnum;
    /**
     * Enable TSP feature for account. This has to be enabled to use any other tsp settings/features.
     */
    tspEnabled?: boolean;
    /**
     * 3rd party audio conferencing provider
     */
    tspProvider?: string;
}
export declare class TspUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
