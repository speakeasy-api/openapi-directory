import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAccountPathParams extends SpeakeasyBase {
    accountId: number;
}
export declare class UpdateAccountRequest extends SpeakeasyBase {
    pathParams: UpdateAccountPathParams;
    request: shared.UpdateAccountRequest;
}
export declare class UpdateAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
