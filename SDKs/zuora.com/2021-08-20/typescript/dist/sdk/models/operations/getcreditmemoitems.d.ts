import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCreditMemoItemsPathParams extends SpeakeasyBase {
    creditMemoId: string;
}
export declare class GetCreditMemoItemsQueryParams extends SpeakeasyBase {
    amount?: number;
    appliedAmount?: number;
    createdById?: string;
    createdDate?: Date;
    id?: string;
    pageSize?: number;
    refundAmount?: number;
    serviceEndDate?: Date;
    serviceStartDate?: Date;
    sku?: string;
    skuName?: string;
    sort?: string;
    sourceItemId?: string;
    subscriptionId?: string;
    updatedById?: string;
    updatedDate?: Date;
}
export declare class GetCreditMemoItemsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class GetCreditMemoItemsRequest extends SpeakeasyBase {
    pathParams: GetCreditMemoItemsPathParams;
    queryParams: GetCreditMemoItemsQueryParams;
    headers: GetCreditMemoItemsHeaders;
}
export declare class GetCreditMemoItemsResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoItemsListType?: shared.GetCreditMemoItemsListType;
    headers: Record<string, string[]>;
    statusCode: number;
}
