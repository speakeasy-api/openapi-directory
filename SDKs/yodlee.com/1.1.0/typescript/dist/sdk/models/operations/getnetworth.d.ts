import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNetworthQueryParams extends SpeakeasyBase {
    accountIds?: string;
    container?: string;
    fromDate?: string;
    include?: string;
    interval?: string;
    skip?: number;
    toDate?: string;
    top?: number;
}
export declare class GetNetworthRequest extends SpeakeasyBase {
    queryParams: GetNetworthQueryParams;
}
export declare class GetNetworthResponse extends SpeakeasyBase {
    contentType: string;
    derivedNetworthResponse?: shared.DerivedNetworthResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
