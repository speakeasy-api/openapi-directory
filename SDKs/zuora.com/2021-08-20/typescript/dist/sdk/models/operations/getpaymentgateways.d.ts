import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentgatewaysHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetPaymentgatewaysRequest extends SpeakeasyBase {
    headers: GetPaymentgatewaysHeaders;
}
export declare class GetPaymentgatewaysResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentGatwaysResponse?: shared.GetPaymentGatwaysResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
