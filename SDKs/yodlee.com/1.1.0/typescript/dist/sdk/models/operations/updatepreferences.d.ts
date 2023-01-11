import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePreferencesPathParams extends SpeakeasyBase {
    providerAccountId: number;
}
export declare class UpdatePreferencesRequest extends SpeakeasyBase {
    pathParams: UpdatePreferencesPathParams;
    request: shared.ProviderAccountPreferencesRequest;
}
export declare class UpdatePreferencesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
