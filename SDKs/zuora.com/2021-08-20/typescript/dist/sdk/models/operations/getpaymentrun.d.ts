import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentRunPathParams extends SpeakeasyBase {
    paymentRunId: string;
}
export declare class GetPaymentRunHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetPaymentRunRequest extends SpeakeasyBase {
    pathParams: GetPaymentRunPathParams;
    headers: GetPaymentRunHeaders;
}
export declare class GetPaymentRunResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentRunType?: shared.GetPaymentRunType;
    headers: Record<string, string[]>;
    statusCode: number;
}
