import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProviderAccountPathParams extends SpeakeasyBase {
    providerAccountId: number;
}
export declare class DeleteProviderAccountRequest extends SpeakeasyBase {
    pathParams: DeleteProviderAccountPathParams;
}
export declare class DeleteProviderAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
