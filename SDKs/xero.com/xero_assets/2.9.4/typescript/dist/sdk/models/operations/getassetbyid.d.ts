import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssetByIdSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetAssetByIdRequest extends SpeakeasyBase {
    /**
     * fixed asset id for single object
     */
    id: string;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetAssetByIdResponse extends SpeakeasyBase {
    /**
     * search results matching criteria
     */
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
