import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTransactionPathParams extends SpeakeasyBase {
    transactionId: number;
}
export declare class UpdateTransactionRequest extends SpeakeasyBase {
    pathParams: UpdateTransactionPathParams;
    request: shared.TransactionRequestInput;
}
export declare class UpdateTransactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
