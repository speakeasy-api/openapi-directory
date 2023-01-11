import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetUpAccountPathParams extends SpeakeasyBase {
    accountId: string;
}
/**
 * Specify emergency address for the account.
**/
export declare class SetUpAccountApplicationJsonEmergencyAddress extends SpeakeasyBase {
    addressLine1: string;
    addressLine2?: string;
    city?: string;
    country: string;
    stateCode?: string;
    zip?: string;
}
export declare class SetUpAccountApplicationJson extends SpeakeasyBase {
    emergencyAddress: SetUpAccountApplicationJsonEmergencyAddress;
    extensionNumber: string;
}
/**
 * Specify emergency address for the account.
**/
export declare class SetUpAccountMultipartFormDataEmergencyAddress extends SpeakeasyBase {
    addressLine1: string;
    addressLine2?: string;
    city?: string;
    country: string;
    stateCode?: string;
    zip?: string;
}
export declare class SetUpAccountMultipartFormData extends SpeakeasyBase {
    emergencyAddress: SetUpAccountMultipartFormDataEmergencyAddress;
    extensionNumber: string;
}
export declare class SetUpAccountRequests extends SpeakeasyBase {
    object?: SetUpAccountApplicationJson;
    object1?: SetUpAccountMultipartFormData;
}
export declare class SetUpAccountSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class SetUpAccountRequest extends SpeakeasyBase {
    pathParams: SetUpAccountPathParams;
    request?: SetUpAccountRequests;
    security: SetUpAccountSecurity;
}
export declare class SetUpAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
