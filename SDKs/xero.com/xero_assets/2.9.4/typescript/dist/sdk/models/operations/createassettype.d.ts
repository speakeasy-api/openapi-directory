import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAssetTypeSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateAssetTypeRequest extends SpeakeasyBase {
    /**
     * Asset type to add
     */
    assetType?: shared.AssetType;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class CreateAssetTypeResponse extends SpeakeasyBase {
    /**
     * results single object -  created fixed type
     */
    assetType?: shared.AssetType;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
