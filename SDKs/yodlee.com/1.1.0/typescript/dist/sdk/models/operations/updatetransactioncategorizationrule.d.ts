import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTransactionCategorizationRulePathParams extends SpeakeasyBase {
    ruleId: number;
}
export declare class UpdateTransactionCategorizationRuleRequest extends SpeakeasyBase {
    pathParams: UpdateTransactionCategorizationRulePathParams;
    request: shared.TransactionCategorizationRuleRequest;
}
export declare class UpdateTransactionCategorizationRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
