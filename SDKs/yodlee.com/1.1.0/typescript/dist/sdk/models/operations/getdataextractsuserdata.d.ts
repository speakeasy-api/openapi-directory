import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDataExtractsUserDataQueryParams extends SpeakeasyBase {
    fromDate: string;
    loginName: string;
    toDate: string;
}
export declare class GetDataExtractsUserDataRequest extends SpeakeasyBase {
    queryParams: GetDataExtractsUserDataQueryParams;
}
export declare class GetDataExtractsUserDataResponse extends SpeakeasyBase {
    contentType: string;
    dataExtractsUserDataResponse?: shared.DataExtractsUserDataResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
