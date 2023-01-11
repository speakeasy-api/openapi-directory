import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPaymentRunPathParams extends SpeakeasyBase {
    paymentRunId: string;
}
export declare class PutPaymentRunHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutPaymentRunRequest extends SpeakeasyBase {
    pathParams: PutPaymentRunPathParams;
    headers: PutPaymentRunHeaders;
    request: shared.PutPaymentRunRequest;
}
export declare class PutPaymentRunResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentRunType?: shared.GetPaymentRunType;
    headers: Record<string, string[]>;
    statusCode: number;
}
