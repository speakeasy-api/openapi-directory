import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRoomProfilePathParams extends SpeakeasyBase {
    roomId: string;
}
export declare class UpdateRoomProfileApplicationJsonBasic extends SpeakeasyBase {
    hideRoomInContacts?: boolean;
    name?: string;
    requiredCodeToExt?: boolean;
    roomPasscode?: string;
    supportEmail?: string;
    supportPhone?: string;
}
export declare class UpdateRoomProfileApplicationJson extends SpeakeasyBase {
    basic?: UpdateRoomProfileApplicationJsonBasic;
}
export declare class UpdateRoomProfileMultipartFormDataBasic extends SpeakeasyBase {
    hideRoomInContacts?: boolean;
    name?: string;
    requiredCodeToExt?: boolean;
    roomPasscode?: string;
    supportEmail?: string;
    supportPhone?: string;
}
export declare class UpdateRoomProfileMultipartFormData extends SpeakeasyBase {
    basic?: UpdateRoomProfileMultipartFormDataBasic;
}
export declare class UpdateRoomProfileRequests extends SpeakeasyBase {
    object?: UpdateRoomProfileApplicationJson;
    object1?: UpdateRoomProfileMultipartFormData;
}
export declare class UpdateRoomProfileSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateRoomProfileRequest extends SpeakeasyBase {
    pathParams: UpdateRoomProfilePathParams;
    request?: UpdateRoomProfileRequests;
    security: UpdateRoomProfileSecurity;
}
export declare class UpdateRoomProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateRoomProfile204ApplicationJSONObject?: Record<string, any>;
}
