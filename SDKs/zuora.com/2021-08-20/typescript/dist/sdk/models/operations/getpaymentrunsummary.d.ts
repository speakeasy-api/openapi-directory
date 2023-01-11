import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentRunSummaryPathParams extends SpeakeasyBase {
    paymentRunId: string;
}
export declare class GetPaymentRunSummaryHeaders extends SpeakeasyBase {
    zuoraTrackId?: string;
}
export declare class GetPaymentRunSummaryRequest extends SpeakeasyBase {
    pathParams: GetPaymentRunSummaryPathParams;
    headers: GetPaymentRunSummaryHeaders;
}
export declare class GetPaymentRunSummaryResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentRunSummaryResponse?: shared.GetPaymentRunSummaryResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
