import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDebitMemoItemsPathParams extends SpeakeasyBase {
    debitMemoId: string;
}
export declare class GetDebitMemoItemsQueryParams extends SpeakeasyBase {
    amount?: number;
    beAppliedAmount?: number;
    createdById?: string;
    createdDate?: Date;
    id?: string;
    pageSize?: number;
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
export declare class GetDebitMemoItemsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class GetDebitMemoItemsRequest extends SpeakeasyBase {
    pathParams: GetDebitMemoItemsPathParams;
    queryParams: GetDebitMemoItemsQueryParams;
    headers: GetDebitMemoItemsHeaders;
}
export declare class GetDebitMemoItemsResponse extends SpeakeasyBase {
    contentType: string;
    getDebitMemoItemCollectionType?: shared.GetDebitMemoItemCollectionType;
    headers: Record<string, string[]>;
    statusCode: number;
}
