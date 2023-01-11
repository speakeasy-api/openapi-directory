import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentPartsPathParams extends SpeakeasyBase {
    paymentId: string;
}
export declare class GetPaymentPartsQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetPaymentPartsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetPaymentPartsRequest extends SpeakeasyBase {
    pathParams: GetPaymentPartsPathParams;
    queryParams: GetPaymentPartsQueryParams;
    headers: GetPaymentPartsHeaders;
}
export declare class GetPaymentPartsResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentPartsCollectionType?: shared.GetPaymentPartsCollectionType;
    headers: Record<string, string[]>;
    statusCode: number;
}
