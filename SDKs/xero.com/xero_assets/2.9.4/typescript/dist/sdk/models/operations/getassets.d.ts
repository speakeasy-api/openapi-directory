import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssetsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * Requests can be ordered by AssetType, AssetName, AssetNumber, PurchaseDate and PurchasePrice. If the asset status is DISPOSED it also allows DisposalDate and DisposalPrice.
 */
export declare enum GetAssetsOrderByEnum {
    AssetType = "AssetType",
    AssetName = "AssetName",
    AssetNumber = "AssetNumber",
    PurchaseDate = "PurchaseDate",
    PurchasePrice = "PurchasePrice",
    DisposalDate = "DisposalDate",
    DisposalPrice = "DisposalPrice"
}
/**
 * ASC or DESC
 */
export declare enum GetAssetsSortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetAssetsRequest extends SpeakeasyBase {
    /**
     * A string that can be used to filter the list to only return assets containing the text. Checks it against the AssetName, AssetNumber, Description and AssetTypeName fields.
     */
    filterBy?: string;
    /**
     * Requests can be ordered by AssetType, AssetName, AssetNumber, PurchaseDate and PurchasePrice. If the asset status is DISPOSED it also allows DisposalDate and DisposalPrice.
     */
    orderBy?: GetAssetsOrderByEnum;
    /**
     * Results are paged. This specifies which page of the results to return. The default page is 1.
     */
    page?: number;
    /**
     * The number of records returned per page. By default the number of records returned is 10.
     */
    pageSize?: number;
    /**
     * ASC or DESC
     */
    sortDirection?: GetAssetsSortDirectionEnum;
    /**
     * Required when retrieving a collection of assets. See Asset Status Codes
     */
    status: shared.AssetStatusQueryParamEnum;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetAssetsResponse extends SpeakeasyBase {
    /**
     * search results matching criteria
     */
    assets?: shared.Assets;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
