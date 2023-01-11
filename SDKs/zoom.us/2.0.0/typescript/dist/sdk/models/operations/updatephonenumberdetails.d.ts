import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePhoneNumberDetailsPathParams extends SpeakeasyBase {
    numberId: string;
}
export declare class UpdatePhoneNumberDetailsApplicationJson extends SpeakeasyBase {
    capability?: string[];
    displayName?: string;
}
export declare class UpdatePhoneNumberDetailsMultipartFormData extends SpeakeasyBase {
    capability?: string[];
    displayName?: string;
}
export declare class UpdatePhoneNumberDetailsRequests extends SpeakeasyBase {
    object?: UpdatePhoneNumberDetailsApplicationJson;
    object1?: UpdatePhoneNumberDetailsMultipartFormData;
}
export declare class UpdatePhoneNumberDetailsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdatePhoneNumberDetailsRequest extends SpeakeasyBase {
    pathParams: UpdatePhoneNumberDetailsPathParams;
    request?: UpdatePhoneNumberDetailsRequests;
    security: UpdatePhoneNumberDetailsSecurity;
}
export declare class UpdatePhoneNumberDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updatePhoneNumberDetails204ApplicationJSONAny?: any;
}
