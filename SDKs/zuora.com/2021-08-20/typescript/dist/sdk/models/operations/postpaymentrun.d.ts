import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPaymentRunHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostPaymentRunRequest extends SpeakeasyBase {
    headers: PostPaymentRunHeaders;
    request: shared.PostPaymentRunRequest;
}
export declare class PostPaymentRunResponse extends SpeakeasyBase {
    contentType: string;
    getPaymentRunType?: shared.GetPaymentRunType;
    headers: Record<string, string[]>;
    statusCode: number;
}
