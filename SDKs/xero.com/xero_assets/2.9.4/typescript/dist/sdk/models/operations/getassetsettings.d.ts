import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssetSettingsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetAssetSettingsRequest extends SpeakeasyBase {
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetAssetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * search results matching criteria
     */
    setting?: shared.Setting;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
