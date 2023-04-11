import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAssetSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateAssetRequest extends SpeakeasyBase {
    /**
     * Fixed asset you are creating
     */
    asset: shared.Asset;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class CreateAssetResponse extends SpeakeasyBase {
    /**
     * return single object - create new asset
     */
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
