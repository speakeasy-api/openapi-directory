import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transactionCategoryResponse?: shared.TransactionCategoryResponse;
}
