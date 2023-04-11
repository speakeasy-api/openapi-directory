import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssetTypesSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetAssetTypesRequest extends SpeakeasyBase {
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetAssetTypesResponse extends SpeakeasyBase {
    /**
     * search results matching criteria
     */
    assetTypes?: shared.AssetType[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
