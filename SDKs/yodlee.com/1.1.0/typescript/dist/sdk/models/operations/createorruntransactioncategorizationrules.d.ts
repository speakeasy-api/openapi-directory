import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateOrRunTransactionCategorizationRulesQueryParams extends SpeakeasyBase {
    action?: string;
    ruleParam?: string;
}
export declare class CreateOrRunTransactionCategorizationRulesRequest extends SpeakeasyBase {
    queryParams: CreateOrRunTransactionCategorizationRulesQueryParams;
}
export declare class CreateOrRunTransactionCategorizationRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
