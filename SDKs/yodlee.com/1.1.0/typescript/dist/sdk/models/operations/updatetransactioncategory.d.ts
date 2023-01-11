import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTransactionCategoryRequest extends SpeakeasyBase {
    request: shared.UpdateCategoryRequest;
}
export declare class UpdateTransactionCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
