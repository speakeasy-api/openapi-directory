import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTransactionsRequest extends SpeakeasyBase {
    /**
     * The transactions to update. Each transaction must have either an `id` or `import_id` specified. If `id` is specified as null an `import_id` value can be provided which will allow transaction(s) to be updated by their `import_id`. If an `id` is specified, it will always be used for lookup.
     */
    patchTransactionsWrapper: shared.PatchTransactionsWrapper;
    /**
     * The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).
     */
    budgetId: string;
}
export declare class UpdateTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request could not be understood due to malformed syntax or validation error(s).
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * The transactions were successfully updated
     */
    saveTransactionsResponse?: shared.SaveTransactionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
