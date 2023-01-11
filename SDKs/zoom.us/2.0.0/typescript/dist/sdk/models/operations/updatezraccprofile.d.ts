import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateZrAccProfileApplicationJsonBasic extends SpeakeasyBase {
    requiredCodeToExt?: boolean;
    roomPasscode?: string;
    supportEmail?: string;
    supportPhone?: string;
}
export declare class UpdateZrAccProfileApplicationJson extends SpeakeasyBase {
    basic?: UpdateZrAccProfileApplicationJsonBasic;
}
export declare class UpdateZrAccProfileMultipartFormDataBasic extends SpeakeasyBase {
    requiredCodeToExt?: boolean;
    roomPasscode?: string;
    supportEmail?: string;
    supportPhone?: string;
}
export declare class UpdateZrAccProfileMultipartFormData extends SpeakeasyBase {
    basic?: UpdateZrAccProfileMultipartFormDataBasic;
}
export declare class UpdateZrAccProfileRequests extends SpeakeasyBase {
    object?: UpdateZrAccProfileApplicationJson;
    object1?: UpdateZrAccProfileMultipartFormData;
}
export declare class UpdateZrAccProfileSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateZrAccProfileRequest extends SpeakeasyBase {
    request?: UpdateZrAccProfileRequests;
    security: UpdateZrAccProfileSecurity;
}
export declare class UpdateZrAccProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateZRAccProfile204ApplicationJSONObject?: Record<string, any>;
}
