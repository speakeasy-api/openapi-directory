import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHoldingSummaryQueryParams extends SpeakeasyBase {
    accountIds?: string;
    classificationType?: string;
    include?: string;
}
export declare class GetHoldingSummaryRequest extends SpeakeasyBase {
    queryParams: GetHoldingSummaryQueryParams;
}
export declare class GetHoldingSummaryResponse extends SpeakeasyBase {
    contentType: string;
    derivedHoldingSummaryResponse?: shared.DerivedHoldingSummaryResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
