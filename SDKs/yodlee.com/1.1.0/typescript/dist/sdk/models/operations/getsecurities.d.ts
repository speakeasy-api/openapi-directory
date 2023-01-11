import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSecuritiesQueryParams extends SpeakeasyBase {
    holdingId?: string;
}
export declare class GetSecuritiesRequest extends SpeakeasyBase {
    queryParams: GetSecuritiesQueryParams;
}
export declare class GetSecuritiesResponse extends SpeakeasyBase {
    contentType: string;
    holdingSecuritiesResponse?: shared.HoldingSecuritiesResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
