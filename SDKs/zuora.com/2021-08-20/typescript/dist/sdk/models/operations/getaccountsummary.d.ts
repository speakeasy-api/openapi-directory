import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountSummaryPathParams extends SpeakeasyBase {
    accountKey: string;
}
export declare class GetAccountSummaryHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetAccountSummaryRequest extends SpeakeasyBase {
    pathParams: GetAccountSummaryPathParams;
    headers: GetAccountSummaryHeaders;
}
export declare class GetAccountSummaryResponse extends SpeakeasyBase {
    contentType: string;
    getAccountSummaryType?: shared.GetAccountSummaryType;
    headers: Record<string, string[]>;
    statusCode: number;
}
