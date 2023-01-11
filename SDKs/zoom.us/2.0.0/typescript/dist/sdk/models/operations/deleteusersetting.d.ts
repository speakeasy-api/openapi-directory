import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUserSettingPathParams extends SpeakeasyBase {
    settingType: string;
    userId: string;
}
export declare class DeleteUserSettingQueryParams extends SpeakeasyBase {
    sharedId: string;
}
export declare class DeleteUserSettingSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DeleteUserSettingRequest extends SpeakeasyBase {
    pathParams: DeleteUserSettingPathParams;
    queryParams: DeleteUserSettingQueryParams;
    security: DeleteUserSettingSecurity;
}
export declare class DeleteUserSettingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    deleteUserSetting204ApplicationJSONAny?: any;
}
