import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAccountOwnerPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class UpdateAccountOwnerApplicationJson extends SpeakeasyBase {
    email: string;
}
export declare class UpdateAccountOwnerMultipartFormData extends SpeakeasyBase {
    email: string;
}
export declare class UpdateAccountOwnerRequests extends SpeakeasyBase {
    object?: UpdateAccountOwnerApplicationJson;
    object1?: UpdateAccountOwnerMultipartFormData;
}
export declare class UpdateAccountOwnerSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateAccountOwnerRequest extends SpeakeasyBase {
    pathParams: UpdateAccountOwnerPathParams;
    request?: UpdateAccountOwnerRequests;
    security: UpdateAccountOwnerSecurity;
}
export declare class UpdateAccountOwnerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateAccountOwner204ApplicationJSONAny?: any;
}
