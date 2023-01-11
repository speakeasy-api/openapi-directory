import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProviderPathParams extends SpeakeasyBase {
    providerId: number;
}
export declare class GetProviderRequest extends SpeakeasyBase {
    pathParams: GetProviderPathParams;
}
export declare class GetProviderResponse extends SpeakeasyBase {
    contentType: string;
    providerDetailResponse?: shared.ProviderDetailResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
