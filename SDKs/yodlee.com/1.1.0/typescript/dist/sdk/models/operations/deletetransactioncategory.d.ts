import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTransactionCategoryPathParams extends SpeakeasyBase {
    categoryId: number;
}
export declare class DeleteTransactionCategoryRequest extends SpeakeasyBase {
    pathParams: DeleteTransactionCategoryPathParams;
}
export declare class DeleteTransactionCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
