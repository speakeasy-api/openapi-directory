import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePhoneSettingsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class UpdatePhoneSettingsApplicationJsonByoc extends SpeakeasyBase {
    enable?: boolean;
}
export declare class UpdatePhoneSettingsApplicationJson extends SpeakeasyBase {
    byoc?: UpdatePhoneSettingsApplicationJsonByoc;
}
export declare class UpdatePhoneSettingsMultipartFormDataByoc extends SpeakeasyBase {
    enable?: boolean;
}
export declare class UpdatePhoneSettingsMultipartFormData extends SpeakeasyBase {
    byoc?: UpdatePhoneSettingsMultipartFormDataByoc;
}
export declare class UpdatePhoneSettingsRequests extends SpeakeasyBase {
    object?: UpdatePhoneSettingsApplicationJson;
    object1?: UpdatePhoneSettingsMultipartFormData;
}
export declare class UpdatePhoneSettingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdatePhoneSettingsRequest extends SpeakeasyBase {
    pathParams: UpdatePhoneSettingsPathParams;
    request?: UpdatePhoneSettingsRequests;
    security: UpdatePhoneSettingsSecurity;
}
export declare class UpdatePhoneSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updatePhoneSettings204ApplicationJSONAny?: any;
}
