import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRSforCreditMemoItemManualDistributionPathParams extends SpeakeasyBase {
    cmiId: string;
}
export declare class PostRSforCreditMemoItemManualDistributionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostRSforCreditMemoItemManualDistributionRequest extends SpeakeasyBase {
    pathParams: PostRSforCreditMemoItemManualDistributionPathParams;
    headers: PostRSforCreditMemoItemManualDistributionHeaders;
    request: Record<string, any>;
}
export declare class PostRSforCreditMemoItemManualDistributionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postRevenueScheduleByTransactionResponseType?: shared.PostRevenueScheduleByTransactionResponseType;
    statusCode: number;
}
