import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRSforDebitMemoItemDistributeByDateRangePathParams extends SpeakeasyBase {
    dmiId: string;
}
export declare class PostRSforDebitMemoItemDistributeByDateRangeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostRSforDebitMemoItemDistributeByDateRangeRequest extends SpeakeasyBase {
    pathParams: PostRSforDebitMemoItemDistributeByDateRangePathParams;
    headers: PostRSforDebitMemoItemDistributeByDateRangeHeaders;
    request: Record<string, any>;
}
export declare class PostRSforDebitMemoItemDistributeByDateRangeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postRevenueScheduleByTransactionResponseType?: shared.PostRevenueScheduleByTransactionResponseType;
    statusCode: number;
}
