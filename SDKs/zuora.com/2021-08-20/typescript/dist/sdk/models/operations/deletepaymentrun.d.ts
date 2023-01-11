import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePaymentRunPathParams extends SpeakeasyBase {
    paymentRunId: string;
}
export declare class DeletePaymentRunHeaders extends SpeakeasyBase {
    zuoraTrackId?: string;
}
export declare class DeletePaymentRunRequest extends SpeakeasyBase {
    pathParams: DeletePaymentRunPathParams;
    headers: DeletePaymentRunHeaders;
}
export declare class DeletePaymentRunResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
