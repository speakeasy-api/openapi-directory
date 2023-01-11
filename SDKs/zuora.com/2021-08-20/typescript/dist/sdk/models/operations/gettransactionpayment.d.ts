import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionPaymentPathParams extends SpeakeasyBase {
    accountKey: string;
}
export declare class GetTransactionPaymentQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetTransactionPaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetTransactionPaymentRequest extends SpeakeasyBase {
    pathParams: GetTransactionPaymentPathParams;
    queryParams: GetTransactionPaymentQueryParams;
    headers: GetTransactionPaymentHeaders;
}
export declare class GetTransactionPaymentResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentsType?: shared.GetPaymentsType;
    headers: Record<string, string[]>;
    statusCode: number;
}
