import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRefundItemPartsPathParams extends SpeakeasyBase {
    refundId: string;
    refundpartid: string;
}
export declare class GetRefundItemPartsQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetRefundItemPartsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRefundItemPartsRequest extends SpeakeasyBase {
    pathParams: GetRefundItemPartsPathParams;
    queryParams: GetRefundItemPartsQueryParams;
    headers: GetRefundItemPartsHeaders;
}
export declare class GetRefundItemPartsResponse extends SpeakeasyBase {
    contentType: string;
    getRefundItemPartCollectionType?: shared.GetRefundItemPartCollectionType;
    headers: Record<string, string[]>;
    statusCode: number;
}
