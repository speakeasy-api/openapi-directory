import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRunTrialBalancePathParams extends SpeakeasyBase {
    apId: string;
}
export declare class PutRunTrialBalanceHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutRunTrialBalanceRequest extends SpeakeasyBase {
    pathParams: PutRunTrialBalancePathParams;
    headers: PutRunTrialBalanceHeaders;
}
export declare class PutRunTrialBalanceResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
