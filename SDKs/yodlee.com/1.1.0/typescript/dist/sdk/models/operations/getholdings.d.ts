import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHoldingsQueryParams extends SpeakeasyBase {
    accountId?: string;
    assetClassificationClassificationType?: string;
    classificationValue?: string;
    include?: string;
    providerAccountId?: string;
}
export declare class GetHoldingsRequest extends SpeakeasyBase {
    queryParams: GetHoldingsQueryParams;
}
export declare class GetHoldingsResponse extends SpeakeasyBase {
    contentType: string;
    holdingResponse?: shared.HoldingResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
