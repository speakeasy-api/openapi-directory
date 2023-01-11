import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTransactionCategoryRequest extends SpeakeasyBase {
    request: shared.TransactionCategoryRequestInput;
}
export declare class CreateTransactionCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
