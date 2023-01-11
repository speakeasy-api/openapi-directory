import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAccountPathParams extends SpeakeasyBase {
    accountId: number;
}
export declare class DeleteAccountRequest extends SpeakeasyBase {
    pathParams: DeleteAccountPathParams;
}
export declare class DeleteAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
