import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentItemPartsPathParams extends SpeakeasyBase {
    partid: string;
    paymentId: string;
}
export declare class GetPaymentItemPartsQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetPaymentItemPartsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetPaymentItemPartsRequest extends SpeakeasyBase {
    pathParams: GetPaymentItemPartsPathParams;
    queryParams: GetPaymentItemPartsQueryParams;
    headers: GetPaymentItemPartsHeaders;
}
export declare class GetPaymentItemPartsResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentItemPartCollectionType?: shared.GetPaymentItemPartCollectionType;
    headers: Record<string, string[]>;
    statusCode: number;
}
