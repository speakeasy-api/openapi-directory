import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRSforDebitMemoItemManualDistributionPathParams extends SpeakeasyBase {
    dmiId: string;
}
export declare class PostRSforDebitMemoItemManualDistributionHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostRSforDebitMemoItemManualDistributionRequest extends SpeakeasyBase {
    pathParams: PostRSforDebitMemoItemManualDistributionPathParams;
    headers: PostRSforDebitMemoItemManualDistributionHeaders;
    request: Record<string, any>;
}
export declare class PostRSforDebitMemoItemManualDistributionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postRevenueScheduleByTransactionResponseType?: shared.PostRevenueScheduleByTransactionResponseType;
    statusCode: number;
}
