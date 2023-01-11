import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SwitchUserAccountPathParams extends SpeakeasyBase {
    accountId: string;
    userId: string;
}
export declare class SwitchUserAccountApplicationJson extends SpeakeasyBase {
    accountId: string;
}
export declare class SwitchUserAccountMultipartFormData extends SpeakeasyBase {
    accountId: string;
}
export declare class SwitchUserAccountRequests extends SpeakeasyBase {
    object?: SwitchUserAccountApplicationJson;
    object1?: SwitchUserAccountMultipartFormData;
}
export declare class SwitchUserAccountSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class SwitchUserAccountRequest extends SpeakeasyBase {
    pathParams: SwitchUserAccountPathParams;
    request?: SwitchUserAccountRequests;
    security: SwitchUserAccountSecurity;
}
export declare class SwitchUserAccountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    switchUserAccount204ApplicationJSONAny?: any;
}
