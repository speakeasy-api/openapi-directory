import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentItemPartPathParams extends SpeakeasyBase {
    itempartid: string;
    partid: string;
    paymentId: string;
}
export declare class GetPaymentItemPartHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetPaymentItemPartRequest extends SpeakeasyBase {
    pathParams: GetPaymentItemPartPathParams;
    headers: GetPaymentItemPartHeaders;
}
export declare class GetPaymentItemPartResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentItemPartType?: shared.GetPaymentItemPartType;
    headers: Record<string, string[]>;
    statusCode: number;
}
