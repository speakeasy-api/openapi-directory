import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSettingsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetSettingsRequest extends SpeakeasyBase {
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * payroll settings
     */
    settingsObject?: shared.SettingsObject;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
