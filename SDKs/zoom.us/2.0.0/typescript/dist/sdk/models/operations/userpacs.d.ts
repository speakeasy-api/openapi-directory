import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserPACsRequest extends SpeakeasyBase {
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class UserPACs200ApplicationXMLPacAccountsDedicatedDialInNumber extends SpeakeasyBase {
    /**
     * Country code.
     */
    country?: string;
    /**
     * Dial-in number: length is less than 16.
     */
    number?: string;
}
export declare class UserPACs200ApplicationXMLPacAccountsGlobalDialInNumbers extends SpeakeasyBase {
    /**
     * Country code.
     */
    country?: string;
    /**
     * Dial-in number: length is less than 16.
     */
    number?: string;
}
export declare class UserPACs200ApplicationXMLPacAccounts extends SpeakeasyBase {
    /**
     * Conference ID.
     */
    conferenceId?: number;
    /**
     * List of dedicated dial-in numbers.
     */
    dedicatedDialInNumber?: UserPACs200ApplicationXMLPacAccountsDedicatedDialInNumber[];
    /**
     * List of global dial-in numbers.
     */
    globalDialInNumbers?: UserPACs200ApplicationXMLPacAccountsGlobalDialInNumbers[];
    /**
     * Listen-Only password: numeric value - length is less than 6.
     */
    listenOnlyPassword?: string;
    /**
     * Participant password: numeric value - length is less than 6.
     */
    participantPassword?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * PAC account list returned.
 */
export declare class UserPACs200ApplicationXML extends SpeakeasyBase {
    pacAccounts?: UserPACs200ApplicationXMLPacAccounts[];
}
export declare class UserPACs200ApplicationJSONPacAccountsDedicatedDialInNumber extends SpeakeasyBase {
    /**
     * Country code.
     */
    country?: string;
    /**
     * Dial-in number: length is less than 16.
     */
    number?: string;
}
export declare class UserPACs200ApplicationJSONPacAccountsGlobalDialInNumbers extends SpeakeasyBase {
    /**
     * Country code.
     */
    country?: string;
    /**
     * Dial-in number: length is less than 16.
     */
    number?: string;
}
export declare class UserPACs200ApplicationJSONPacAccounts extends SpeakeasyBase {
    /**
     * Conference ID.
     */
    conferenceId?: number;
    /**
     * List of dedicated dial-in numbers.
     */
    dedicatedDialInNumber?: UserPACs200ApplicationJSONPacAccountsDedicatedDialInNumber[];
    /**
     * List of global dial-in numbers.
     */
    globalDialInNumbers?: UserPACs200ApplicationJSONPacAccountsGlobalDialInNumbers[];
    /**
     * Listen-Only password: numeric value - length is less than 6.
     */
    listenOnlyPassword?: string;
    /**
     * Participant password: numeric value - length is less than 6.
     */
    participantPassword?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * PAC account list returned.
 */
export declare class UserPACs200ApplicationJSON extends SpeakeasyBase {
    pacAccounts?: UserPACs200ApplicationJSONPacAccounts[];
}
export declare class UserPACsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * PAC account list returned.
     */
    userPACs200ApplicationJSONObject?: UserPACs200ApplicationJSON;
}
