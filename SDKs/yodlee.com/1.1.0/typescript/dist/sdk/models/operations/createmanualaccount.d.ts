import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateManualAccountRequest extends SpeakeasyBase {
    request: shared.CreateAccountRequest;
}
export declare class CreateManualAccountResponse extends SpeakeasyBase {
    contentType: string;
    createdAccountResponse?: shared.CreatedAccountResponse;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
