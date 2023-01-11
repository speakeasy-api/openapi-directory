import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditCredentialsOrRefreshProviderAccountQueryParams extends SpeakeasyBase {
    providerAccountIds: string;
}
export declare class EditCredentialsOrRefreshProviderAccountRequest extends SpeakeasyBase {
    queryParams: EditCredentialsOrRefreshProviderAccountQueryParams;
    request?: shared.ProviderAccountRequestInput;
}
export declare class EditCredentialsOrRefreshProviderAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updatedProviderAccountResponse?: shared.UpdatedProviderAccountResponse;
    yodleeError?: shared.YodleeError;
}
