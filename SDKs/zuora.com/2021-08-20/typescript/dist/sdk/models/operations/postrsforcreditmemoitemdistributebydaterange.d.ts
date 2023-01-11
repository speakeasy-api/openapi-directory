import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRSforCreditMemoItemDistributeByDateRangePathParams extends SpeakeasyBase {
    cmiId: string;
}
export declare class PostRSforCreditMemoItemDistributeByDateRangeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostRSforCreditMemoItemDistributeByDateRangeRequest extends SpeakeasyBase {
    pathParams: PostRSforCreditMemoItemDistributeByDateRangePathParams;
    headers: PostRSforCreditMemoItemDistributeByDateRangeHeaders;
    request: Record<string, any>;
}
export declare class PostRSforCreditMemoItemDistributeByDateRangeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postRevenueScheduleByTransactionResponseType?: shared.PostRevenueScheduleByTransactionResponseType;
    statusCode: number;
}
