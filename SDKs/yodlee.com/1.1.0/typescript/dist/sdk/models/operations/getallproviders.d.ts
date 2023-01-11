import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllProvidersQueryParams extends SpeakeasyBase {
    capability?: string;
    datasetDollarFilter?: string;
    fullAccountNumberFields?: string;
    institutionId?: number;
    name?: string;
    priority?: string;
    providerId?: string;
    skip?: number;
    top?: number;
}
export declare class GetAllProvidersRequest extends SpeakeasyBase {
    queryParams: GetAllProvidersQueryParams;
}
export declare class GetAllProvidersResponse extends SpeakeasyBase {
    contentType: string;
    providerResponse?: shared.ProviderResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
