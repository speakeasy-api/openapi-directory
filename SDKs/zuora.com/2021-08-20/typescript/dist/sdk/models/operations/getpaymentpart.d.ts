import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentPartPathParams extends SpeakeasyBase {
    partid: string;
    paymentId: string;
}
export declare class GetPaymentPartHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetPaymentPartRequest extends SpeakeasyBase {
    pathParams: GetPaymentPartPathParams;
    headers: GetPaymentPartHeaders;
}
export declare class GetPaymentPartResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentPartType?: shared.GetPaymentPartType;
    headers: Record<string, string[]>;
    statusCode: number;
}
