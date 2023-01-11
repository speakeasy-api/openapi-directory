import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentRunsQueryParams extends SpeakeasyBase {
    createdById?: string;
    createdDate?: Date;
    pageSize?: number;
    sort?: string;
    status?: shared.GlobalRequestPageSizeEnum4;
    targetDate?: Date;
    updatedById?: string;
    updatedDate?: Date;
}
export declare class GetPaymentRunsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetPaymentRunsRequest extends SpeakeasyBase {
    queryParams: GetPaymentRunsQueryParams;
    headers: GetPaymentRunsHeaders;
}
export declare class GetPaymentRunsResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentRunCollectionType?: shared.GetPaymentRunCollectionType;
    headers: Record<string, string[]>;
    statusCode: number;
}
