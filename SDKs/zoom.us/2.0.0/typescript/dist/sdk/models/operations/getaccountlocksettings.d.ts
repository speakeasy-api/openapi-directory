import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAccountLockSettingsPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountLockSettingsQueryParams extends SpeakeasyBase {
    customQueryFields?: string;
    option?: string;
}
export declare class GetAccountLockSettingsRequest extends SpeakeasyBase {
    pathParams: GetAccountLockSettingsPathParams;
    queryParams: GetAccountLockSettingsQueryParams;
}
export declare class GetAccountLockSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getAccountLockSettings200ApplicationJSONObject?: Record<string, any>;
}
