import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProvidersCountQueryParams extends SpeakeasyBase {
    capability?: string;
    datasetDollarFilter?: string;
    fullAccountNumberFields?: string;
    name?: string;
    priority?: string;
}
export declare class GetProvidersCountRequest extends SpeakeasyBase {
    queryParams: GetProvidersCountQueryParams;
}
export declare class GetProvidersCountResponse extends SpeakeasyBase {
    contentType: string;
    providersCountResponse?: shared.ProvidersCountResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
