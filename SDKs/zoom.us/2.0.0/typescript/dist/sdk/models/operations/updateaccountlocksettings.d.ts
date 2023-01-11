import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAccountLockSettingsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class UpdateAccountLockSettingsRequests extends SpeakeasyBase {
    object?: Record<string, any>;
    object1?: Record<string, any>;
}
export declare class UpdateAccountLockSettingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class UpdateAccountLockSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateAccountLockSettingsPathParams;
    request?: UpdateAccountLockSettingsRequests;
    security: UpdateAccountLockSettingsSecurity;
}
export declare class UpdateAccountLockSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    updateAccountLockSettings200ApplicationJSONAny?: any;
    updateAccountLockSettings204ApplicationJSONObject?: Record<string, any>;
}
