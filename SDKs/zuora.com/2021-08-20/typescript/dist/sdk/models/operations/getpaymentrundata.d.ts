import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentRunDataPathParams extends SpeakeasyBase {
    paymentRunId: string;
}
export declare class GetPaymentRunDataHeaders extends SpeakeasyBase {
    zuoraTrackId?: string;
}
export declare class GetPaymentRunDataRequest extends SpeakeasyBase {
    pathParams: GetPaymentRunDataPathParams;
    headers: GetPaymentRunDataHeaders;
}
export declare class GetPaymentRunDataResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentRunDataArrayResponse?: shared.GetPaymentRunDataArrayResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
