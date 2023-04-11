import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetUpAccountSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Specify emergency address for the account.
 */
export declare class SetUpAccountApplicationJSONEmergencyAddress extends SpeakeasyBase {
    /**
     * Specify the street address.
     */
    addressLine1: string;
    /**
     * Specify any building number, floor number, or unit number.
     */
    addressLine2?: string;
    /**
     * City of the emergency address. Required or optional dependent on different countries.
     */
    city?: string;
    /**
     * Specify the two letter [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) (Alpha-2 code in ISO-3166).
     */
    country: string;
    /**
     * State code of the emergency address. Required or optional dependent on the country and state.
     */
    stateCode?: string;
    /**
     * Zip code of the emergency address. Required or optional dependent on different countries.
     */
    zip?: string;
}
export declare class SetUpAccountApplicationJSON extends SpeakeasyBase {
    /**
     * Specify emergency address for the account.
     */
    emergencyAddress: SetUpAccountApplicationJSONEmergencyAddress;
    /**
     * Specify extension number that will be associated with the owner of the account.
     */
    extensionNumber: string;
}
export declare class SetUpAccountRequest extends SpeakeasyBase {
    requestBody?: SetUpAccountApplicationJSON;
    /**
     * Unique identifier of the account.
     */
    accountId: string;
}
export declare class SetUpAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
